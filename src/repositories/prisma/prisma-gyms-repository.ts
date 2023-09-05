import { Gym, Prisma } from '@prisma/client';
import { prisma } from '@/lib/prisma';
import { GymsRepository } from '../gyms-repository';

export class PrismaGymsRepository implements GymsRepository {
  async create(data: Prisma.GymCreateInput): Promise<Gym> {
    const gym = await prisma.gym.create({ data });
    return gym;
  }

  async update(data: Prisma.GymUpdateInput): Promise<Gym> {
    const where: Prisma.GymWhereUniqueInput = { id: data.id };
    const gym = await prisma.gym.update({
      where: { id: data.id },
      data,
    });
    return gym;
  }

  async findById(id: string): Promise<Gym | null> {
    const gym = await prisma.gym.findUnique({ where: { id } });

    return gym;
  }

  async searchMany(query: string, page: number): Promise<Gym[]> {
    const gym = await prisma.gym.findMany({
      where: { title: { contains: query } },
      take: 20,
      skip: (page - 1) * 20,
    });

    return gym;
  }

  async delete(id: string): Promise<Gym> {
    const gym = await prisma.gym.delete({ where: { id } });
    return gym;
  }
}
