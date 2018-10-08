const routes = require('next-routes')
// Name   Page      Pattern
module.exports = routes() // ----   ----      -----
  .add('storys', '/storys') // storys   storys      /storys
  .add('storysId', '/storys/:id', 'storysId') // storysId   storysId      /storys/:id
  .add('categorysId', '/categorys/:id', 'categorysId') // categorysId   categorysId      /categorys/:id
