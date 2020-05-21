import AppError from '@shared/error/AppError';
import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import FakeHashProvider from '../providers/HashProvider/fakes/FakeHashProvider';
import AuthenticateUserService from './AuthenticateUserService';
import CreateUserService from './CreateUserService';

describe('AuthenticateUser', () => {
  it('should be able to authenticate', async () => {
    const fakeUserRepository = new FakeUsersRepository();
    const fakeHashProvider = new FakeHashProvider();

    const authenticateUser = new AuthenticateUserService(
      fakeUserRepository,
      fakeHashProvider
    );
    const createUser = new CreateUserService(fakeUserRepository, fakeHashProvider);

    const user = await createUser.execute({
      name: 'John Doe',
      email: 'johndoe@rocketseat.com',
      password: '123456'
    });

    const response = await authenticateUser.execute({
      email: 'johndoe@rocketseat.com',
      password: '123456'
    });

    expect(response).toHaveProperty('token');
    expect(response.user).toEqual(user);
  });
  
});
