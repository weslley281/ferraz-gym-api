import { InMemoryGymsRepository } from '@/repositories/in-memory/in-memory-gyms-repository';
import { CreateGymUseCase } from './create-gym';
import { describe, beforeEach, it, expect } from 'vitest';

let gymsRepository: InMemoryGymsRepository;
let sut: CreateGymUseCase;

describe('Create Gym Use Case', () => {
  beforeEach(() => {
    gymsRepository = new InMemoryGymsRepository();
    sut = new CreateGymUseCase(gymsRepository);
  });

  it('shold be able to create a gym', async () => {
    const { gym } = await sut.execute({
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

    expect(gym.id).toEqual(expect.any(String));
  });
});
