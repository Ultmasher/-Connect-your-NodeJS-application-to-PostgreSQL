import express from 'express';

import { getUsers, getUser, postUser, putUser, deleteUser } from '../controllers/users.js';

const usersRouter = express.Router();

usersRouter.get('/', getUsers)
usersRouter.get('/:id', getUser)
usersRouter.post('/', postUser)
usersRouter.put('/:id', putUser)
usersRouter.delete('/:id', deleteUser)

export default usersRouter;