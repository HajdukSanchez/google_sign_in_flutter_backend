const { OAuth2Client } = require('google-auth-library')

const WEB_CLIENT_ID = process.env.WEB_CLIENT_ID

// Client ID comes from our Google Developer Console API project
const client = new OAuth2Client(WEB_CLIENT_ID)

const validateGoogleToken = async (token) => {
  try {
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: [WEB_CLIENT_ID, process.env.IOS_CLIENT_ID, process.env.ANDROID_CLIENT_ID],
    })

    const payload = ticket.getPayload()

    return {
      name: payload['name'],
      picture: payload['picture'],
      email: payload['email'],
    }
  } catch (error) {
    return null
  }
}

module.exports = { validateGoogleToken }
