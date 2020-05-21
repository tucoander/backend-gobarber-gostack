import AppError from '@shared/error/AppError';
import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import AuthenticateUserService from './AuthenticateUserService';
import CreateUserService from './CreateUserService';

describe('AuthenticateUser', () => {
  it('should be able to authenticate', async () => {
    const fakeUserRepository = new FakeUsersRepository();
    const authenticateUser = new AuthenticateUserService(
      fakeUserRepository,
    );
    const createUser = new CreateUserService(fakeUserRepository);

    await createUser.execute({
      name: 'John Doe',
      email: 'johndoe@rocketseat.com',
      password: '123456'
    });

    const response = await authenticateUser.execute({
      email: 'johndoe@rocketseat.com',
      password: '123456'
    });

    expect(response).toHaveProperty('token');
  });
  
});
