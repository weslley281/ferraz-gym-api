import { randomUUID } from 'crypto';
import { GymsRepository } from '../gyms-repository';
import { Gym, Prisma } from '@prisma/client';

export class InMemoryGymsRepository implements GymsRepository {
  public items: Gym[] = [];

  async create(data: Prisma.GymCreateInput): Promise<Gym> {
    const gym: Gym = {
      id: data.id ?? randomUUID(),
      title: data.title,
      description: data.description,
      cnpj: data.cnpj,
      phone: data.phone,
      email: data.email,
      password_hash: data.password_hash,
      address_line1: data.address_line1,
      address_line2: data.address_line2,
      city: data.city,
      state: data.state,
      country: data.country,
    };

    this.items.push(gym);

    return gym;
  }

  async update(data: Prisma.GymUpdateInput): Promise<Gym> {
    const gym: Gym = {
      id: data.id ?? randomUUID(),
      title: data.title,
      description: data.description,
      cnpj: data.cnpj,
      phone: data.phone,
      email: data.email,
      password_hash: data.password_hash,
      address_line1: data.address_line1,
      address_line2: data.address_line2,
      city: data.city,
      state: data.state,
      country: data.country,
    };

    const index = 0;
    this.items.splice(index, 1, gym);

    return gym;
  }

  async findById(id: string): Promise<any> {
    throw new Error('Method not implemented.');
  }

  async searchMany(query: string, page: number): Promise<Gym[]> {
    throw new Error('Method not implemented.');
  }

  async delete(id: string): Promise<Gym> {
    throw new Error('Method not implemented.');
  }
}
