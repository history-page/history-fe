import * as React from 'react'
import css from './Basic.css'
import { Link } from '../../src/routes/pages'
import getConfig from 'next/config'
const { publicRuntimeConfig } = getConfig()
const { LOGO_URL_800H } = publicRuntimeConfig

const LOGO_URL = LOGO_URL_800H || '/static/logoBlack.jpg'

export default class LogoWrapper extends React.Component {
  render() {
    return (
      <div className={css.header}>
        <Link route="storys">
          <img alt={'LOGO'} src={LOGO_URL} />
        </Link>
      </div>
    )
  }
}
