import * as React from 'react'
import { Icon, Tag } from 'antd'
import css from './StoryBanner.css'
import { timestampToDateFormat } from '../../lib/time'
import { Link } from '../../routes/pages'

export default class App extends React.Component {
  render() {
    const { storyData } = this.props
    const { createdAt, author, categorys } = storyData
    const { name: authorName } = author

    return (
      <div className={css.bannerWrapper}>
        <div className={css.bannerCategory}>
          {categorys.map(({ name, id }) => {
            return (
              <Tag key={name} color="#1b2a4c" style={{ borderRadius: '0' }}>
                <Link route={`/categorys/${id}`} params={{ id: id }}>
                  {name}
                </Link>
              </Tag>
            )
          })}
        </div>
        <div className={css.bannerAuthor}>
          <span>作者 : {authorName}</span>
        </div>

        <div className={css.bannerCreatedAt}>
          <Icon type="clock-circle" theme="outlined" />
          <span>{timestampToDateFormat(createdAt, true)}</span>
        </div>
      </div>
    )
  }
}
