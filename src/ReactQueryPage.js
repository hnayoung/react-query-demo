import React from 'react'
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

const ReactQueryPage = () => {

    const fetchPost=()=>{
        return axios.get('http://localhost:3004/posts')
    }
   
   const { data } = useQuery({
    queryKey:['posts'],
    queryFn: fetchPost
  });

  console.log('ddd',data);
  
  return (
    <div>
      ReactQueryPage
    </div>
  )
}

export default ReactQueryPage
