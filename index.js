const express = require("express")

const app = express()

app.get("/",(reg,res) => {
	res.redirect("https://www.google.com")
})

app.listen(4000)