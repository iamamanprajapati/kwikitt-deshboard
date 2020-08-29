import React, { Component } from 'react'
import { Container, Box, Typography, TextField, CircularProgress, Button } from '@material-ui/core'
import axios from 'axios'


export class ServiceForm extends Component {

    constructor() {
        super()
        this.state = {
            name: "",
            description: "",
            commision: "",
            cost: "",
            serviceImage: "",
            show_progress: false,
            checkBox: false,
            name_error:null,
            serviceImage_error:null,
            description_error:null,
            commision_error:null,
            cost_error:null

        }

        this.AddService = this.AddService.bind()
    }

    AddService = () => {
        let valid_data = true;

        if (this.state.name === "") {
            this.setState({
                name_error : "Required"
            })
            
            valid_data = false
        }
        if (this.state.serviceImage === "") {
            this.setState({
                serviceImage_error : "Required"
            })
            valid_data = false
        }
        if (this.state.description === "") {
            this.setState({
                description_error : "Required"
            })
            valid_data = false
        }
        if (this.state.commision === "") {
            this.setState({
                commision_error : "Required"
            })
            valid_data = false
        }
        if (this.state.cost === "") {
            this.setState({
                cost_error : "Required"
            })
            valid_data = false
        }
        this.setState({
            update: true
        })

        if (valid_data) {
            console.log(this.state.name)
            console.log(this.state.serviceImage)
            console.log(this.state.description)
            console.log(this.state.commision)
            console.log(this.state.cost)
            axios.put(`${global.MyVar}/service/save`, {
                name: this.state.name,
                description: this.state.description,
                commision: this.state.commision,
                cost: this.state.cost,
                serviceImage: this.state.serviceImage,
            })
        }
    }

    handleServiceName = (e) => {
        this.setState({
            name: e.target.value
        });
    }

    handleDescription = (e) => {
        this.setState({
            description: e.target.value
        });
    }

    handleCommision = (e) => {
        this.setState({
            commision: e.target.value
        });
    }

    handleCost = (e) => {
        this.setState({
            cost: e.target.value
        });
    }

    handleServiceImage = (e) => {
        this.setState({
            serviceImage: e.target.value
        });
    }

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
                        Add New Service
                    </Typography>
                    <TextField
                        label="Service Name"
                        id="outlined-size-small"
                        type="string"
                        color="secondary"
                        error={this.state.name_error != null}
                        helperText={this.state.name_error}
                        onChange={this.handleServiceName}
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        size="small"
                    />
                    <TextField
                        label="Description"
                        id="outlined-size-small"
                        type="string"
                        color="secondary"
                        error={this.state.description_error != null}
                        helperText={this.state.description_error}
                        onChange={this.handleDescription}
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        size="small"
                    />
                    <TextField
                        label="Commision"
                        id="outlined-size-small"
                        type="string"
                        color="secondary"
                        error={this.state.commision_error != null}
                        helperText={this.state.commision_error}
                        onChange={this.handleCommision}
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        size="small"
                    />
                    <TextField
                        label="Cost"
                        id="outlined-size-small"
                        type="string"
                        color="secondary"
                        error={this.state.cost_error != null}
                        helperText={this.state.cost_error}
                        onChange={this.handleCost}
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        size="small"
                    />
                    <input type="file"
                        style={{ marginTop: 5, fullWidth: true, size: "small" }}
                        onChange={this.handleServiceImage}
                        value={this.state.serviceImage}
                        error={this.state.serviceImage_error != null}
                        helperText={this.state.serviceImage_error}
                    />
                    {this.state.show_progress ? <CircularProgress
                        color="secondary"
                        size={30} /> : null}
                    <br></br><br></br>
                    <Button
                        disableElevation
                        variant="contained"
                        fullWidth
                        onClick={this.AddService}
                        color="primary">
                        Add Service
                    </Button>
                </Box>
            </Container>
        )
    }
}

export default ServiceForm
