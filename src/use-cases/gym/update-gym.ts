import { GymsRepository } from '@/repositories/gyms-repository';
import { Gym } from '@prisma/client';

interface IRequest {
  id: string;
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

interface IResponse {
  gym: Gym;
}

export class UpdateGymUseCase {
  constructor(private gymsRepository: GymsRepository) {}

  async execute({
    id,
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
  }: IRequest): Promise<IResponse> {
    const gym = await this.gymsRepository.update({
      id,
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
