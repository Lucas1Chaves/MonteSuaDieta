import React from 'react'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import {foodData} from '../../data.js'

const options = Object.keys(foodData)


function ComboBox({food,handleChange,id}) {
  
  return (
    <Autocomplete
      value={food}
      onChange={(event, newValue) => {
        handleChange(newValue,id,'food')
      }}
      id="combo-box"
      options={options}
      size ="small"
      sx={{
          display: 'inline-block',
          width:'100%',
          height:'100%',
          padding:'2px',
          '& input': {
            width: '100%',
            height:'100%',
            border:0,
          },
        }}
        renderInput={(params) => (
          <div style ={{width:'100%',height:'100%'}} ref={params.InputProps.ref}>
            <input type="text" {...params.inputProps} />
          </div>
        )}
    />
  );
}

export default React.memo(ComboBox)