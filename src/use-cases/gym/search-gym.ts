import { GymsRepository } from '@/repositories/gyms-repository';
import { Gym } from '@prisma/client';

interface IRequest {
  query: string;
  page: number;
}

interface IResponse {
  gyms: Gym[];
}

export class SearchGymsUseCase {
  constructor(private gymsRepository: GymsRepository) {}

  execute;
}
