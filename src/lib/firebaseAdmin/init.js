const firebaseAdmin = require('firebase-admin')

if (!firebaseAdmin.apps.length) {
  firebaseAdmin.initializeApp({
    credential: firebaseAdmin.credential.cert({
      type: 'service_account',
      project_id: process.env.FIREBASE_PROJECT_ID,
      private_key_id: process.env.FIREBASE_ADMIN_PRIVATE_KEY_ID,
      private_key: process.env.FIREBASE_ADMIN_PRIVATE_KEY.replace(/\\n/g, '\n').replace('"', ''),
      client_email: process.env.FIREBASE_ADMIN_CLIENT_EMAIL,
      client_id: process.env.FIREBASE_ADMIN_CLIENT_ID,
      auth_uri: process.env.FIREBASE_ADMIN_AUTH_URI,
      token_uri: process.env.FIREBASE_ADMIN_TOKEN_URI,
      auth_provider_x509_cert_url: process.env.FIREBASE_ADMIN_AUTH,
      client_x509_cert_url: process.env.FIREBASE_ADMIN_AUTH_CLIENT
    }),
    databaseURL: process.env.FIREBASE_DATABASE_URL
  })
}

const database = firebaseAdmin.database()
const auth = firebaseAdmin.auth()

module.exports = {
  database,
  firebaseAdmin,
  auth
}
