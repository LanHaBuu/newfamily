import {Controller,Get, Body, Post, UsePipes, ValidationPipe} from '@nestjs/common'
import { UserDto } from './dto';
import { UserService } from './user.service';
import {plainToClass} from 'class-transformer'

@Controller('user')
export class UserController {
    constructor(private userService: UserService){}

    @Get()
    getAll() {
        return this.userService.getAll()
    }

    @UsePipes(new ValidationPipe())
    @Post()
    post(@Body() createUser: UserDto) {
        const user = plainToClass(UserDto,createUser,{ excludeExtraneousValues: true })
        return this.userService.post(user)
    }
}
