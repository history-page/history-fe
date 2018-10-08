import * as React from 'react'
import css from './index.css'
import BasicLayout from '../Layout/Basic'
import StoryIdHeader from '../../src/components/meta/StoryIdHeader'
import EditorHtml from '../../src/components/EditorHtml'
import StoryBanner from '../../src/components/storysId/StoryBanner'

export default class Presentational extends React.Component {
  render() {
    const { story: storyData } = this.props
    return (
      <div>
        <StoryIdHeader storyData={storyData} />
        <BasicLayout {...this.props}>
          <div className={css.storyWrapper}>
            <StoryBanner storyData={storyData} />
            <EditorHtml storyData={storyData} />
          </div>
        </BasicLayout>
      </div>
    )
  }
}
