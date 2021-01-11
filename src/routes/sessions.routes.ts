import { Router } from 'express';
import UserLoginParamsReturn from '../config/userLoginParamsReturn';
import AuthenticateUserService from '../services/AuthenticateUserService';

const sessionsRouter = Router();

sessionsRouter.post('/', async (request, response) => {
  const { email, password } = request.body;

  const authenticateUser = new AuthenticateUserService();

  const {
    user,
    token,
  }: {
    user: UserLoginParamsReturn;
    token: string;
  } = await authenticateUser.execute({
    email,
    password,
  });

  delete user.password;

  return response.json({ user, token });
});

export default sessionsRouter;
