import { Box, List,ListItem,ListItemText,ListItemIcon, ListItemAvatar,Avatar,ListItemButton,Divider} from "@mui/material"
import MailIcon from '@mui/icons-material/Mail';

export const MuiList = () => {
  return (
    <Box sx={{width:'400px', bgcolor:'#efefef'}} m={4}>
        <List>
            <ListItem disablePadding>
                <ListItemButton>
                <ListItemIcon>
                    <ListItemAvatar>
                    <Avatar>
                    <MailIcon/>
                    </Avatar>
                    </ListItemAvatar>
                </ListItemIcon>
                <ListItemText primary='list Item 1' secondary='Secondary Text'/>
                </ListItemButton>
            </ListItem>
            <Divider/>
            <ListItem>
            <ListItemAvatar>
                    <Avatar>
                    <MailIcon/>
                    </Avatar>
                    </ListItemAvatar>
                <ListItemText primary='list Item 2' secondary='Secondary Text'/>
            </ListItem>
            <Divider/>
            <ListItem>
            <ListItemAvatar>
                    <Avatar>
                    <MailIcon/>
                    </Avatar>
                    </ListItemAvatar>
                <ListItemText primary='list Item 3'/>
            </ListItem>
        </List>
    </Box>
  )
}
