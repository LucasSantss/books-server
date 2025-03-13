const { Router } = require("express")
const { getLivros } = require("../controladores/livros")

const router = Router()

router.get("/", getLivros)

router.post('/', (req, res) => {
    res.send("Você fez um post com sucesso!")
})

router.patch('/', (req, res) => {
    res.send("Você fez um patch com sucesso!")
})

router.delete('/', (req, res) => {
    res.send("Você fez um delete com sucesso!")
})

module.exports = router