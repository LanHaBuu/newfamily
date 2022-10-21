import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class UserEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string

    @Column()
    phone: number

    @Column()
    email: string

    @Column()
    password?:string
}