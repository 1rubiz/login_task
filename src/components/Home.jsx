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
  import { useToast } from "@/hooks/use-toast"

const Home =()=>{
    const { toast } = useToast()
    const [state, setState] = useState(false)
    const [user, setUser] = useState({
        firstName: '',
        lastName: ''
    })
    const navigate = useNavigate();
    const logOut = ()=>{
        localStorage.removeItem('isUser');
        navigate('/')
    }
    useEffect(()=>{
        const getUserStatus = async () => {
          const isUser = await localStorage.getItem('isUser');
          console.log(isUser)
          if(isUser == 'true'){
            setState(true)
            console.log('welcome user')
            const userData = JSON.parse(localStorage.getItem('user'));
            console.log(userData)
            setUser({
                firstName: userData.first_name,
                lastName: userData.last_name
            })
          }else{
            toast({
              description: "You are not authenticated",
              variant: "destructive"
            })
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
                                <span className='font-bold'>First name: </span>{user.firstName}
                            </div>
                            <div>
                                <span className='font-bold'>Last name: </span>{user.lastName}
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