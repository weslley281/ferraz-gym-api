import { PrismaGymsRepository } from '@/repositories/prisma/prisma-gyms-repository';
import { DeleteGymByIDUseCase } from '../gym/delete-gym-by-id';

export function makeCreateGymUseCase() {
  const gymRepository = new PrismaGymsRepository();
  const useCase = new DeleteGymByIDUseCase(gymRepository);

  return useCase;
}
