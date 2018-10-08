const Base = require('./Base.js')

const storyParser = item => {
  const rawContent = JSON.parse(item.data)
  return {
    ...item,
    rawContent
  }
}

module.exports = class Categorys extends Base {
  constructor(database, ref) {
    super(database)

    if (ref) this.ref = ref
    else this.ref = this.database.ref('Storys/')
  }

  async onceFunction() {
    const result = await this.ref.once('value')
    this.data = result.val()
    return super.onceFunction()
  }

  normalize(result) {
    const list = this.fbListToArray(result)
    return list.map(item => {
      const parsedList = storyParser(item)
      return {
        ...parsedList,
        categorys: this.fbListToArray(parsedList.categorys)
      }
    })
  }
}
