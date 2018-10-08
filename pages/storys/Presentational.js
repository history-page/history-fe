import * as React from 'react'
import BasicLayout from '../Layout/Basic'
import List from '../../src/components/storysList/List'

export default class Presentational extends React.Component {
  render() {
    const { categoryList, storyList, system } = this.props
    return (
      <BasicLayout categoryList={categoryList} system={system}>
        <List storyList={storyList} />
      </BasicLayout>
    )
  }
}
