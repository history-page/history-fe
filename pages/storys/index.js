import * as React from 'react'
import { connect } from 'react-redux'
import Presentational from './Presentational'
import { fetchConfig, initStory } from '../lib/fetchRemoteData'
import 'isomorphic-unfetch'

class Container extends React.Component {
  render() {
    return <Presentational {...this.props} />
  }
}
Container.initRemoteData = async args => {
  const { req } = args
  const baseUrl = req ? `${req.protocol}://${req.get('Host')}` : ''

  const [config, _storyList] = await Promise.all([
    fetchConfig(args),
    fetch(`${baseUrl}/api/storys`).then(res => res.json())
  ])
  const [categoryList, authorList] = config
  const storyList = _storyList.map(item => initStory(item, categoryList, authorList))
  return { storyList, categoryList, authorList }
}
Container.reset = args => {
  const { store } = args
  store.dispatch({ type: 'TURN_OFF_LOADING' })
  return store.dispatch({ type: 'SET_STORY_LIST', storyList: [] })
}
Container.getInitialProps = async args => {
  Container.reset(args)
  // cant get this.props.mapDispatchToProps
  const { store } = args
  const { storyList, categoryList, authorList } = await Container.initRemoteData(args)
  store.dispatch({ type: 'SET_STORY_LIST', storyList })
  store.dispatch({ type: 'SET_CATEGORYS_LIST', categoryList })
  store.dispatch({ type: 'SET_AUTHORS_LIST', authorList })
  return {}
}

const mapStateToProps = (state, ownProps) => {
  return {
    storyList: state.storys.storyList,
    categoryList: state.categorys.categoryList,
    authorList: state.authors.authorList,
    system: state.system
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    initStoryList: () => {},
    turnOnLoading: () => dispatch({ type: 'SET_AUTHORS_LIST' })
  }
}

const Connecter = connect(
  mapStateToProps,
  mapDispatchToProps
)(Container)

export default Connecter
