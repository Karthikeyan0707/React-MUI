import { Box, TextField, MenuItem } from "@mui/material";
import React, { useState } from "react";

export const MuiSelect=()=>{
    const [country,setCountry]=useState<string[]>([])
    console.log({country})
    const handleChange=(event:React.ChangeEvent<HTMLInputElement>)=>{
        const value=event.target.value
        setCountry(typeof value==='string' ? value.split(',') : value)
    }

    return <Box width='250px'>
        <TextField label='Select country' select value={country} onChange={handleChange} fullWidth SelectProps={{multiple:true}} size='small'color="secondary" helperText='Please Select Your Country' error>
            <MenuItem value='IN'>India</MenuItem>
            <MenuItem value='US'>USA</MenuItem>
            <MenuItem value='AU'>Australia</MenuItem>
        </TextField>
    </Box>
}