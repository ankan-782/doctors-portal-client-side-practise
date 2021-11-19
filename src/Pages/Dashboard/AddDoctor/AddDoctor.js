import { Button, Input, TextField } from '@mui/material';
import React, { useState } from 'react';

const AddDoctor = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [image, setImage] = useState(null);
    const [successMsg, setSuccessMsg] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        if (!image) {
            return;
        }
        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('image', image);

        fetch('https://dry-lowlands-49918.herokuapp.com/doctors', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setSuccessMsg('Doctor Added Successfully');
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }

    return (
        <div>
            <h2>Add a doctor</h2>
            <form onSubmit={handleSubmit}>
                <TextField
                    sx={{ width: '50%' }}
                    id="standard-basic"
                    label="Name"
                    type="text"
                    required
                    onChange={e => setName(e.target.value)}
                    variant="standard"
                />
                <br /><br />
                <TextField
                    sx={{ width: '50%' }}
                    id="standard-basic"
                    label="Email"
                    type="email"
                    required
                    onChange={e => setEmail(e.target.value)}
                    variant="standard"
                />
                <br /><br />
                <label htmlFor="contained-button-file">
                    <Input
                        accept="image/*"
                        id="contained-button-file"
                        type="file"
                        onChange={e => setImage(e.target.files[0])}
                    />
                    <br /><br />
                    <Button variant="contained" type="submit">
                        Add doctor
                    </Button>
                </label>
            </form>
            {successMsg && <p style={{ color: 'green' }}>{successMsg}</p>}
        </div>
    );
};

export default AddDoctor;