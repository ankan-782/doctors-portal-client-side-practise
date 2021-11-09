import * as React from 'react';
import Appointments from '../Appointments/Appointments';
import Calender from '../../../Pages/Shared/Calender/Calender'
import { Grid } from '@mui/material';

const DashboardHome = () => {
    const [date, setDate] = React.useState(new Date())

    return (
        <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={4}>
                <Calender
                    date={date}
                    setDate={setDate}
                ></Calender>
            </Grid>
            <Grid item xs={12} sm={12} md={8}>
                <Appointments date={date}></Appointments>
            </Grid>
        </Grid>
    );
};

export default DashboardHome;