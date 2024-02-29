const InputPrompt = require("../models/input-prompt")
const openai = require("../config/openai")

/*Modelo que recebe*/
module.exports = {
    async sendText(req, res ){
        const OpenaiAPI = openai.configuration()
        const inputModel = new inputPrompt(req.body)

        try{
            const response = await OpenaiAPI.createCompletion(
                /* Objeto de prompt */
                openai.textCompletion(inputModel)
            )
             
            return res.status(200).json({
                sucess:true,
                data:response.data.choices[0].text
            })

        }   catch (error){
            return res.status(400).json({
                sucess: false,
                error: error.response ? error.response : "there was an inssue on the server"
            })





        }
    }
}