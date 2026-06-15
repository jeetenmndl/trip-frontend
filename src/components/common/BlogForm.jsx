import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import z from 'zod'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { Field, FieldError, FieldLabel } from '../ui/field'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'
import { Button } from '../ui/button'
import api from '@/api/axios'
import { toast } from 'sonner'
import { useNavigate } from 'react-router-dom'
import {AdvancedImage} from '@cloudinary/react';
import {Cloudinary} from "@cloudinary/url-gen";


const formSchema = z.object({
  title: z.string().min(5, "Title must be at least 5 characters"),
  content: z.string().min(10, "Content must be at least 10 characters"),
  excerpt: z.string().min(20, "Excerpt must be at least 20 characters"),
  publishedDate: z.coerce.date(),
  slug: z.string().min(3, "Slug must be at least 3 characters"),
  bannerUrl: z.string()
})

const BlogForm = ({blogData}) => {

   // Create a Cloudinary instance and set your cloud name.
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'dblq0e8kj'
    }
  });

  // cld.image returns a CloudinaryImage with the configuration set.
  const myImage = cld.image();

  const navigate = useNavigate();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: blogData || {
      title: '',
      content: '',
      excerpt: '',
      publishedDate: new Date(),
      slug: '',
      bannerUrl: ''
    }
  })

  const onAdd = async (data) => {
    console.log(data)
    try {
      const response = await api.post("/trips", data);
      console.log(response);
      if(response.status === 201){
        toast.success("Trip created successfully!");
        navigate("/trips");
      }else{
        toast.error("Failed to create trip. Please try again.");
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message || "An error occurred while creating the trip. Please try again.");
    }
  }

    const onEdit = async (data) => {
    console.log(data)
    try {
      const response = await api.patch(`/trips/${tripData._id}`, data);
      console.log(response);
      if(response.status === 200){
        toast.success("Trip updated successfully!");
        navigate("/trips");
      }else{
        toast.error("Failed to update trip. Please try again.");
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message || "An error occurred while updating the trip. Please try again.");
    }
  }

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];

    if(!file){
      toast.error("No file selected.");
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "trip_preset");
    formData.append("cloud_name", "dblq0e8kj");

    const response = await fetch("https://api.cloudinary.com/v1_1/dblq0e8kj/image/upload",{
      method: "POST",
      body: formData
    })
    
    const uploadedImage = await response.json();
    console.log(uploadedImage);

    if(uploadedImage.url){
      form.setValue("imageUrl", uploadedImage.url);
    }
  }

  return (
    <form onSubmit={form.handleSubmit(tripData ? onEdit : onAdd)}>
      <Card>
        <CardHeader>
          <CardTitle>Trip Info</CardTitle>
          <CardDescription>Enter trip information below</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">

          <Controller
            name="title"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor={field.name}>Title</FieldLabel>
                <Input type="text" placeholder="Trip to Mustang" {...field} id={field.name} aria-invalid={fieldState.invalid}
                  required />
                {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />

          <Controller
            name="description"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor={field.name}>Description</FieldLabel>
                <Textarea type="text" placeholder="Beautiful place ..." {...field} id={field.name} aria-invalid={fieldState.invalid}
                  required />
                {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />

          <div className="grid grid-cols-2 gap-4">
            <Controller
              name="price"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={field.name}>Price</FieldLabel>
                  <Input type="number" placeholder="10000" {...field} id={field.name} aria-invalid={fieldState.invalid}
                    min='0' required />
                  {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                </Field>
              )}
            />

            <Controller
              name="location"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={field.name}>Location</FieldLabel>
                  <Input type="text" placeholder="Lo Manthang,Muktinath Temple" {...field} id={field.name} aria-invalid={fieldState.invalid}
                    required />
                  {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                </Field>
              )}
            />


          </div>

        </CardContent>
      </Card>

      <Card className={'mt-6'}>
        <CardHeader>
          <CardTitle>Trip Duration</CardTitle>
          <CardDescription>Enter trip duration details</CardDescription>
        </CardHeader>
        <CardContent className={"space-y-3"}>
          <div className="grid grid-cols-2 gap-4">
            <Controller
              name="startDate"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={field.name}>Start Date</FieldLabel>
                  <Input type="date" {...field} id={field.name} aria-invalid={fieldState.invalid}
                    required />
                  {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                </Field>
              )}
            />

            <Controller
              name="endDate"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={field.name}>End Date</FieldLabel>
                  <Input type="date" {...field} id={field.name} aria-invalid={fieldState.invalid}
                    required />
                  {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                </Field>
              )}
            />

            <Controller
            name="duration.days"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor={field.name}>Number of Days</FieldLabel>
                <Input type="number" placeholder="5" {...field} id={field.name} aria-invalid={fieldState.invalid}
                  required />
                {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />

          <Controller
            name="duration.nights"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor={field.name}>Number of Nights</FieldLabel>
                <Input type="number" placeholder="5" {...field} id={field.name} aria-invalid={fieldState.invalid}
                  required />
                {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />
          </div>
        </CardContent>
      </Card>

       <Card className={'mt-6'}>
        <CardHeader>
          <CardTitle>Trip Participants</CardTitle>
          <CardDescription>Enter trip participant details</CardDescription>
        </CardHeader>
        <CardContent className={"space-y-3"}>
          <div className="grid grid-cols-2 gap-4">
            <Controller
              name="maxParticipants"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={field.name}>Max Participants</FieldLabel>
                  <Input type="number" placeholder="10" {...field} id={field.name} aria-invalid={fieldState.invalid}
                    min='0' required />
                  {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                </Field>
              )}
            />
            <Controller
              name="availableSeats"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={field.name}>Available Seats</FieldLabel>
                  <Input type="number" placeholder="10" {...field} id={field.name} aria-invalid={fieldState.invalid}
                    min='0' required />
                  {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                </Field>
              )}
            />
            </div>
            <Controller
              name="imageUrl"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={field.name}>Image URL</FieldLabel>
                  <Input type="text" placeholder="https://example.com/image.jpg" {...field} id={field.name} aria-invalid={fieldState.invalid}
                    min='0' required />
                  {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                </Field>
              )}
            />

            <Input type="file" onChange={handleImageUpload} />

             <AdvancedImage  />
        </CardContent>
        </Card>

        <div className='float-right'>
          <Button type="submit" className={"mt-6"}>
            Submit
          </Button>
        </div>




    </form>
  )
}

export default TripForm