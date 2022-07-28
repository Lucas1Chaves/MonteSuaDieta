import React from 'react'
import style from './TableCard.module.scss'
import FoodTextField from './FoodTextField'
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import EditableText from './EditableText';



export default function TableRow({row,deleteFood,handleChange}){
  return(
    <div className={style.row}>
      <div className={style.food_item}><FoodTextField handleChange={handleChange} id={row.id} food={row.food}/> </div> 
      <p className={style.item}>100 gramas</p>
      <EditableText value={row.portionQuantity} handleChange={handleChange} id={row.id}/>
      <p className={style.item}>{row.calories} kcal</p>
      <p className={style.item}>{row.carb} g</p>
      <p className={style.item}>{row.prot} g</p>
      <p className={style.item}>{row.fat} g</p>
      <div className={style.food_item}> 
      <IconButton  aria-label="delete" onClick={()=>deleteFood(row.id)}>
        <DeleteIcon />
      </IconButton>
      </div>
    </div>
  )
}