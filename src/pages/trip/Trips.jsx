import { Button } from '@/components/ui/button'
import { Edit, Plus, Trash2 } from 'lucide-react';
import React from 'react'
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

const Trips = () => {
    const navigate = useNavigate();

    function formatDate(isoString) {
        const date = new Date(isoString);
        return date.toDateString();
    }

    const { data, error, loading } = useApi('/trips');

    if (loading) {
        return <div>Loading...</div>
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
                                                <Button size='icon' variant='outline' className={"text-blue-600 hover:bg-blue-50"}><Edit className='text-blue-600' /></Button>

                                                <Button size='icon' variant='outline' className={"hover:bg-red-50"}><Trash2 className='text-red-600' /></Button>
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