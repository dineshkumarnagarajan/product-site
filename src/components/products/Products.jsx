import * as React from "react";
import { getAllProds } from "../../actions/asyncActions"
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import moment from 'moment';
import { Box, Button, Dialog, DialogActions, DialogContent, Grid, IconButton } from "@mui/material";
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

import DeleteIcon from '@mui/icons-material/Delete';
import { baseUrl } from "../../actions/endpoints";
import axios from 'axios';
import NoDataPage from "../noDataPage/NoDataPage";
export default function Products() {
    const prodStore = useSelector((store) => (store.products))
    const prodStoreData = prodStore.data;
    const prodStoreDataFetched = prodStore.fetched;
    const [selectedProd, setSelectedProd] = React.useState(null)
    const [confirmDialog, setConfirmDialog] = React.useState(false);
    console.log("prodStore", prodStore)
    const dispatch = useDispatch()
    React.useEffect(() => {
        dispatch(getAllProds())
    }, [dispatch])
    const deleteMethod = (row) => {
        setSelectedProd(row)
        setConfirmDialog(true)
    }
    const deleteProd = () => {
        let delUrl = `${baseUrl}deleteproduct`;
        let bodyFormData = new FormData();
        bodyFormData.append("product_id", selectedProd.product_id);
        axios.post(delUrl, bodyFormData).then((res) => {
            setConfirmDialog(false)

        }).catch((err) => {

        })
        dispatch(getAllProds())
    }
    if (prodStoreDataFetched) {
        return (
            <>
                {
                    <Box sx={{display:'flex',}}>
                        <h1>Product List</h1>
                        <div style={{float:'right'}}>
                            <Button variant="contained" startIcon={<RemoveRedEyeIcon />}>Create Product</Button>
                        </div>
                        </Box>
                }

                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="center">S.no</TableCell>
                                <TableCell align="center">Image</TableCell>
                                <TableCell align="center">Product Name</TableCell>
                                <TableCell align="center">Top Category</TableCell>
                                <TableCell align="center">Category</TableCell>
                                <TableCell align="center">Quantity</TableCell>
                                <TableCell align="center">Price</TableCell>
                                <TableCell align="center">File</TableCell>
                                <TableCell align="center">Date Added</TableCell>
                                <TableCell align="center">Status</TableCell>
                                <TableCell align="center">Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                prodStoreData.map((row, i) => {
                                    return (<TableRow
                                        key={i}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell align="center" scope="row">
                                            {i + 1}
                                        </TableCell>
                                        <TableCell align="center" >
                                            <img src={row.image_path} />
                                        </TableCell>


                                        <TableCell align="center" >
                                            {row.product_name}
                                        </TableCell> <TableCell align="center" >
                                            {row.top_category_name}
                                        </TableCell> <TableCell align="center" >
                                            {row.category_name + ` > ` + row.subcategory_name}
                                        </TableCell> <TableCell align="center" >
                                            {row.quantity}
                                        </TableCell> <TableCell align="center" >
                                            {`Rs.` + row.price}
                                        </TableCell> <TableCell align="center" >
                                            {row.file_actual}
                                        </TableCell> <TableCell align="center" >
                                            {moment(row.date_added).format("DD MMM yyyy")}
                                        </TableCell> <TableCell align="center" >
                                            {row.status === '1' ? <Button variant="contained" color="success">Active</Button> : <Button variant="contained" color="error">Inactive</Button>}

                                        </TableCell>
                                        <TableCell align="center" >
                                            <Grid container sx={{ display: "flex", flexWrap: 'nowrap' }} gap={1}>
                                                <Grid>
                                                    <IconButton

                                                        size="small"><TaskAltIcon size="small" /></IconButton>

                                                </Grid>
                                                <Grid>
                                                    <IconButton size="small"><RemoveRedEyeIcon size="small" /></IconButton>


                                                </Grid>
                                                <Grid>
                                                    <IconButton size="small"> <BorderColorIcon size="small" /></IconButton>


                                                </Grid>
                                                <Grid>
                                                    <IconButton
                                                        onClick={() => { deleteMethod(row) }}
                                                        size="small"> <DeleteIcon size="small" /></IconButton>


                                                </Grid>
                                            </Grid>
                                        </TableCell>
                                    </TableRow>)

                                })
                            }


                        </TableBody>
                    </Table>
                </TableContainer>
                <Dialog
                    open={confirmDialog}
                    maxWidth="sm"
                >
                    <DialogContent><h1>Are You Sure?</h1></DialogContent>

                    <DialogActions>
                        <Button variant="contained" onClick={deleteProd} color="success">Yes</Button>   <Button

                            onClick={() => { setConfirmDialog(false) }}
                            variant="contained" color="error">No</Button>
                    </DialogActions>
                </Dialog>
            </>
        )
    } else {
        return (
            <NoDataPage />
        )
    }

}