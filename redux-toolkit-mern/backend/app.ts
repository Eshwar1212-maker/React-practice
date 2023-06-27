import express from 'express';
import cors from "cors"
import "dotenv/config"

const app = express();
const port = 3004;
app.use(express.json())


app.get('/', (req, res) => {
  res.send('Hello World!');
});




export {app}