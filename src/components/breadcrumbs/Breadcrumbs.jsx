import * as React from "react";
import Typography from "@mui/material/Typography";

const clickableActions = [
    {
        name:'Product List',
        url:'/products'
    }
]

export default function Breadcrumbs(props) {
    const { title, slices } = props;
    return (
        <>
            <Typography variant="h2">{title}</Typography><br />
            {
                slices.length && slices.map((el) => {
                    return (
                        <Typography variant="h5">{el.name}&nbsp; / &nbsp;</Typography>

                    )
                })
            }
        </>
    )
}