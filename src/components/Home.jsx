import React, { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import { Button } from "@/components/ui/button"

const Home =()=>{
    const [state, setState] = useState(false)
    const navigate = useNavigate();
    const logOut = ()=>{
        localStorage.removeItem('isUser');
        navigate('/')
    }
    useEffect(()=>{
        const getUserStatus = async () => {
          const isUser = localStorage.getItem('isUser');
          console.log(isUser)
          if(isUser === true){
            setState(true)
            console.log('welcome user')
          }else{
            alert('You are not logged in')
            navigate('/');
          }
        };
         getUserStatus()
    }, []);
    return (
        <div className='w-screen h-screen flex items-center justify-center bg-teal-200'>
        {
            state && (
                    <Card>
                        <CardHeader>
                            You are currenctly logged in as: 
                        </CardHeader>
                        <CardContent>
                            <div>
                                <span className='font-bold'>Name: </span>
                            </div>
                            <div>
                                <span className='font-bold'>Email: </span>
                            </div>
                            <Button variant='destructive' className='my-4' onClick={logOut}>Logout</Button>
                        </CardContent>
                    </Card>
                )
        }
        </div>
    )
}
export default Home