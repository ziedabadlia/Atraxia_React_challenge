import {SxProps} from "@mui/material"

export const iconButton = (currentPage:number,index:number):SxProps => {
    return {
    width: '25px',
    height: '25px',
    bgcolor: currentPage === index + 1 ? '#000' : '#FFF',
    color: currentPage === index + 1 ? '#FFF' : '#555',
    '&:hover': {
      bgcolor: currentPage === index + 1 ? '#000' : '#FFF',
    },
}
  }

  export const controlButton:SxProps = {
        width: '25px',
        minWidth: '25px',
        height: '25px',
        color: '#555',
        borderRadius: '3px',
        border: '1px solid #EDEDED',
      
  }

 export const flexAlignItemsCenter:SxProps = {
    display: 'flex',
    alignItems: 'center',
  }