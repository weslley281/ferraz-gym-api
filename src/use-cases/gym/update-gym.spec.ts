import { Gym } from '@prisma/client';
import { UpdateGymUseCase } from './update-gym';
import { describe, beforeEach, it, expect } from 'vitest';
import { InMemoryGymsRepository } from '@/repositories/in-memory/in-memory-gyms-repository';

let gymsRepository: InMemoryGymsRepository;
let sut: UpdateGymUseCase;

describe('Update Gym Use Case', () => {
  beforeEach(() => {
    gymsRepository = new InMemoryGymsRepository();
    sut = new UpdateGymUseCase(gymsRepository);
  });

  it('should be able to update a gym', async () => {
    await gymsRepository.create({
      id: '1234567890',
      title: 'Quebra Dentes',
      description: 'Somos uma academia de Artes Marciais',
      phone: '(65)98123-3996',
      email: 'quebradentes@gmail.com',
      address_line1: 'aaaaaaaaaaaaaa',
      address_line2: 'bbbbbbbbbbbbbbbbb',
      city: 'Várzea Grande',
      state: 'Mato Grosso',
      cnpj: '11.111.111/00001-01',
      country: 'Brasil',
      password_hash: '123456',
    });

    const { gym } = await sut.execute({
      id: '1234567890',
      title: 'Novo Título',
      description: 'Somos uma academia de Artes Marciais',
      phone: '(65)98123-3996',
      email: 'quebradentes@gmail.com',
      address_line1: 'aaaaaaaaaaaaaa',
      address_line2: 'bbbbbbbbbbbbbbbbb',
      city: 'Várzea Grande',
      state: 'Mato Grosso',
      cnpj: '11.111.111/00001-01',
      country: 'Brasil',
      password_hash: '123456',
    });

    expect(gym.title).toEqual('Novo Título');
  });
});
