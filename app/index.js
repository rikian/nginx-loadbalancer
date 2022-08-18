const app = require("express")()
const port = process.env.PORT

app.get("/", (req, res) => {
    return res.send(`wellcome to server port: ${port}`)
})

app.get("/app1", (req, res) => {
    return res.send(`wellcome to server port: ${port}`)
})

app.get("/app2", (req, res) => {
    return res.send(`wellcome to server port: ${port}`)
})

app.get("/admin", (req, res) => {
    return res.send(`wellcome to server port: ${port}`)
})

app.listen(port, () => console.log(`${port} is listen ${port}`))