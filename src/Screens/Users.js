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

const MyButton = styled(Button)({
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',

});

export class Users extends Component {
    constructor() {
        super()
        this.state = {
            data: []
        }
    }

    deleteUser = (id) => {
        axios.post(`${global.MyVar}/user/1/update/status`, {

        })
    }

    getInfo = () => {
        axios.get(`${global.MyVar}/user/list`)
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
        return (
            <Box>
                <CssBaseline />
                <Container style={{ marginBottom: 20 }} mainWidth="xs">
                    <Link to="UserForm"> <MyButton>Add Users</MyButton></Link>
                </Container>
                <TableContainer component={Paper}>
                    <Table style={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>ID</TableCell>
                                <TableCell>Name</TableCell>
                                <TableCell >Email</TableCell>
                                <TableCell >Mobile</TableCell>
                                <TableCell>Roles</TableCell>
                                <TableCell>Status</TableCell>
                                <TableCell>Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.map((row) => (
                                <TableRow >
                                    <TableCell >{row.id}</TableCell>
                                    <TableCell >{row.name}</TableCell>
                                    <TableCell >{row.email}</TableCell>
                                    <TableCell >{row.mobile}</TableCell>
                                    <TableCell >{row.roles}</TableCell>
                                    <TableCell >{row.status}</TableCell>
                                    <TableCell >
                                        <Grid >
                                            <Button onClick={this.deleteUser(row.id)}><DeleteIcon color="action" /></Button>
                                            <Button><CreateIcon /></Button>
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

export default Users;