const { Router } = require("express")
const { getLivros, getLivro, postLivro } = require("../controladores/livros")

const router = Router()

router.get("/", getLivros)

router.get("/:id", getLivro)

router.post('/', postLivro)

router.patch('/', (req, res) => {
    res.send("Você fez um patch com sucesso!")
})

router.delete('/', (req, res) => {
    res.send("Você fez um delete com sucesso!")
})

module.exports = router