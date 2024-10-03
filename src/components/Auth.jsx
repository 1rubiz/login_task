import React, { useEffect, useState } from "react"



import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"


const Auth = () => {
    const [state, setState] = useState(true)
    useEffect(()=>{
      localStorage.setItem('isUser', false);
    },[]);
    
  return (
    <div className="w-full lg:grid h-screen lg:grid-cols-2 bg-[url('/img2.jpeg')] object-fill lg:bg-none">
      <div className="flex items-center justify-center py-12 h-full">
        <div>
            {
                state ? <Signup setState={setState}/> : <Login setState={setState}/>
            }
        </div>
      </div>
      <div className="col-span-1 hidden bg-muted lg:flex items-center justify-center w-full max-h-screen bg-[url('/img2.jpeg')] object-contain">
        {/* <BubbleAnimation/> */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://res.cloudinary.com/dotojp6xu/image/upload/v1715162527/samples/chair-and-coffee-table.jpg"
          alt="Image"
          className="max-h-fit w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
            {/* <SplitText text="Hello!" className="custom-class text-black text-3xl" delay={50} /> */}
        {/* <BlobCursor/> */}
      </div>
    </div>
  );
};

export default Auth;


const Signup = ({setState})=>{
    return(
        <Card className="mx-auto max-w-sm">
            <CardHeader>
                <CardTitle className="text-xl">Sign Up</CardTitle>
                <CardDescription>
                Enter your information to create an account
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="grid gap-4">
                <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-2">
                    <Label htmlFor="first-name">First name</Label>
                    <Input id="first-name" placeholder="Max" required />
                    </div>
                    <div className="grid gap-2">
                    <Label htmlFor="last-name">Last name</Label>
                    <Input id="last-name" placeholder="Robinson" required />
                    </div>
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    required
                    />
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" type="password" />
                </div>
                <Button type="submit" className="w-full">
                    Create an account
                </Button>
                {/* <Button variant="outline" className="w-full">
                    Sign up with GitHub
                </Button> */}
                </div>
                <div className="mt-4 text-center text-sm">
                Already have an account?{" "}
                <span onClick={()=> setState(false)} className="underline cursor-pointer">
                    Sign in
                </span>
                </div>
            </CardContent>
            </Card>
    )
}

const Login = ({setState})=>{
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://dms-api.apps.ginnsltd.com/v1/docs#/default/api_views_login', {
        email,
        password,
      });
      console.log('Login successful:', response.data);
      // You can add more logic here (e.g., redirecting to another page after success)
    } catch (error) {
      console.error('Login failed:', error);
      setErrorMessage('Login failed. Please try again.');
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
    return(
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow-md w-full max-w-sm"
      >
        <div className="mx-auto grid w-[350px] gap-6">
            <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Login</h1>
            <p className="text-balance text-muted-foreground">
                Enter your email below to login to your account
            </p>
            </div>
            <div className="grid gap-4">
            <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                />
            </div>
            <div className="grid gap-2">
                <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <Link
                    href="/forgot-password"
                    className="ml-auto inline-block text-sm underline"
                >
                    Forgot your password?
                </Link>
                </div>
                <Input type={showPassword ? 'text' : 'password'}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required />
            </div>
            <Button type="submit" className="w-full">
                Login
            </Button>
            {/* <Button variant="outline" className="w-full">
                Login with Google
            </Button> */}
            </div>
            {errorMessage && (
            <div className="text-red-500 mb-4">{errorMessage}</div>
          )}
            <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <span onClick={()=> setState(true)} className="underline cursor-pointer">
                Sign up
            </span>
            </div>
        </div>
      </form>
    )
}