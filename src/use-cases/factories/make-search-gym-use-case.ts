import { PrismaGymsRepository } from '@/repositories/prisma/prisma-gyms-repository';
import { SearchGymsUseCase } from '../gym/search-gym';

export function makeCreateGymUseCase() {
  const gymRepository = new PrismaGymsRepository();
  const useCase = new SearchGymsUseCase(gymRepository);

  return useCase;
}
