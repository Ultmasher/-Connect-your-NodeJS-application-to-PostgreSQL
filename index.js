import express from 'express';
import cors from 'cors';


const app = express();
const port = 3001;


app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
  })