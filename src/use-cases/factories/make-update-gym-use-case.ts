import { PrismaGymsRepository } from '@/repositories/prisma/prisma-gyms-repository';
import { UpdateGymUseCase } from '../gym/update-gym';

export function makeCreateGymUseCase() {
  const gymRepository = new PrismaGymsRepository();
  const useCase = new UpdateGymUseCase(gymRepository);

  return useCase;
}
