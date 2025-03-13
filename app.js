const rotaLivro = require("./rotas/livro")
const express = require('express')

const app = express()
app.use(express.json())

app.use("/livros", rotaLivro)

const port = 8000 //npx nodemon app


app.listen(port, () => {
    console.log(`Escutando a porta ${port}`)
})


