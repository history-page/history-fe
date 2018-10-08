import * as React from 'react'
import { Card, Tag, Icon } from 'antd'
import css from './Card.css'
import { Link } from '../../routes/pages'
import { easyReadDateFormat } from '../../lib/time'

const StoryCard = (story, bgImageStyle, isShowDetail) => {
  const { title, createdAt, categorys } = story

  const bottomContentStyle = isShowDetail
    ? css.cardBottomContent
    : [css.cardBottomContent, css.isShowDetail].join(' ')

  const cardMetatStyle = isShowDetail ? css.cardMeta : [css.cardMeta, css.isShowDetail].join(' ')

  return (
    <div alt="example" className={css.storyCardCover} style={bgImageStyle}>
      <div className={css.storyCardCoverOverlay} />
      <div className={cardMetatStyle}>
        <div className={css.cardTitleContent}>
          {!isShowDetail && title}
          {isShowDetail && <b>{title}</b>}
        </div>

        <div className={bottomContentStyle}>
          {categorys.map(({ name, id }) => {
            return (
              <Tag key={name} color="#1a4fb3" style={{ borderRadius: '0' }}>
                <Link route={`/categorys/${id}`} params={{ id: id }}>
                  {name}
                </Link>
              </Tag>
            )
          })}
          <div className={css.createdTime}>
            <Icon type="clock-circle" theme="outlined" className={css.clockIcon} />
            {easyReadDateFormat(createdAt)}
          </div>
        </div>
      </div>
    </div>
  )
}

export default class App extends React.Component {
  render() {
    const { story, height, index, turnOnLoading, isDetail } = this.props
    const { id, coverUrl } = story

    // const loading = story ? false : true

    const bgImageStyle = {
      backgroundImage: `url(${coverUrl})`,
      minHeight: height
    }

    return (
      <Link route={`/storys/${id}`} params={{ storyId: id }}>
        <Card
          cover={StoryCard(story, bgImageStyle, isDetail)}
          bordered={false}
          hoverable
          bodyStyle={{ display: 'none' }}
        />
      </Link>
    )
  }
}
