import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import axios from 'axios'
import { Box, Button } from '@material-ui/core';
import { Switch, Route,Redirect } from "react-router-dom";

export class SelectPartner extends Component {
    constructor() {
        super()
        
        this.state = {
            data: [],
            isTrueOrFalse:false
        }
    }

    componentDidMount() {
        let Sid=JSON.parse(localStorage.getItem('serviceId'))
        console.log(JSON.parse(localStorage.getItem('serviceId')))
        axios.get(`${global.MyVar}/service-partner/list/partner/${Sid}`)
            .then(response => {
                this.setState({
                    data: response.data.data
                })
                console.log(this.state.data)
            })
    }

    assign =(id) =>{
        let Bid=JSON.parse(localStorage.getItem('bookingId'))
        // let Sid=JSON.parse(localStorage.getItem('serviceId'))
        console.log(JSON.parse(localStorage.getItem('bookingId')))
        console.log(id)
        axios.post(`${global.MyVar}/booking/assign-to-partner/${Bid}?partnerId=${id}`)
            .then(response => {
                console.log("response")
            })

            this.setState({
                isTrueOrFalse:true
            })
    }

    componentWillUnmount(){

    }

    render() {
        const { data } = this.state;
        if(this.state.isTrueOrFalse===true){
            return(
                <Redirect push to="/bookings" />
            )
        }
        
        return (
            <Box>
                <TableContainer component={Paper}>
                    <Table style={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>ID</TableCell>
                                <TableCell>Name</TableCell>
                                <TableCell>Email</TableCell>
                                <TableCell>Status</TableCell>
                                <TableCell align="center">Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.map((row) => (
                                <TableRow >
                                    <TableCell >{row.id}</TableCell>
                                    <TableCell >{row.name}</TableCell>
                                    <TableCell >{row.email}</TableCell>
                                    <TableCell >{row.status}</TableCell>
                                    <TableCell align="center">
                                            <Button onClick={()=>this.assign(row.id)}>Assign</Button>
                                    </TableCell >
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        );
    }
}

export default SelectPartner;