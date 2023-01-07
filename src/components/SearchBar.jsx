import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { IconButton, Paper } from '@mui/material';

const SearchBar = () => {
  return (
    <Paper>
        <input className='search-bar' placeholder='Search...' />
        <IconButton sx={{color:'red'}}>
            <SearchIcon />
        </IconButton>
    </Paper>
  )
}

export default SearchBar