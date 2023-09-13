import { DeleteGymByIDUseCase } from './delete-gym-by-id';
import { describe, beforeEach, it, expect } from 'vitest';
import { InMemoryGymsRepository } from '@/repositories/in-memory/in-memory-gyms-repository';

let gymsRepository: InMemoryGymsRepository;
let sut: DeleteGymByIDUseCase;

describe('Delete Gym By ID Use Case', () => {
  beforeEach(() => {
    gymsRepository = new InMemoryGymsRepository();
    sut = new DeleteGymByIDUseCase(gymsRepository);
  });

  it('should be able to delete a gym by ID', async () => {
    const gymData = {
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
    };

    await gymsRepository.create(gymData);

    const { gyms } = await sut.execute({ query: '1' });

    expect(gyms).not.toBeNull();
    expect(gyms?.id).toEqual('1');

    const deletedGym = await gymsRepository.findById('1');
    expect(deletedGym).toBeNull();
  });

  it('should return null if no gym is found by ID', async () => {
    const { gyms } = await sut.execute({ query: 'Non-existent ID' });

    expect(gyms).toBeNull();
  });
});
