import {Tooltip,IconButton} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';

export const MuiToolTip = () => {
  return (
    <Tooltip title='Delete'>
    <IconButton>
        <DeleteIcon/>
    </IconButton>
    </Tooltip>
  )
}
