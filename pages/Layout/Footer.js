import * as React from 'react'
import css from './Footer.css'
import { Layout, Icon } from 'antd'
const { Footer } = Layout

const YOUTUBE_LINK = process.env.YOUTUBE_LINK || ''
const FACEBOOK_LINK = process.env.FACEBOOK_LINK || ''
const EMAIL_LINK = process.env.EMAIL_LINK || ''

/* FIXME 跑const的時候不會拿到 window 的資料
const YOUTUBE_LINK = process.env.YOUTUBE_LINK || window.YOUTUBE_LINK || ''
const FACEBOOK_LINK = process.env.FACEBOOK_LINK || window.FACEBOOK_LINK || ''
const EMAIL_LINK = process.env.EMAIL_LINK || window.EMAIL_LINK || ''
*/

export default class FooterComponent extends React.Component {
  render() {
    // const { config } = this.props
    return (
      <Footer className={css.footerWrapper} style={{ background: 'black' }}>
        <div className={css.contentWrapper}>
          <span>Copyright © 2018 yakyunews. </span>
          <span> 專業日本職棒新聞、評論、以及所有日本棒球資訊網站 </span>
        </div>
        <div className={css.iconWrapper}>
          <a href={EMAIL_LINK}>
            <Icon type="mail" theme="outlined" className={css.icon} />
          </a>
          <a href={FACEBOOK_LINK}>
            <Icon type="facebook" theme="outlined" className={css.icon} />
          </a>
          <a href={YOUTUBE_LINK}>
            <Icon type="youtube" theme="outlined" className={css.icon} />
          </a>
        </div>
      </Footer>
    )
  }
}
