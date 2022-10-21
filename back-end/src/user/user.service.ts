import {Injectable} from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserDto } from './dto';
import { UserEntity } from './user.entity';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEntity)
        private userRepo: Repository<UserEntity>
    ){}
    getAll():Promise<UserEntity[]> {
        return this.userRepo.find()
    }

    post(user:UserDto) {
       return this.userRepo.save(user) 
    }
}