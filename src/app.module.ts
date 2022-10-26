import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env'
    }) ,
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      models: [],
      autoLoadModels: true,
      sync: {
        force: false
      }
    }),
    UsersModule,
    PostsModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
