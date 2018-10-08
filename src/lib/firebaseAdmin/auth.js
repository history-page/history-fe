const { auth } = require('./init')

const createAdmin = async (email, password) => {
  const { uid } = await auth.createUser({ email, password })

  await auth.setCustomUserClaims(uid, { admin: true })

  return await auth.getUser(uid)
}

module.exports = {
  createAdmin
}
