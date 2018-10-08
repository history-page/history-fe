import * as React from 'react'
import { Card, Avatar } from 'antd'
import css from './Card.css'
import { Link } from '../../routes/pages'
import { easyReadDateFormat } from '../../lib/time'
const { Meta } = Card

const StoryCard = bgImageStyle => {
  return <div alt="example" className={css.storyCardCover} style={bgImageStyle} />
}

const Description = story => {
  const { author, createdAt, description } = story
  const { name: authorName } = author

  return (
    <div className={css.description}>
      <p className={css.cardDescription}>{description}</p>
      <div className={css.detailWrapper}>
        <span className={[css.authorNameInContent, css.authorName].join(' ')}>{authorName}</span>
        <span className={css.createdTime}>{easyReadDateFormat(createdAt)}</span>
      </div>
    </div>
  )
}

const AuthorAvatar = author => {
  const { imageUrl, name } = author
  return (
    <div className={css.authorAvatar}>
      <Avatar src={imageUrl} />
      <span className={css.authorName}>{name}</span>
    </div>
  )
}

export default class App extends React.Component {
  render() {
    const { story } = this.props
    const imgHeight = '200px'

    const { id, title, coverUrl, author } = story

    const bgImageStyle = {
      backgroundImage: `url(${coverUrl})`,
      minHeight: imgHeight
    }

    return (
      <Link route={`/storys/${id}`} params={{ storyId: id }}>
        <Card cover={StoryCard(bgImageStyle)} bodyStyle={{ padding: '12px' }}>
          <Meta
            avatar={AuthorAvatar(author)}
            title={<div className={css.cartTitle}>{title}</div>}
            description={Description(story)}
          />
        </Card>
      </Link>
    )
  }
}
