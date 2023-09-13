import { describe, beforeEach, it, expect } from 'vitest';
import { InMemoryGymsRepository } from '@/repositories/in-memory/in-memory-gyms-repository';
import { SearchGymsUseCase } from './search-gym';

let gymsRepository: InMemoryGymsRepository;
let sut: SearchGymsUseCase;

describe('Shoud be able to search by many', () => {
  beforeEach(() => {
    gymsRepository = new InMemoryGymsRepository();
    sut = new SearchGymsUseCase(gymsRepository);
  });

  it('should be able to search gyms', async () => {
    await gymsRepository.create({
      id: '1',
      title: 'Gym 1',
      description: 'Description 1',
      phone: '1234567890',
      email: 'gym1@example.com',
      address_line1: 'Address 1',
      address_line2: 'Address 2',
      city: 'City 1',
      state: 'State 1',
      cnpj: '11.111.111/00001-01',
      country: 'Country 1',
      password_hash: 'password123',
    });

    await gymsRepository.create({
      id: '2',
      title: 'Gym 2',
      description: 'Description 2',
      phone: '0987654321',
      email: 'gym2@example.com',
      address_line1: 'Address 3',
      address_line2: 'Address 4',
      city: 'City 2',
      state: 'State 2',
      cnpj: '22.222.222/00002-02',
      country: 'Country 2',
      password_hash: 'password456',
    });

    const { gyms } = await sut.execute({
      query: 'Gym',
      page: 1,
    });

    expect(gyms.length).toBe(2);
    expect(gyms[0].title).toEqual('Gym 1');
    expect(gyms[1].title).toEqual('Gym 2');
  });

  it('should return an empty array if no gyms match the query', async () => {
    const { gyms } = await sut.execute({
      query: 'Non-existent Gym',
      page: 1,
    });

    expect(gyms.length).toBe(0);
  });
});
