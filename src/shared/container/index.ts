import {container} from 'tsyringe';

import '@modules/users/providers';

import IAppointmentRepository from '@modules/appointments/repositories/IAppointmentRepository';
import AppointmentsRepository from '@modules/appointments/infra/typeorm/repositories/AppointmentsRepository';

import IUserRepository from '@modules/users/repositories/IUserRepository';
import UserRepositories from '@modules/users/infra/typeorm/repositories/UserRepositories';


container.registerSingleton<IAppointmentRepository>(
  'AppointmentsRepository', 
  AppointmentsRepository
  );

  container.registerSingleton<IUserRepository>(
    'UserRepositories', 
    UserRepositories
    );

