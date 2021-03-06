import Document, { Head, Main, NextScript } from 'next/document'
import * as React from 'react'
import { AppRegistry, I18nManager } from 'react-native-web'
import analytics from 'src/analytics/analytics'
import { setDimensionsForScreen } from 'src/layout/ScreenSize'
import Sentry from '../fullstack/sentry'
import { isLocaleRTL } from '../server/i18nSetup'
// @ts-ignore
const a = analytics

interface NextInitalProps {
  pathname: string
  query: any
  asPath: string
  req?: any
  res?: object
  err?: object
  renderPage: () => any
}

export default class MyDocument extends Document {
  static async getInitialProps(context: NextInitalProps) {
    const locale = context.req.locale
    const userAgent = context.req.headers['user-agent']
    setDimensionsForScreen(userAgent)

    AppRegistry.registerComponent('Main', () => Main)

    // Use RTL layout for appropriate locales. Remember to do this client-side too.
    I18nManager.setPreferredLanguageRTL(isLocaleRTL(locale))

    // Get the html and styles needed to render this page.
    const { getStyleElement } = AppRegistry.getApplication('Main')
    const page = context.renderPage()
    const styles = React.Children.toArray([
      // <style key={'normalize-style'} dangerouslySetInnerHTML={{ __html: normalizeNextElements }} />,
      page.styles,
      getStyleElement(),
    ])

    if (context.err) {
      Sentry.captureException(context.err)
    }

    return { ...page, locale, styles: React.Children.toArray(styles), pathname: context.pathname }
  }

  render() {
    // @ts-ignore
    const { locale, pathname } = this.props
    return (
      <html lang={locale} style={{ height: '100%', width: '100%' }}>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link rel="stylesheet" href={'/static/normalize.css'} />

          <link rel="preconnect" href="https://use.typekit.net" />
          <link rel="stylesheet" href="https://use.typekit.net/dki6jkb.css" />

          <link rel="shortcut icon" type="image/x-icon" href="/static/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
