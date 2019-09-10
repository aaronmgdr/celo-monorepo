import colors from '@celo/react-components/styles/colors'
import * as React from 'react'
import Svg, { Path } from 'svgs'

interface Props {
  height?: number
  color?: string
}

export default class WordLogo extends React.Component<Props> {
  static defaultProps = {
    width: 29,
    height: 28,
    color: colors.darkSecondary,
  }

  render() {
    return (
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        height={this.props.height}
        width={this.props.height}
        viewBox="0 0 29 28"
      >
        <Path
          d="M17.8847 4.17414C16.5302 4.17414 15.2135 4.66128 14.181 5.55915C13.1579 6.43791 12.4854 7.66054 12.277 8.98824C12.2296 9.2939 12.2012 9.59956 12.2012 9.90522C12.2012 11.2902 12.6938 12.6275 13.5937 13.6686C14.4841 14.7002 15.706 15.3784 17.0417 15.579C17.3164 15.6172 17.6005 15.6458 17.8847 15.6458C21.0201 15.6458 23.5682 13.0764 23.5682 9.91477C23.5682 6.75312 21.0201 4.17414 17.8847 4.17414ZM17.8847 2.26378C22.0716 2.26378 25.4627 5.68332 25.4627 9.90522C25.4627 14.1271 22.0716 17.5467 17.8847 17.5467C17.5058 17.5467 17.1269 17.518 16.767 17.4607C13.1106 16.9162 10.3067 13.7355 10.3067 9.90522C10.3067 9.48494 10.3351 9.08376 10.4015 8.68259C10.9793 5.04335 14.1052 2.26378 17.8847 2.26378ZM9.61524 8.59662C9.97519 8.59662 10.3351 8.62528 10.6856 8.67303C10.6288 9.05511 10.5909 9.44673 10.5909 9.83835C10.5909 13.5062 13.2716 16.5342 16.7575 17.0595C16.2081 20.5364 13.2148 23.1918 9.61524 23.1918C5.61784 23.1918 2.37825 19.9251 2.37825 15.8942C2.37825 11.8633 5.62732 8.59662 9.61524 8.59662ZM15.7724 25.0448C15.7724 24.5195 16.1986 24.0896 16.7196 24.0896C20.376 24.0896 23.3504 21.0904 23.3504 17.4034C23.3504 16.9735 23.6345 16.5915 24.0513 16.4769C24.4681 16.3622 24.9038 16.5533 25.1122 16.9258L26.9594 20.1734C27.2151 20.6319 27.0636 21.2145 26.6089 21.4724C26.1542 21.7303 25.5764 21.5775 25.3206 21.119L24.7902 20.183C23.644 23.5643 20.4612 26 16.7196 26C16.1986 26 15.7724 25.5797 15.7724 25.0448ZM1.97094 9.07421L0.123798 5.8266C-0.131958 5.36811 0.0196037 4.78545 0.474283 4.52755C0.928963 4.26965 1.50679 4.42248 1.76254 4.88097L2.293 5.81705C3.44865 2.43571 6.6314 0 10.3636 0C10.8846 0 11.3108 0.429831 11.3108 0.95518C11.3108 1.48053 10.8846 1.91036 10.3636 1.91036C6.70718 1.91036 3.73282 4.90963 3.73282 8.59662C3.73282 9.02645 3.44864 9.40852 3.03185 9.52314C2.9466 9.54225 2.87082 9.5518 2.78557 9.5518C2.45403 9.5518 2.14144 9.37032 1.97094 9.07421Z"
          fill={this.props.color}
        />
      </Svg>
    )
  }
}