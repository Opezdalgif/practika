import { Controller , Post , Body , Patch , Param , Get} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    constructor(private userService: UsersService) {}
    @Post()
    create(@Body () dto: CreateUserDto) {
        return this.userService.createUser(dto)
    }

    @Patch('/:id')
    update(@Body() dto: UpdateUserDto , @Param('id') id: number){
        return this.userService.updateUser(dto, id)
    }

    @Get('/getUser')
    getUserAll() {
        return this.userService.getUser();
    }


}
