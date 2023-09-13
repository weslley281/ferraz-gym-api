import { PrismaGymsRepository } from '@/repositories/prisma/prisma-gyms-repository';
import { CreateGymUseCase } from '../gym/create-gym';

export function makeCreateGymUseCase() {
  const gymRepository = new PrismaGymsRepository();
  const useCase = new CreateGymUseCase(gymRepository);

  return useCase;
}
