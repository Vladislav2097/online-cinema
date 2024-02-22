import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { TypegooseModule } from 'nestjs-typegoose'
import { UserModel } from '../user/user.model'
import { AuthService } from './auth.service'
import { AuthController } from './auth.controller'

@Module({
  controllers: [AuthController],
  imports: [
    TypegooseModule.forFeature([
      {
        typegooseClass: UserModel,
        schemaOptions: {
          collection: 'User',
        },
      },
    ]),
    ConfigModule,
  ],
  providers: [AuthService],
})
export class AuthModule {}
