const { Router } = require('express')
const { googleAuthController } = require('../controllers/auth')
const router = Router() // Allow us to handle request

router.post('/google', googleAuthController)

module.exports = router
