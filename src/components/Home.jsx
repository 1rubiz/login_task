




import React, { useEffect } from "react"
import { useNavigate } from 'react-router-dom';


const Home =()=>{
    const navigate = useNavigate();
    useEffect(()=>{
        const getUserStatus = async () => {
          const isUser = localStorage.getItem('isUser');
          return isUser === 'true';
        };
        const user = await getUserStatus()
        if(!user){
            navigate('/');
        }
    })[]
    return (
        <div>
            Home
        </div>
    )
}
export default Home