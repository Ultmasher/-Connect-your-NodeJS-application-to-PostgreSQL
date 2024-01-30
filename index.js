import express from 'express';
import usersRouter from './routes/users';
import ordersRouter from './routes/orders';

const app = express();
const port = 3001;

app.use(express.json());

app.use("/users", usersRouter);
app.use("/orders", ordersRouter);


app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
  })