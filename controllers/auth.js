const { request, response } = require('express')

const googleAuthController = (req = request, res = response) => {
  const token = req.body.token

  res.json({
    ok: true,
    token,
  })
}

module.exports = {
  googleAuthController,
}
