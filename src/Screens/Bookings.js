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
import { Redirect } from "react-router-dom";
import Timestamp from 'react-timestamp'

export class Bookings extends Component {
    constructor() {
        super()
        this.state = {
            data: [],
            isLoading: false
        }
    }

    selectPartner = (Sid, Bid) => {
        localStorage.setItem('serviceId', JSON.stringify(Sid));
        localStorage.setItem('bookingId', JSON.stringify(Bid));
        console.log(Sid)
        console.log(Bid)
        this.setState({
            isLoading: true
        })
    }

    getInfo = async () => {
        await axios.get(`${global.MyVar}/booking/list`)
            .then(response => {
                this.setState({
                    data: response.data.data
                })
                console.log(this.state.data)
            })
    }


    componentDidMount() {
        this.getInfo()
    }

    render() {
        const { data } = this.state;
        if (this.state.isLoading === true) {
            return (
                <Redirect push to="/SelectPartner" />
            )
        }
        return (
            <Box>
                <TableContainer component={Paper}>
                    <Table style={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>ID</TableCell>
                                <TableCell>Service Name</TableCell>
                                <TableCell>Customer Name</TableCell>
                                <TableCell>Partner Name</TableCell>
                                <TableCell>Booking Date</TableCell>
                                <TableCell>Service Date</TableCell>
                                <TableCell>Booking Status</TableCell>
                                <TableCell>Address</TableCell>
                                <TableCell >Booking Remarks</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.map((row) => (
                                <TableRow >
                                    <TableCell >{row.id}</TableCell>
                                    <TableCell >{row.service.name}</TableCell>
                                    <TableCell >{row.usersByCustomer.name}</TableCell>
                                    <TableCell>{row.usersByPartner === null ? <Button onClick={() => this.selectPartner(row.service.id, row.id)}>null</Button> : row.usersByPartner.name}</TableCell>
                                    <TableCell ><Timestamp date={(row.bookingDate)/2} /></TableCell>
                                    <TableCell ><Timestamp date={row.servingDate} /></TableCell>
                                    <TableCell >{row.bookingStatus}</TableCell>
                                    <TableCell >{row.address.street},{row.address.city},{row.address.state}</TableCell>
                                    <TableCell >{row.bookingRemarks}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        );
    }
}

export default Bookings;
