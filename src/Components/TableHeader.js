import React from 'react'
import style from './TableCard.module.scss'
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';
import { mealState } from './TableCard';
import {foodData} from '../../data.js'
import { useSetRecoilState } from 'recoil';
import {nanoid} from 'nanoid'

const options = Object.keys(foodData)

const buttonSx =
  {bgcolor:'#467CF4',
  border:'2px solid transparent',
  '&:hover':{
    bgcolor:'white',
    color:'black',
    border:'2px solid black'}
  }



export default function TableHeader({row,mealId}){
  
  const setMeal = useSetRecoilState(mealState(mealId))

  function addFood(){
    const defaultItem = {id:nanoid(15),food:options[0],portion:'',portionQuantity:'',calories:'',carb:'',prot:'',fat:''}
    setMeal((prev)=>[...prev,defaultItem])
  }
  
  return(
    <div className={`${style.row} ${style.header}`}>
      <p className={style.item}>{row.food} </p>
      <p className={style.item}>Porção </p>
      <p className={style.item}>{row.portionQuantity} </p>
      <p className={style.item}>{row.calories}</p>
      <p className={style.item}>{row.carb}</p>
      <p className={style.item}>{row.prot}</p>
      <p className={style.item}>{row.fat}</p>
      <p className={style.item} style={{padding:0,backgroundColor:'white'}}> 
        <IconButton onClick={addFood} size="small" aria-label="add" sx={{...buttonSx,bgcolor:'#63EB8C',margin:'5px'}}>
          <AddIcon/>
        </IconButton>
      </p>
    </div>
  )
}