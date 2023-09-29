import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material';
import Popover from '@mui/material/Popover';
import { Box, MenuItem } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { MenuItemNumberStyle, MenuItemStyle } from './index.style';
import useMenuItems from './dropDownMenu.hook';

export default function DropDownMenu() {
  const colors = useTheme().palette;
  const { MenuItemsData, handleClick, handleClose, anchorEl, value, open, id } = useMenuItems();
  return (
    <Box>
      <Box>
        <Button
          sx={{
            textTransform: 'none',
            color: '#000',
          }}
          aria-describedby={id}
          variant="text"
          onClick={handleClick}
          endIcon={<KeyboardArrowDownIcon sx={{ color: '#000' }} />}
        >
          <Box
            sx={{
              display: 'flex !important',
              justifyContent: 'space-between !important',
              alignItems: 'center',
              width: '120px',
            }}
          >
            <Typography>{value.title}</Typography>
            <Box sx={MenuItemNumberStyle(value.color)}>{value.number}</Box>
          </Box>
        </Button>
        <Popover
          open={open}
          id={id}
          anchorEl={anchorEl}
          onClose={() => handleClose(null)}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
        >
          <Box
            sx={{
              bgcolor: 'background.paper',
              p: '3px',
              width: '160px',
              borderRadius: '5px',
            }}
          >
            {MenuItemsData.map(item => (
              <MenuItem key={item.title} sx={MenuItemStyle} onClick={() => handleClose(item)}>
                <Typography>{item.title}</Typography>
                <Box sx={MenuItemNumberStyle(item.color)}>{item.number}</Box>
              </MenuItem>
            ))}
          </Box>
        </Popover>
      </Box>
    </Box>
  );
}
