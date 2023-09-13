import { PrismaGymsRepository } from '@/repositories/prisma/prisma-gyms-repository';
import { SearchGymByIDUseCase } from '../gym/search-gym-by-id';

export function makeCreateGymUseCase() {
  const gymRepository = new PrismaGymsRepository();
  const useCase = new SearchGymByIDUseCase(gymRepository);

  return useCase;
}
