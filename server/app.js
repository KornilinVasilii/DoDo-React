import express from "express";
import cors from "cors";
import data from "./data.json" assert { type: "json" };

const app = express()

app.use(express.json())
app.use(cors())
app.use('/photos', express.static(`./assets/images/`));

app.get("/api", (req, res) => {
  return res.status(201).json(data);
});

app.listen(5000, () => { 
  console.log('Server has been started...')
})