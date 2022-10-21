import React, { useEffect, useState } from 'react'
import {useForm,SubmitHandler} from 'react-hook-form'
import { User } from '../../Interface'
import './Register.scss'



const Register:React.FC = () => {
    const {register,handleSubmit,formState:{errors}, reset } = useForm<User>()
    const [user,setUser] = useState<User>()
    
    
    
    const onSubmit:SubmitHandler<User> = (data:User) => {
      
    }
  return ( 
    <div className='register-wrapper'>
        <h2>Đăng ký</h2>
        <form className='form-register' onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder='name' {...register('name',{ required: true, minLength: 6 })} spellCheck='false'/> 
            {errors.name?.type === 'required' && <p className='errors' style={{color:'red'}}>Lỗi</p>}
            {errors.name?.type === 'minLength' && <p className='errors' style={{color:'red'}}>Lớn hơn 6 ký tự</p>}
            <input type="text" placeholder='phone' {...register('phone')} spellCheck='false'/>
            <input type="text" placeholder='email' {...register('email')} spellCheck='false'/>
            <input type="password" placeholder='password' {...register('password')} spellCheck='false'/>
            <button type='submit'>Đăng Ký</button>
        </form>
    </div>
  )
}

export default Register