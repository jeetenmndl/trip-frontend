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

const formSchema = z.object({
    name: z.string().min(3, "Name must be at least 3 characters"),
    email: z.string().email().min(5, "Email must be at least 5 characters"),
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z.string().min(8, "Password must be at least 8 characters")
}).refine((data) => {
    return data.password === data.confirmPassword
},
    {
        message: "Passwords don't match",
        path: ["confirmPassword"]
    }
)

const Register = () => {

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            password: "",
            confirmPassword: ""
        }
    })

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <form onSubmit={form.handleSubmit(onSubmit)}>
            <Card className="w-1/4 mx-auto mt-24">
                <CardHeader className={"border-b"}>
                    <CardTitle>Register to CloveTrip</CardTitle>
                    <CardDescription>Enter your details to get started</CardDescription>
                </CardHeader>

                <CardContent className="space-y-3">
                    <Controller
                        name="name"
                        control={form.control}
                        render={({ field, fieldState }) => (
                            <Field data-invalid={fieldState.invalid}>
                                <FieldLabel htmlFor={field.name}>Name</FieldLabel>
                                <Input {...field} placeholder="John Doe" id={field.name} aria-invalid={fieldState.invalid} />
                                {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                            </Field>
                        )}
                    />

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

                    
                     <Controller
                        name="confirmPassword"
                        control={form.control}
                        render={({ field, fieldState }) => (
                            <Field data-invalid={fieldState.invalid}>
                                <FieldLabel htmlFor={field.name}>Confirm Password</FieldLabel>
                                <Input type="password" placeholder="••••••••" {...field} id={field.name} aria-invalid={fieldState.invalid} />
                                {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                            </Field>
                        )}
                    />
                </CardContent>

                <CardFooter>
                    <Button size="lg" className="w-full" type="submit">Submit</Button>
                </CardFooter>

            </Card>
        </form>
    )
}

export default Register