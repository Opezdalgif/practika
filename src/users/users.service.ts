import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './users.model';

@Injectable()
export class UsersService {

    constructor(@InjectModel(User) private userRepository: typeof User){}

    createUser(dto: CreateUserDto){
        const user = this.userRepository.create(dto)
        return user;
    }

    async updateUser (dto: UpdateUserDto , id: number) {

        const update = await this.userRepository.update(dto , {where: {id}})
        return update;

    }

    async getUser () {
        const get = await this.userRepository.findAll({include: {all:true}})
        return get;
    }

    async getUserById(id:number) {
        const userId = await this.userRepository.findOne({where: {id} , include: {all:true}});
        return userId;
    }
}
