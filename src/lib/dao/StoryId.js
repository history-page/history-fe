const Base = require('./Base.js')

const storyParser = item => {
  const rawContent = JSON.parse(item.data)
  const name = item.title

  return {
    ...item,
    name,
    rawContent
  }
}

module.exports = class StoryId extends Base {
  constructor(database, ref) {
    super(database)

    if (ref) this.ref = ref
    else this.ref = this.database.ref('Storys/')
  }

  async onceFunction(storyId) {
    const result = await this.ref.child(storyId).once('value')
    this.data = result.val()
    return super.onceFunction(storyId)
  }

  normalize(result) {
    const parsedStory = storyParser(result)

    return {
      ...parsedStory,
      categorys: this.fbListToArray(parsedStory.categorys)
    }
  }
}
