import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { UsersModule } from '../users/users.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { AccessTokenStrategy } from './strategies/accessToken.strategy';
import { RefrechTokenStrategy } from './strategies/refreshToken.strategy';

@Module({
    imports:[JwtModule.register({}), UsersModule],
    controllers:[AuthController],
    providers:[AuthService , AccessTokenStrategy , RefrechTokenStrategy , ConfigService],

})
export class AuthModule {}
