import { Body, Controller, Get, Post , Param, Patch , Delete, UseGuards} from '@nestjs/common';
import { ParseIntPipe } from '@nestjs/common/pipes';
import { AccessTokenGuard } from '../common/guards/accessToken.guard';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/updateposts.dto';
import { Posts } from './model/posts.model';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
    constructor(private postService: PostsService){}

    @Post()
    create(@Body() dto: CreatePostDto) {
        return this.postService.createPost(dto)
    }

    @UseGuards(AccessTokenGuard)
    @Get('/:userId')
    findAll(@Param('userId') userId: number) {
        return this.postService.getPost(userId)
    }

    @UseGuards(AccessTokenGuard)
    @Patch('/:userId/:id') 
    update(@Param('userId', ParseIntPipe) userId: number , @Body() dto: UpdatePostDto , @Param('id' , ParseIntPipe) id: number){
        return this.postService.update(userId , dto , id)
    }
    
    @UseGuards(AccessTokenGuard)
    @Delete('/:userId/:id')
    delete(@Param('userId', ParseIntPipe) userId: number ,@Param('id' , ParseIntPipe) id: number){
        return this.postService.delete(userId, id)
    }
}
