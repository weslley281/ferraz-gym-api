import { GymsRepository } from '@/repositories/gyms-repository';
import { Gym } from '@prisma/client';

interface CreateGymUseCaseRequest {
  title: string;
  description: string | null;
  phone: string;
  address_line1: string;
  address_line2: string;
  city: string;
  country: string;
  email: string;
  password_hash: string;
  state: string;
  cnpj: string;
}

interface CreateGymUseCaseResponse {
  gym: Gym;
}

export class CreateGymUseCase {
  constructor(private gymsRepository: GymsRepository) {}

  async execute({
    title,
    description,
    phone,
    address_line1,
    address_line2,
    city,
    country,
    email,
    password_hash,
    state,
    cnpj,
  }: CreateGymUseCaseRequest): Promise<CreateGymUseCaseResponse> {
    const gym = await this.gymsRepository.create({
      title,
      description,
      phone,
      address_line1,
      address_line2,
      city,
      country,
      email,
      password_hash,
      state,
      cnpj,
    });

    return {
      gym,
    };
  }
}
