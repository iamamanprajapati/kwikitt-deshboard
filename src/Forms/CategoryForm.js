import React, { Component } from 'react'
import { Container, Box, Typography, TextField, CircularProgress, Button, } from '@material-ui/core'
import axios from 'axios'

export class CategoryForm extends Component {

    constructor() {
        super()
        this.state = {
            categoryName: "",
            categoryImage: "",
            show_progress: false,
            checkBox: false,
            name_error: null,
            CategoryImage_error: null
        }

        this.AddCategory = this.AddCategory.bind()
    }

    AddCategory = () => {
        let valid_data = true;

        if (this.state.categoryName === "") {
            this.setState({
                name_error: "Required"
            })
            valid_data = false
        }
        if (this.state.categoryImage === []) {
            this.setState({
                categoryImage_error: "Required"
            })
            valid_data = false
        }
        this.setState({
            update: true
        })

        if (valid_data) {

            console.log(this.state.categoryName)
            console.log(this.state.categoryImage)

            axios.post(`http://localhost:8080/category/save/?categoryImage="aman"?categoryName="kumar"`)
            .then(response=>{
                console.log(response)
            })


            // let url="http://localhost:8080/category/save"

            // let formData = new FormData();

            // formData.append('categoryName', 'ABC'); 
            // formData.append('categoryImage', "20");

            // const config = {
            //     headers: { 'content-type': 'multipart/form-data' }
            // }

            // axios.post(url, formData, config)
            //     .then(response => {
            //         console.log(response);
            //     })
            //     .catch(error => {
            //         console.log(error);
            //     });
        }
    }

    handleCategoryName = (e) => {
        this.setState({
            categoryName: e.target.value
        });
    }

    handleCategoryImage = (e) => {
        this.setState({
            categoryImage: e.target.value
        });
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
                        Add New Category
                    </Typography>
                    <TextField
                        label="Category Name"
                        id="outlined-size-small"
                        type="string"
                        color="secondary"
                        name="categoryName"
                        error={this.state.name_error != null}
                        helperText={this.state.name_error}
                        onChange={this.handleCategoryName}
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        size="small"
                    />
                    <input type="file"
                        style={{ marginTop: 5, fullWidth: true, size: "small" }}
                        onChange={this.handleCategoryImage}
                        name="categoryImage"
                        value={this.state.categoryImage}
                        error={this.state.categoryImage_error != null}
                        helperText={this.state.categoryImage_error}
                    />
                    {this.state.show_progress ? <CircularProgress
                        color="secondary"
                        size={30} /> : null}
                    <br></br><br></br>
                    <Button
                        disableElevation
                        variant="contained"
                        fullWidth
                        onClick={this.AddCategory}
                        color="primary">
                        Add Category
                    </Button>
                </Box>
            </Container>
        )
    }
}

export default CategoryForm