import { GymsRepository } from '@/repositories/gyms-repository';
import { Gym } from '@prisma/client';

interface IRequest {
  query: string;
}

interface IResponse {
  gyms: Gym | null;
}

export class DeleteGymByIDUseCase {
  constructor(private gymsRepository: GymsRepository) {}

  async execute({ query }: IRequest): Promise<IResponse> {
    const gyms = await this.gymsRepository.delete(query);

    return { gyms };
  }
}
