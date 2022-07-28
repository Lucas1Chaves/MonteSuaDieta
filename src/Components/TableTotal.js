import React from 'react'
import style from './TableCard.module.scss'
import FoodTextField from './FoodTextField'
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import EditableText from './EditableText';



export default function TableRow({row}){
  return(
    <div className={style.row}>
      <p className={style.item} style={{gridColumn:'span 3'}}>Total</p>
      <p className={style.item}>{row.calories} kcal</p>
      <p className={style.item}>{row.carb} g</p>
      <p className={style.item}>{row.prot} g</p>
      <p className={style.item}>{row.fat} g</p>
      <div className={style.food_item}> 
     
      </div>
    </div>
  )
}