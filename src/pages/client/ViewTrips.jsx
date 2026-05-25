import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import useApi from '@/hooks/useApi'
import React from 'react'
import { Button } from '@/components/ui/button'
import { MapPin, Calendar, Users, DollarSign } from 'lucide-react'
import { formatDate } from "@/lib/formatter"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import api from "@/api/axios"
import { toast } from "sonner"

const ViewTrips = () => {

  const { data, error, loading } = useApi("/trips");

  if (loading) {
    return <div>Loading...</div>
  }

  const onSubmit = async (tripId) => {

    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const numberOfPeople = document.getElementById("numberOfPeople").value;

    const data = {
      customerEmail: email,
      customerPhone: phone,
      numberOfPeople: numberOfPeople,
      tripId: tripId
    }

    try{
      const response = await api.post("/booking", data);

      if(response.status === 201){
        toast.success("Booking created successfully!!")
      }else{
        toast.error("Some error occured.")
      }
    }catch(error){
      toast.error(error.message || "Some error occured.")
    }

  }

  return (
    <main className="px-20 py-8">
      <h1 className="text-3xl font-bold">Available Trips Package</h1>

      <section className="mt-8 grid grid-cols-3 gap-6">
        {
          data && data.length == 0 ?
            <div>No trips available at the moment.</div>
            :
            data.map((trip, index) => {
              return (
                <Card key={trip._id}>
                  <CardHeader className="border-b">
                    <div className="mb-2 h-72 overflow-hidden flex justify-center">
                      <img src={trip.imageUrl} alt="trip image" className="rounded-md h-full w-auto " />
                    </div>
                    <CardTitle className="text-xl font-bold">{trip.title}</CardTitle>
                    <CardDescription>{trip.description}</CardDescription>

                  </CardHeader>
                  <CardContent>
                    <div className="p-4 space-y-4">
                      {/* Details Grid */}
                      <div className="space-y-2">
                        {/* Location and Date */}
                        <div className="flex items-center gap-2 text-sm">
                          <MapPin className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                          <span className="text-foreground">{trip.location}</span>
                        </div>

                        <div className="flex items-center gap-2 text-sm">
                          <Calendar className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                          <span className="text-foreground">{formatDate(trip.startDate)}</span>
                        </div>

                        {/* Duration and Availability */}
                        <div className="flex justify-between items-start">
                          <div className="flex items-center gap-2 text-sm">
                            <span className="text-muted-foreground">Duration:</span>
                            <span className="font-medium text-foreground">
                              {trip.duration.days}D/{trip.duration.nights}N
                            </span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <Users className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                            <span className={(trip.availableSeats === 0) ? 'text-red-500 font-medium' : 'text-foreground'}>
                              {trip.availableSeats} left
                            </span>
                          </div>
                        </div>

                        {/* Price */}
                        <div className="flex items-center gap-2">
                          <span className="text-xl font-bold text-foreground">
                            रू {trip.price}
                          </span>
                          <span className="text-xs text-muted-foreground">per person</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button size="lg" className="w-full">Book Trip</Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader className={"border-b pb-2"}>
                          <DialogTitle>Enter Contact Information</DialogTitle>
                          <DialogDescription>
                            Please provide your contact details and number of participants to book this trip.
                          </DialogDescription>
                        </DialogHeader>

                      <form>
                        <div className="space-y-2 mb-4">
                          <Label htmlFor="email">Email</Label>
                          <Input id="email" type="email" placeholder="abc@gmail.com" />
                        </div>
                        <div className="space-y-2 mb-4">
                          <Label htmlFor="phone">Phone</Label>
                          <Input id="phone" placeholder="9812345678" />
                        </div>
                          <div className="space-y-2 mb-4">
                          <Label htmlFor="numberOfPeople">Number of People</Label>
                          <Input id="numberOfPeople" type="number" placeholder="2" />
                        </div>

                        <Button type="button" onClick={()=>{onSubmit(trip._id)}} className={"w-full"} size="lg">Confirm</Button>
                      </form>

                      </DialogContent>
                    </Dialog>
                  </CardFooter>
                </Card>
              )
            })
        }
      </section>
    </main>
  )
}

export default ViewTrips