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
    for (const gym of this.items) {
      if (gym.id === id) {
        return gym;
      }
    }

    return null;
  }

  async searchMany(query: string, page: number): Promise<Gym[]> {
    const gyms = [];

    for (const gym of this.items) {
      if (
        gym.title.toLowerCase().includes(query.toLowerCase()) ||
        gym.description?.toLowerCase().includes(query.toLowerCase()) ||
        gym.cnpj?.toLocaleLowerCase().includes(query.toLowerCase()) ||
        gym.email.toLocaleLowerCase().includes(query.toLowerCase()) ||
        gym.city.toLocaleLowerCase().includes(query.toLowerCase()) ||
        gym.state.toLocaleLowerCase().includes(query.toLowerCase()) ||
        gym.country.toLocaleLowerCase().includes(query.toLowerCase())
      ) {
        gyms.push(gym);
      }
    }

    const gymsPerPage = 10;
    const startIndex = page * gymsPerPage;
    const endIndex = Math.min(startIndex + gymsPerPage, gyms.length);

    return gyms.slice(startIndex, endIndex);
  }

  async delete(id: string): Promise<Gym> {
    throw new Error('Method not implemented.');
  }
}
