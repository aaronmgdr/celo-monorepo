import Button, { BtnTypes } from '@celo/react-components/components/Button'
import colors from '@celo/react-components/styles/colors'
import { fontStyles } from '@celo/react-components/styles/fonts'
import * as React from 'react'
import { WithNamespaces, withNamespaces } from 'react-i18next'
import { Clipboard, Linking, StyleSheet, Text, View } from 'react-native'
import { Namespaces } from 'src/i18n'
import Logger from 'src/utils/Logger'

const TAG = 'Backup/BackupPhraseContainer'

type Props = {
  words: string | null
  showCopy?: boolean
  showWhatsApp?: boolean
  label?: string
} & WithNamespaces

export class BackupPhraseContainer extends React.Component<Props> {
  copy = () => {
    const { words, t } = this.props
    if (!words) {
      Logger.showMessage(t('failedCopy'))
      Logger.error(TAG, 'Failed to copy mnemonic')
      return
    }

    Clipboard.setString(words)
    Logger.showMessage(t('copied'))
  }

  sendWhatsapp = () => {
    // TODO(Derrick): Analytics here and copy
    const { words, t } = this.props
    if (!words) {
      return
    }

    const msg = encodeURIComponent(t('whatsappMessage') + words)
    Linking.openURL(`https://api.whatsapp.com/send?phone=&text=${msg}`)
  }

  render() {
    const { t, label, words, showCopy, showWhatsApp } = this.props
    return (
      <View style={styles.container}>
        <Text style={styles.labelText}>{label}</Text>
        {!!words && (
          <View style={styles.phraseContainer}>
            <Text style={styles.phraseText}>{`${words}`}</Text>
            <View style={styles.buttonsContainer}>
              {showCopy && (
                <Button
                  onPress={this.copy}
                  text={t('copy')}
                  style={styles.button}
                  standard={true}
                  type={BtnTypes.QUATERNARY}
                />
              )}
              {showWhatsApp && (
                <Button
                  onPress={this.sendWhatsapp}
                  text={t('sendWhatsApp')}
                  style={styles.button}
                  standard={true}
                  type={BtnTypes.PRIMARY}
                />
              )}
            </View>
          </View>
        )}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },
  phraseContainer: {
    position: 'relative',
    backgroundColor: colors.darkLightest,
    borderRadius: 4,
    alignContent: 'center',
    justifyContent: 'center',
    padding: 16,
    marginTop: 4,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    alignSelf: 'center',
    flex: 0.48,
  },
  phraseText: {
    ...fontStyles.h2,
    textAlign: 'left',
  },
  labelText: {
    ...fontStyles.body,
    fontSize: 16,
    textAlign: 'left',
    paddingTop: 15,
  },
})

export default withNamespaces(Namespaces.backupKeyFlow6)(BackupPhraseContainer)