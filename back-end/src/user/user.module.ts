import {Module} from '@nestjs/common'
import { UserController } from './user.controller';
import {TypeOrmModule} from '@nestjs/typeorm'
import { UserService } from './user.service';
import { UserEntity } from './user.entity';

@Module({
    imports: [TypeOrmModule.forFeature([UserEntity])],
    controllers:[UserController],
    providers:[UserService]
})

export class UserModule{}