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

  async findById(id: string): Promise<Gym | null> {
    const gym = this.items.find((item) => item.id === id);

    if (!gym) {
      return null;
    }

    return gym;
  }

  async searchMany(query: string, page: number): Promise<Gym[]> {
    return this.items
      .filter((item) => item.title.includes(query))
      .slice((page - 1) * 20, page * 20);
  }

  async delete(id: string): Promise<Gym | null> {
    const index = this.items.findIndex((gym) => gym.id === id);

    if (index === -1) {
      return null;
    }

    const deletedGym = this.items.splice(index, 1)[0];

    return deletedGym;
  }
}
