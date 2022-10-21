import {IsNotEmpty,IsPhoneNumber,IsEmail,MinLength} from 'class-validator'
import {Expose} from 'class-transformer'

export class UserDto {
    @IsNotEmpty()
    @Expose()
    name:string
    
    @Expose()
    @IsPhoneNumber('VN')
    phone:number
    
    @Expose()
    @IsEmail()
    email:string

    @MinLength(6,{message:'Tren 6 ky tu'})
    password:string
}