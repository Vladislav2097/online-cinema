import { Controller, Get } from '@nestjs/common'
import { Auth } from '../auth/decorators/auth.decorators'
import { User } from './decorators/user.decorator'
import { UserService } from './user.service'

@Controller('users')
export class UserController {
	constructor(private readonly UserService: UserService) {}

	@Get('profile')
	@Auth()
	async getProfile(@User('id') _id: string) {
		return this.UserService.byId(_id)
	}
}
