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
  const { req, query } = args
  const baseUrl = req ? `${req.protocol}://${req.get('Host')}` : ''
  const categoryId = (query && query.id) || (req && req.params && req.params.id)

  const [config, _storyList] = await Promise.all([
    fetchConfig(args),
    fetch(`${baseUrl}/api/storys?categoryId=${categoryId}`).then(res => res.json())
  ])
  const [categoryList, authorList] = config
  const currentCategory = categoryList.find(item => item.id === categoryId)
  const storyList = _storyList.map(item => initStory(item, categoryList, authorList))
  return { storyList, categoryList, authorList, currentCategory }
}
Container.rest = args => {
  const { store } = args
  return store.dispatch({ type: 'SET_STORY_LIST', storyList: [] })
}
Container.getInitialProps = async args => {
  Container.rest(args)
  // cant get this.props.mapDispatchToProps
  const { store } = args
  const { storyList, categoryList, authorList, currentCategory } = await Container.initRemoteData(
    args
  )
  const system = { currentCategory }
  store.dispatch({ type: 'SET_STORY_LIST', storyList })
  store.dispatch({ type: 'SET_CATEGORYS_LIST', categoryList })
  store.dispatch({ type: 'SET_AUTHORS_LIST', authorList })
  store.dispatch({ type: 'SET_SYSTEM', system })
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
    initStoryList: () => {}
  }
}

const Connecter = connect(
  mapStateToProps,
  mapDispatchToProps
)(Container)

export default Connecter
