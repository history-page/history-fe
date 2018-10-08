import React from 'react'
import PropTypes from 'prop-types'
import Css from './AtomicEmbedComponent.css'

const getInnerHtml = url => {
  if (url.indexOf('<iframe') !== -1) {
    const iframeSrc = url.split(' ')[1]
    if (iframeSrc.indexOf('src="https://player.vimeo.com/video/') !== -1) {
      // http://tv.pacificleague.jp/vod/pc/topics/sns/27948 iframe
      return `<iframe ${iframeSrc} width="640" height="360" frameborder="0" allowfullscreen />`
    }
    return ''
  }

  if (url.indexOf('www.youtube.com') !== -1) {
    //youtube origin link
    const _url = new URL(url)
    const getVideoHash = _url.searchParams.get('v')
    return `<iframe width="640" height="360" src="https://www.youtube.com/embed/${getVideoHash}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`
  }

  if (url.indexOf('youtu.be') !== -1) {
    // youtube share Link
    const _url = new URL(url)
    const getVideoHash = _url.pathname
    return `<iframe width="640" height="360" src="https://www.youtube.com/embed/${getVideoHash}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`
  }

  return ''
}

export default class AtomicEmbedComponent extends React.Component {
  static propTypes = {
    data: PropTypes.object.isRequired
  }
  render() {
    const { url } = this.props.data
    const innerHTML = getInnerHtml(url)
    return (
      <div className={Css.embededVideoBlock}>
        <div dangerouslySetInnerHTML={{ __html: innerHTML }} />
      </div>
    )
  }
}
