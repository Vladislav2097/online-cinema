import { IsString } from 'class-validator'

export class RefreshTokenDto {
  @IsString({
    message: 'You did not pass refresh token or ot is not a string!',
  })
  refreshToken: string
}
