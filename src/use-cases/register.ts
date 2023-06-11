// use-cases mas poderia ser services
import { UserAlreadyExistsError } from '@/use-cases/errors/user-already-exists-error'
import { UsersRepository } from '@/repositories/users-repository'
import { hash } from 'bcryptjs'

// Interface para criar um usuário
interface RegisterUseCaseRequest {
  name: string
  email: string
  password: string
}

export class RegisterUseCase {
  constructor(private usersRepository: UsersRepository) {}

  async execute({ name, email, password }: RegisterUseCaseRequest) {
    const password_hash = await hash(password, 6)

    const userWithSameEmail = await this.usersRepository.findByEmail(email)

    if (userWithSameEmail) {
      throw new UserAlreadyExistsError()
    }

    await this.usersRepository.create({
      name,
      email,
      password_hash,
    })
  }
}
