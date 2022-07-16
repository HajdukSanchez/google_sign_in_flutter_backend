const { validateGoogleToken } = require('../helpers/google-verify-token')
const { request, response } = require('express')

const googleAuthController = async (req = request, res = response) => {
  const token = req.body.token

  if (!token) {
    return res.json({
      ok: false,
      message: 'No token provided',
    })
  }

  const googleUser = await validateGoogleToken(token)

  if (googleUser == null) return res.status(400).json({ ok: false })

  res.json({
    ok: true,
    ...googleUser,
  })
}

module.exports = {
  googleAuthController,
}
