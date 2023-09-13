import { Gym, Prisma } from '@prisma/client';

export interface GymsRepository {
  create(data: Prisma.GymCreateInput): Promise<Gym>;
  update(data: Prisma.GymUpdateInput): Promise<Gym>;
  findById(id: string): Promise<Gym | null>;
  searchMany(query: string, page: number): Promise<Gym[]>;
  delete(id: string): Promise<Gym | null>;
}
