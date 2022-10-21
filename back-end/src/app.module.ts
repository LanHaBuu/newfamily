import { Module } from "@nestjs/common";
import {TypeOrmModule} from '@nestjs/typeorm'
import { UserEntity } from "./user/user.entity";
import { UserModule } from "./user/user.module";

@Module({
    imports: [
        TypeOrmModule.forRoot({
          type: 'mssql',
          host: 'localhost',
          port: 1433,
          username: 'lan',
          password: '123123',
          database: 'family',
          entities: [UserEntity],
          synchronize: false,
          extra: {
            trustServerCertificate:true
          }
        }),UserModule
      ],
})

export class AppModule{}