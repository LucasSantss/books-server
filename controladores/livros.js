function getLivros(req, res) {
    try {
        res.send("A rota de livros está funcionando!")
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
    res.send("Olá, mundo!")
}
module.exports = {
    getLivros
}