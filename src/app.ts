import fastify from 'fastify';
import fastifyJwt from '@fastify/jwt';
import { env } from './env';
import fastifyCookie from '@fastify/cookie';
import { ZodError } from 'zod';
export const app = fastify();

app.register(fastifyJwt, {
  secret: env.JWT_SECRET,
  cookie: { cookieName: 'refreshToken', signed: false },
  sign: { expiresIn: '10m' },
});
app.register(fastifyCookie);

app.setErrorHandler((error, request, reply) => {
  if (error instanceof ZodError) {
    return reply
      .status(400)
      .send({ message: 'Validation', insues: error.format() });
  }

  if (env.NODE_ENV !== 'production') {
    console.log(error);
  }

  return reply.status(500).send({ message: 'Erro interno do servidor' });
});
