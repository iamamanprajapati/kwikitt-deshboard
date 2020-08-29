import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import axios from 'axios'
import { styled } from '@material-ui/core/styles';
import { Box, Grid, Button } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { Link } from "react-router-dom";
import DeleteIcon from '@material-ui/icons/Delete';
import CreateIcon from '@material-ui/icons/Create';
import Avatar from '@material-ui/core/Avatar';

const MyButton = styled(Button)({
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',

});

export class Services extends Component {
    constructor() {
        super()
        this.state = {
            data: []
        }
    }

    deleteService = (id) => {
        axios.post(`${global.MyVar}/category/delete/${id}`, {

        })
    }

    editService = (id) => {
        axios.post(`${global.MyVar}/category/update/${id}`, {

        })
    }

    getInfo = async() =>{
        await axios.get(`${global.MyVar}/service/list`)
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

    componentWillUnmount(){
    }

    render() {
        const { data } = this.state;
        return (
            <Box>
                <CssBaseline />
                <Container style={{ marginBottom: 20 }} mainWidth="xs">

                    <Link to="ServiceForm"> <MyButton>Add Category</MyButton></Link>
                </Container>
                <TableContainer component={Paper}>
                    <Table style={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>ID</TableCell>
                                <TableCell>Name</TableCell>
                                <TableCell >Description</TableCell>
                                <TableCell >Total Rating</TableCell>
                                <TableCell >Cost</TableCell>
                                <TableCell >Status</TableCell>
                                <TableCell >Image</TableCell>
                                <TableCell align="center">Action</TableCell>

                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.map((row) => (
                                <TableRow >
                                    <TableCell >{row.id}</TableCell>
                                    <TableCell >{row.name}</TableCell>
                                    <TableCell >{row.description}</TableCell>
                                    <TableCell >{row.totalRating}</TableCell>
                                    <TableCell >{row.cost}</TableCell>
                                    <TableCell >{row.status}</TableCell>
                                    <Avatar
                                        variant="rounded"
                                        alt="Remy Sharp"
                                        src={`${global.MyVar}/uploads/services/${row.serviceImage}`}
                                        style={{ marginTop: 15, marginLeft: 12 }}
                                    />
                                    <TableCell align="center">
                                        <Grid >
                                            <Button onClick={this.deleteService(row.id)}><DeleteIcon color="action" /></Button>
                                            <Button onClick={this.editService(row.id)}><CreateIcon /></Button>
                                        </Grid>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        );
    }
}

export default Services;