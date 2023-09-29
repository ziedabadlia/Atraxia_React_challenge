import { SxProps } from '@mui/material';

export const NoTicketsFoundBoxWrapper:SxProps = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '300px',
}

export const flexAlignCenter:SxProps = {
    display:"flex",
    alignItems:"center",
}

export const AvatarSize:SxProps = {
    width: "30px", 
    height: "30px",
}

export const StatusBoxStyles = (bgcolor: string): SxProps => {
    return {
      color: '#FFF',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '5.6875rem',
      height: '1.700rem',
      borderRadius: '0.875rem',
      bgcolor: bgcolor,
    };
  };


export  const StaffWrapperBox = {
    display: 'flex',
    justifyContent: 'space-between',
    p: '5px',
    width: '75px',
    borderRadius: '13px',
    bgcolor: '#EDEDED',
    ml: '5px',
  }