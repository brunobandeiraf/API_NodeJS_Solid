import { FastifyReply, FastifyRequest } from 'fastify'

export async function profile(request: FastifyRequest, reply: FastifyReply) {
  // Valida o token
  await request.jwtVerify()

  // Precisa criar o arquivo src/@types/fastify-jwt.d.ts
  console.log(request.user.sub)

  return reply.status(200).send()
}
