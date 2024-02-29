const app = require("./app")
const port = process.env.PORT || 5000 

//3000 ou 5000

app.listen(port, ()=>{
    console.log(`Server listening on port ${port} `)
})