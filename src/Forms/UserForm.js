import React, { Component } from 'react'
import { Container, Box, Typography, TextField, CircularProgress, Button, Checkbox } from '@material-ui/core'
import axios from 'axios'


export class UserForm extends Component {

    constructor() {
        super()
        this.state = {
            email: "",
            name: "",
            mobile: "",
            roles: ['ROLE_SERVICE_USER'],
            show_progress: false,
            checkBox: false,
            name_error: null,
            email_error: null,
            mobile_error: null,
        }

        this.registration = this.registration.bind()
    }

    registration = () => {
        let valid_data = true;

        if (this.state.email === "") {
            this.setState({
                email_error : "Required"
            })

            valid_data = false
        }
        if (this.state.name === "") {
            this.setState({
                name_error: "Required"
            })
            valid_data = false
        }
        if (this.state.mobile === "") {
            this.setState({
                mobile_error: "Required"
            })
            valid_data = false
        }
        this.setState({
            update: true
        })

        if (valid_data) {
            console.log(this.state.email)
            console.log(this.state.name)
            console.log(this.state.mobile)
            axios.post(`${global.MyVar}/user/register`, {
                email: this.state.email,
                name: this.state.name,
                phone: this.state.mobile,
                roles: this.state.roles
            })
        }
    }

    handleEmail = (e) => {
        this.setState({
            email: e.target.value
        });
    }

    handleName = (e) => {
        this.setState({
            name: e.target.value
        });
    }

    handleMobile = (e) => {
        this.setState({
            mobile: e.target.value
        });
    }

    handleCheckBox = (event) => {
        this.setState({
            checkBox: event.target.checked
        })
        if (this.state.checkBox === false) {
            this.setState({
                roles: ["ROLE_SERVICE_USER", "ROLE_SERVICE_PROVIDER"]
            })
        }
    };

    componentWillUnmount(){

    }


    render() {
        return (
            <Container maxWidth="xs">
                <Box bgcolor=""
                    boxShadow="2"
                    borderRadius="6"
                    p="24px"
                    mt="50px" >
                    <Typography
                        variant="h5"
                        color="colorSecondary" >
                        Add New User
                    </Typography>
                    <TextField
                        label="Email"
                        id="outlined-size-small"
                        type="string"
                        color="secondary"
                        error={this.state.email_error != null}
                        helperText={this.state.email_error}
                        name="email"
                        onChange={this.handleEmail}
                        variant="outlined"
                        fullWidth

                        margin="normal"
                        size="small"
                    />
                    <TextField
                        label="Name"
                        id="outlined-size-small"
                        type="string"
                        color="secondary"
                        value={this.state.name}
                        error={this.state.name_error != null}
                        helperText={this.state.name_error}
                        onChange={this.handleName}
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        size="small"
                    />
                    <TextField
                        label="Mobile Number"
                        id="outlined-size-small"
                        type="string"
                        color="secondary"
                        name="mobile number"
                        error={this.state.mobile_error != null}
                        helperText={this.state.mobile_error}
                        onChange={this.handleMobile}
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        size="small"
                    />

                    {this.state.show_progress ? <CircularProgress
                        color="secondary"
                        size={30} /> : null}
                    <div style={{ flexDirection: 'row' }}>
                        <Checkbox
                            style={{ alignSelf: 'flex-start' }}
                            checked={this.state.checkBox}
                            onChange={this.handleCheckBox}
                            inputProps={{ 'aria-label': 'primary checkbox' }}
                        />
                        <text>Are you want to be our partner ?</text>
                    </div>
                    <br></br>
                    <Button
                        disableElevation
                        variant="contained"
                        fullWidth
                        onClick={this.registration}
                        color="primary">
                        Register
                    </Button>
                </Box>
            </Container>
        )
    }
}

export default UserForm
