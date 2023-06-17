import { FastifyInstance } from 'fastify'
import { register } from './controllers/register'
import { authenticate } from '@/http/controllers/authenticate'
import { profile } from '@/http/controllers/profile'
import { verifyJwt } from '@/http/middlewares/verify-jwt'

export async function appRoutes(app: FastifyInstance) {
  app.post('/users', register)

  app.post('/sessions', authenticate)

  /** Authenticated - Use JWT */
  app.get('/me', profile)
  app.get('/me', { onRequest: [verifyJwt] }, profile)
}

/*
 # JWT: JSON WEB TOKEN #
  - Usuário faz login enviando email/senha. 
  - Back-end cria o token ÚNICO, NÃO MODIFICÁVEL e STATELESS
  Stateless: não armazenado em nenhuma estrutura de persistência
  de dados (banco de dados)
  Back-end: quando for criar o token, vai usar uma palavra-chave (string)

  Palavra-chave: fkasjfkasjfasjfsajdfsadtjqkwjqwnfrqwrqwjqjepqwjk

  Email/senha -> header.payload.sign (cabeçalho.dados.assinatura)

  JWT => Todas as requisições
  Header: authorization: Bearer JWT
 */
