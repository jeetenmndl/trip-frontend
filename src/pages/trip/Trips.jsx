import { Button } from '@/components/ui/button'
import { Edit, Plus, Trash2 } from 'lucide-react';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import useApi from '@/hooks/useApi';
import api from '@/api/axios';
import { toast } from 'sonner';

const Trips = () => {
    const navigate = useNavigate();

    const [dependency, setDependency] = useState(0);

    function formatDate(isoString) {
        const date = new Date(isoString);
        return date.toDateString();
    }

    const { data, error, loading } = useApi('/trips', {}, [dependency]);

    if (loading) {
        return <div>Loading...</div>
    }

    const handleDelete = async (tripId) => {
        try {
            const response = await api.delete(`/trips/${tripId}`);
            console.log(response);
            if (response.status === 200) {
                toast.success("Trip deleted successfully!");
                setDependency( prev => prev + 1); 
            } else {
                toast.error("Failed to delete trip. Please try again.");
            }
        } catch (error) {
            console.log(error)
            toast.error(error.message || "An error occurred while deleting the trip. Please try again.");
        }
    }

    return (
        <main className='px-20 py-8'>

            <Card>
                <CardHeader className={"border-b"}>
                    <CardTitle className={"text-3xl"}>Trips Page</CardTitle>
                    <CardDescription>View and Manage your Trips</CardDescription>
                    <CardAction>
                        <Button onClick={() => { navigate("/trips/add") }}>
                            <Plus /> Add Trip
                        </Button>
                    </CardAction>
                </CardHeader>
                <CardContent>

                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>S.N.</TableHead>
                                <TableHead>Title</TableHead>
                                <TableHead>Price</TableHead>
                                <TableHead>Start Date</TableHead>
                                <TableHead>Duration</TableHead>
                                <TableHead>Seats</TableHead>
                                <TableHead>Action</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {
                                data && data.length == 0 ?
                                <div className='text-center py-10'>No trips found. Please add some trips.</div>
                                :
                                data.map((trip, index) => {
                                    return (
                                        <TableRow key={trip._id}>
                                            <TableCell>{index + 1}</TableCell>
                                            <TableCell>{trip.title}</TableCell>
                                            <TableCell>रु {trip.price}</TableCell>
                                            <TableCell>{formatDate(trip.startDate)}</TableCell>

                                            <TableCell>{trip.duration.days} days {trip.duration.nights} nights</TableCell>

                                            <TableCell>{trip.availableSeats} available (Max: {trip.maxParticipants})</TableCell>

                                            <TableCell className={"space-x-2"}>
                                                <Button 
                                                onClick={()=>{navigate(`/trips/edit/${trip._id}`)}}
                                                size='icon' variant='outline' className={"text-blue-600 hover:bg-blue-50"}><Edit className='text-blue-600' /></Button>

                                                <Button
                                                onClick={()=>{handleDelete(trip._id)}}
                                                size='icon' variant='outline' className={"hover:bg-red-50"}><Trash2 className='text-red-600' /></Button>
                                            </TableCell>

                                        </TableRow>
                                    )
                                })
                            }
                        </TableBody>
                    </Table>

                </CardContent>
                <CardFooter>
                    <p>Card Footer</p>
                </CardFooter>
            </Card>
        </main>
    )
}

export default Trips