import {container} from 'tsyringe';

import IAppointmentRepository from '@modules/appointments/repositories/IAppointmentRepository';
import AppointmentsRepository from '@modules/appointments/infra/typeorm/repositories/AppointmentsRepository';

container.registerSingleton<IAppointmentRepository>(
  'AppointmentsRepository', 
  AppointmentsRepository
  );

