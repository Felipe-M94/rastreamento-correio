const express = require("express")
const cors = require("cors")
const TrackingCorreios = require("tracking-correios")
const app = express()

app.use(cors())

const port = 3001

const get = (object, path, fallback = null) => {
  const pathKeys = typeof path === "string" ? path.split(".").filter(key => key.length) : [];
  const result = pathKeys.reduce((dive, key) => dive && dive[key], object);
  return result || fallback;
};

//recebendo o código de rastreamento através da requisição e enviando para api do correios.
app.get("/", (req, res) => {
  const { tracking } = req.query;
  if (!tracking) {
    return res.json({ message: "Tracking not provided" })
  }
  TrackingCorreios.track(tracking).then(data => {
    return res.json({
      message: "OK",
      data,
      tracking
    })
  })
})

app.listen(port, () => console.log(`Online na Porta ${port}`))