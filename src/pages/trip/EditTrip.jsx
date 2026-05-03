import TripForm from '@/components/common/TripForm'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import useApi from '@/hooks/useApi'
import React from 'react'
import { useParams } from 'react-router-dom'

const EditTrip = () => {

    const tripId = useParams().id;
    console.log(tripId)

    const { data, error, loading } = useApi(`/trips/${tripId}`);

    if(loading){
        return <div>Loading...</div>
    }

  return (
     <Card className="w-2/5 mx-auto my-12">
        <CardHeader>
            <CardTitle>
                Edit Trip
            </CardTitle>
            <CardDescription>
                Update your trip details below
            </CardDescription>
        </CardHeader>
        <CardContent>
            <TripForm tripData={data} />
        </CardContent>
    </Card>
  )
}

export default EditTrip