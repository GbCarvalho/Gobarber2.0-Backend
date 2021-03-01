import { Request, Response } from 'express';
import { container } from 'tsyringe';

import UserWithoutPassword from '@config/UserWithoutPassword';
import CreateUserService from '@modules/users/services/CreateUserService';

export default class UserController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body;

    const createUser = container.resolve(CreateUserService);

    const user: UserWithoutPassword = await createUser.execute({
      name,
      email,
      password,
    });

    delete user.password;

    return response.json(user);
  }
}
