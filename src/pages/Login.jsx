import React from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import * as z from "zod"
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Field, FieldError, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import api from '@/api/axios'
import { toast } from 'sonner'
import { useNavigate } from 'react-router-dom'
import useAuth from '@/hooks/useAuth'

const formSchema = z.object({
    email: z.string().email().min(5, "Email must be atleast 5 characters"),
    password: z.string().min(8, "Password must be atleast 8 characters")
})

const Login = () => {

    const navigate = useNavigate();
    const { login } = useAuth();

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: ""
        }
    })

    const onSubmit = async (data) => {
        console.log(data)
          try{
            const response = await api.post("/auth/login", data);
            console.log(response);  

            if(response.status === 200){
                toast.success("Login Successful!")
                login(data, response.data.accessToken)
                navigate("/dashboard");
            }else{
                toast.error("Login failed. Please try again.")
            }
        }catch (error){
            console.error("Login failed:", error);
            toast.error("Login failed. Please try again.")
        }
    }

  return (
   <form onSubmit={form.handleSubmit(onSubmit)}>
               <Card className="w-1/4 mx-auto mt-24">
                   <CardHeader className={"border-b"}>
                       <CardTitle>Login to CloveTrip</CardTitle>
                       <CardDescription>Enter your details to get started</CardDescription>
                   </CardHeader>
   
                   <CardContent className="space-y-3">
   
                        <Controller
                           name="email"
                           control={form.control}
                           render={({ field, fieldState }) => (
                               <Field data-invalid={fieldState.invalid}>
                                   <FieldLabel htmlFor={field.name}>Email</FieldLabel>
                                   <Input type="email" placeholder="abc@gmail.com" {...field} id={field.name} aria-invalid={fieldState.invalid} />
                                   {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                               </Field>
                           )}
                       />
   
                        <Controller
                           name="password"
                           control={form.control}
                           render={({ field, fieldState }) => (
                               <Field data-invalid={fieldState.invalid}>
                                   <FieldLabel htmlFor={field.name}>Password</FieldLabel>
                                   <Input type="password" placeholder="••••••••" {...field} id={field.name} aria-invalid={fieldState.invalid} />
                                   {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                               </Field>
                           )}
                       />
                   </CardContent>
   
                   <CardFooter className="block">
                       <Button size="lg" className="w-full" type="submit">Submit</Button>
   
                       <div className='mt-4 text-center'>
                           Don't have an account?  
                           <a className='text-blue-600 font-medium hover:underline ml-2' href="/register"> Register</a>
                       </div>
                   </CardFooter>
   
               </Card>
           </form>
  )
}

export default Login