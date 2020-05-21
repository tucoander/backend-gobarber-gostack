import AppError from '@shared/error/AppError';
import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import CreateUserService from './CreateUserService';

describe('CreateUser', () => {
  it('should be able to create a new user', async () => {
    const fakeUserRepository = new FakeUsersRepository();
    const createUser = new CreateUserService(
      fakeUserRepository,
    );

    const user = await createUser.execute({
      name: 'John Doe',
      email: 'johndoe@rocketseat.com',
      password: '123456'
    });

    expect(user).toHaveProperty('id');
  });
});
