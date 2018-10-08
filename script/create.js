;(async function() {
  const { createAdmin } = require('../src/lib/firebaseAdmin/auth')

  const email = `xxx`
  const password = 'xxx'

  const user = await createAdmin(email, password)
  console.log(user)
})()
