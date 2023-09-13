import { makeCreateGymUseCase } from '@/use-cases/factories/make-create-gym-use-case';
import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';

export async function create(request: FastifyRequest, response: FastifyReply) {
  const createGymBodySchema = z.object({
    title: z.string(),
    description: z.string(),
    cnpj: z.string(),
    phone: z.string(),
    email: z.string(),
    password_hash: z.string(),
    address_line1: z.string(),
    address_line2: z.string(),
    city: z.string(),
    state: z.string(),
    country: z.string(),
  });

  const {
    title,
    description,
    cnpj,
    phone,
    email,
    password_hash,
    address_line1,
    address_line2,
    city,
    state,
    country,
  } = createGymBodySchema.parse(request.body);

  const createGymUseCase = makeCreateGymUseCase();

  await createGymUseCase.execute({
    title,
    description,
    cnpj,
    phone,
    email,
    password_hash,
    address_line1,
    address_line2,
    city,
    state,
    country,
  });

  return response.status(201).send({ message: 'Created', createGymUseCase });
}
