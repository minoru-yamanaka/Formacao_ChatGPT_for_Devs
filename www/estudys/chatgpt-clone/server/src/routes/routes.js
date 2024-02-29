const express = require ("express")
const promptController = require("../controllers/prompt-controller")

/*arvore de rotas */
const routes = express.Router()

routes.post('api/prompt', promptController.sendText)

module.exports = routes 