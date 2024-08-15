import React from 'react';
import { InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export default function Search() {
  return (
    <TextField
      fullWidth
      id="input-with-icon-textfield"
      sx={{
        // width: '430px',
        width: '90%',
        backgroundColor: '#2c343d',
        borderRadius: '10px', // Set border radius
        '& .MuiFilledInput-root': {
          borderRadius: '10px', // Set border radius
          backgroundColor: '#2c343d', // Set background color to make it visible
          '&:before, &:after': {
            borderBottom: 'none', // Remove the underline
          },
          padding: '8px 12px', // Adjust padding for height
          height: '40px', // Set explicit height if needed
        },
        '& .MuiInputBase-input': {
          padding: '4px 0', // Reduce padding for input text
          fontSize: '0.875rem', // Adjust font size if needed
          color: 'white',
          backgroundColor: '#2c343d',
        },
        '& .MuiFilledInput-root .MuiInputBase-input:hover': {
          bgcolor:'#2c343d'
        },
        // '@media (max-width: 1120px)': {
        //   width: '380px',
        // },
        // '@media (max-width: 900px)': {
        //   width: '300px',
        // },
        // '@media (max-width: 799px)': {
        //   width: '270px'
        // },
        // '@media (max-width: 736px)': {
        //   width: '250px'
        // },
        // '@media (max-width: 675px)': {
        //   marginLeft:'20px',
        //   width: '190px'
        // },
        // '@media (max-width: 600px)': {
        //   width : '90%'
        // },
      }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon sx={{ color: 'gray', position: 'relative', bottom: '7px', cursor: 'pointer', bgcolor:'#2c343d' }} />
          </InputAdornment>
        ),
      }}
      variant="filled"
    />
  );
}
