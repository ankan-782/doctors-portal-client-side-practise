import { Alert, Container, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import Booking from '../Booking/Booking';

const AvailableAppointments = ({ date }) => {

    const bookings = [
        {
            id: 1,
            name: 'Teeth Orthodontics',
            time: '8:00AM - 9:00AM',
            space: 10
        },
        {
            id: 2,
            name: 'Cosmetic Dentistry',
            time: '10:05AM - 11:30AM',
            space: 10
        },
        {
            id: 3,
            name: 'Teeth Cleaning',
            time: '5:00PM - 6:30PM',
            space: 10
        },
        {
            id: 4,
            name: 'Cavity Protection',
            time: '11:00AM - 12:00PM',
            space: 5,
        },
        {
            id: 5,
            name: 'Pediatric Dental',
            time: '6:00AM - 7:00PM',
            space: 10,
        },
        {
            id: 6,
            name: 'Oral Surgery',
            time: '7:00AM - 8:00PM',
            space: 10,
        }
    ]

    const [bookingSuccess, setBookingSuccess] = useState(false);
    return (
        <Container>
            <Typography variant="h4" sx={{ color: 'info.main', mb: 5 }}>Available Appointments on {date.toDateString()}</Typography>
            {
                bookingSuccess && <Alert sx={{ mb: 2 }} severity="success">Appointment Booked Successfully</Alert>
            }
            <Grid container spacing={2}>
                {
                    bookings.map(booking => <Booking
                        key={booking.id}
                        booking={booking}
                        date={date}
                        setBookingSuccess={setBookingSuccess}
                    ></Booking>)
                }
            </Grid>
        </Container>
    );
};

export default AvailableAppointments;