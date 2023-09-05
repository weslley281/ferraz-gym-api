import 'dotenv/config';
import { z } from 'zod';

const envSchema = z.object({
  NODE_ENV: z.enum(['dev', 'test', 'production']),
  HOST: z.string().default('127.0.0.1'),
  PORT: z.coerce.number().default(5000),
  JWT_SECRET: z.string(),
});

const _env = envSchema.safeParse(process.env);

if (_env.success === false) {
  console.error('❌ Variáveis de ambiente inválidas', _env.error.format());

  throw new Error('Variáveis de ambiente inválidas.');
}

export const env = _env.data;
