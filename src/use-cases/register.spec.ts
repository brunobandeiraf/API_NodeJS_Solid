import { compare } from 'bcryptjs'
import { expect, describe, it } from 'vitest'
import { RegisterUseCase } from './register'

// Teste Unitário testa uma base isolada da aplicação
// Teste Unitário não toca no DB
describe('Register Use Case', () => {
  // A senha do usuário deve ser hash
  it('should hash user password upon registration', async () => {
    const registerUseCase = new RegisterUseCase({
      // Método fictício
      async findByEmail(email) {
        return null
      },

      async create(data) {
        return {
          id: 'user-1',
          name: data.name,
          email: data.email,
          password_hash: data.password_hash,
          created_at: new Date(),
        }
      },
    })

    const { user } = await registerUseCase.execute({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: '123456',
    })

    // Não consigo verificar os hash, mas valido se foi corretamente um hash
    const isPasswordCorrectlyHashed = await compare(
      '123456',
      user.password_hash,
    )

    expect(isPasswordCorrectlyHashed).toBe(true)
  })
})
