import React from 'react'
import {useQuery} from '@tanstack/react-query'
import { getUser } from '../../api/UserApi';
// import { getUser } from '../../api/UserApi'
 
const Home:React.FC = () => {
  const { isLoading, error, data } = useQuery(['user'],getUser)
  console.log(data);
  
  return (
    <div className='home-wrapper'>

    </div>
  )
}

export default Home