import { Stack, Autocomplete,TextField } from "@mui/material"
import { useState } from "react";

type skill = {
    id:number,
    label:string
}
const skills=['HTML','CSS','JavaScript','TypeScript','React'];

export const MuiAutoComplete = () => {
    const [value,setValue]=useState<string | null>(null)
    const[sk,setSk]=useState<skill | null>(null)

    const skillOptions =skills.map((skill,index)=>({
        id:index+1,
        label:skill
    }))
    console.log({sk})
    console.log(value)
  return (
    <Stack spacing={2} width='250px'>
        <Autocomplete options={skills} renderInput={(params)=><TextField {...params} label='skills'/>} value={value} onChange={(event:any, newValue:string | null)=>{setValue(newValue)}} freeSolo/>

        <Autocomplete options={skillOptions} renderInput={(params)=><TextField {...params} label='skills'/>} value={sk} onChange={(event:any, newValue:skill | null)=>{setSk(newValue)}} />
    </Stack>
  )
}
