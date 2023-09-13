import { GymsRepository } from '@/repositories/gyms-repository';
import { Gym } from '@prisma/client';

interface IRequest {
  query: string;
}

interface IResponse {
  gyms: Gym | null;
}

export class SearchGymByIDUseCase {
  constructor(private gymsRepository: GymsRepository) {}

  async execute({ query }: IRequest): Promise<IResponse> {
    const gyms = await this.gymsRepository.findById(query);

    return { gyms };
  }
}
