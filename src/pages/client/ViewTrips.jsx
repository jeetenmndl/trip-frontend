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

const ViewTrips = () => {

  const { data, error, loading } = useApi("/trips");

  if (loading) {
    return <div>Loading...</div>
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
                    <div className="mb-2">
                      <img src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="trip image" className="rounded-md" />
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
                        <DialogHeader>
                          <DialogTitle>Enter Contact Information</DialogTitle>
                          <DialogDescription>
                            Please provide your contact details and number of participants to book this trip.
                          </DialogDescription>
                        </DialogHeader>

                      

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