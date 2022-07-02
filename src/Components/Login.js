import { Button, Grid, Paper, TextField } from '@mui/material';
import { Container } from '@mui/system';
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [msg, setMsg] = useState();
    const navigate = useNavigate();
    const [values, setValues] = useState({
        email: "",
        pass: ""
    })
    const handleSubmit = (e) => {
        e.preventDefault()
        axios
            .post("https://reqres.in/api/login",{
                email: values.email,
                password: values.pass
            })
           /* .then(res => console.log(res)) */
            .then((res) => {                
                localStorage.setItem("token",res.data.token)
                navigate("/dashboard");
            })
            .catch(err => {
                // console.log("This is error",err.response.data.error) 
                setMsg(err.response.data.error)
                // console.error(err)
            } )
    }

    return (
        <div>
            <Container maxWidth="sm">
                <Grid
                    container
                    spacing={2}
                    direction="column"
                    justifyContent='center'
                    style={{ minHeight: "100vh" }}
                >
                    <Paper elevation={2} sx={{ padding: 5 }}>
                        <form onSubmit={handleSubmit}>
                            <Grid container direction="column" spacing={2}>
                                <Grid item>
                                    <TextField
                                        type="email"
                                        fullWidth
                                        label="Enter Your Email"
                                        placeholder='Email Address'
                                        variant='outlined'
                                        required
                                        onChange={(e) => setValues({ ...values, email: e.target.value })}
                                    />
                                </Grid>

                                <Grid item>
                                    <TextField
                                        type="password"
                                        fullWidth
                                        label="Enter Your Password"
                                        placeholder='Password'
                                        variant='outlined'
                                        // required
                                        onChange={(e) => setValues({ ...values, pass: e.target.value })}
                                    />
                                </Grid>
                                <p className='redText'>{msg}</p>
                                <Grid item>
                                    <Button type='submit' fullWidth variant="contained">Sign In</Button>
                                </Grid>
                            </Grid>
                        </form>
                    </Paper>
                </Grid>
            </Container>
        </div>
    );
};

export default Login;