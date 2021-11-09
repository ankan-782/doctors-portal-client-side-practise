import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import doctor from '../../../images/doctor.png';
import bg from '../../../images/appointment-bg.png';
import { Button, Typography } from '@mui/material';

const appointmentBanner = {
    background: `url(${bg})`,
    marginTop: 150,
    backgroundColor: 'rgba(45, 58, 74, 0.8)',
    backgroundBlendMode: 'darken, luminosity',
}

const AppointmentBanner = () => {
    return (
        <Box style={appointmentBanner} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={5}>
                    <img style={{ width: 400, marginTop: -110 }} src={doctor} alt="" />
                </Grid>
                <Grid item xs={12} md={7} sx={{ display: 'flex', justifyContent: 'flex-start', textAlign: 'left', alignItems: 'center' }}>
                    <Box>
                        <Typography variant="h6" sx={{mb:2}} style={{ color: '#5CE7ED' }}>
                            Appointment
                        </Typography>
                        <Typography variant="h4" sx={{mb:2}} style={{ color: 'white' }}>
                            Make an appointment Today
                        </Typography>
                        <Typography variant="h6" sx={{mb:2}} style={{ color: 'white', fontSize: 14, fontWeight: 300 }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem officiis nihil pariatur cupiditate possimus mollitia repellendus temporibus praesentium consequuntur vero.
                        </Typography>
                        <Button variant="contained" style={{ backgroundColor: '#5CE7ED', color: 'black' }}>Learn More</Button>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default AppointmentBanner;