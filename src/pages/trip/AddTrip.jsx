import TripForm from '@/components/common/TripForm'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'

const AddTrip = () => {
  return (
    <Card className="w-2/5 mx-auto my-12">
        <CardHeader>
            <CardTitle>
                Add New Trip
            </CardTitle>
            <CardDescription>
                Create a new trip and share it with your friends!
            </CardDescription>
        </CardHeader>
        <CardContent>
            <TripForm />
        </CardContent>
    </Card>
  )
}

export default AddTrip