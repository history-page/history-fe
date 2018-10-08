import * as React from 'react'
import { connect } from 'react-redux'
import 'isomorphic-unfetch'
import Presentational from './Presentational'
import { fetchConfig, initStory } from '../lib/fetchRemoteData'

class Container extends React.Component {
  render() {
    return <Presentational {...this.props} />
  }
}
Container.initRemoteData = async args => {
  const { req, query } = args
  const baseUrl = req ? `${req.protocol}://${req.get('Host')}` : ''
  const storyId = (query && query.id) || (req && req.params && req.params.id)

  const [config, _story] = await Promise.all([
    fetchConfig(args),
    fetch(`${baseUrl}/api/storys/${storyId}`).then(res => res.json())
  ])
  const [categoryList, authorList] = config
  const story = initStory(_story, categoryList, authorList)
  return { story, categoryList, authorList }
}
Container.reset = args => {
  const { store } = args
  store.dispatch({ type: 'TURN_OFF_LOADING' })
}
Container.getInitialProps = async args => {
  Container.reset(args)
  const { store } = args

  const { story, categoryList, authorList } = await Container.initRemoteData(args)

  store.dispatch({ type: 'SET_STORY_SINGLE', story })
  store.dispatch({ type: 'SET_CATEGORYS_LIST', categoryList })
  store.dispatch({ type: 'SET_AUTHORS_LIST', authorList })
  return {}
}

const mapStateToProps = (state, ownProps) => {
  return {
    story: state.storys.story,
    categoryList: state.categorys.categoryList,
    authorList: state.authors.authorList
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    initStoryList: () => {}
  }
}

const Connecter = connect(
  mapStateToProps,
  mapDispatchToProps
)(Container)

export default Connecter
