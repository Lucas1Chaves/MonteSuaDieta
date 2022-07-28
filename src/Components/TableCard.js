import React from 'react'
import style from './TableCard.module.scss'
import TableRow from './TableRow'
import TableHeader from './TableHeader'
import { multiplyObject,sumItems } from './common';
import _ from "lodash";
import {foodData} from '../../data.js'
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { mealsIdState } from './View';
import {useSetRecoilState,useRecoilState,atomFamily,selector} from 'recoil'
import IconButton from '@mui/material/IconButton';
import TableTotal from './TableTotal.js'




function calculateItem(item){
  if (item.food && item.portionQuantity && item.food!='Total'){
    const newItem = multiplyObject(foodData[item.food],item.portionQuantity)
    return {...item,...newItem}
  }else{
    return item
  }
}

function createEditedItem(item,property,itemEditedId,value){
  if (item.id===itemEditedId){
    return calculateItem({...item,[property]:value})
  }else{
    
    return calculateItem(item)
  }
}

const buttonSx =
  {bgcolor:'#467CF4',
  border:'2px solid transparent',
  '&:hover':{
    bgcolor:'white',
    color:'black',
    border:'2px solid black'}
  }

export const mealState = atomFamily({
  key:'meal',
  default:[]
})

export const mealSelectorState = selector({
  key: 'allMeals',
  get: ({get})=>{
    const mealsId = get(mealsIdState)
    const meals = mealsId.map((meal)=>{
      return get(mealState(meal.id))
    })
    return meals
  }
})

export default function TableCard({number,id}){
  
  const setMealsId = useSetRecoilState(mealsIdState)
  const [meal,setMeal] = useRecoilState(mealState(id))

  function deleteMeal(prev){
    let array = prev.filter((item)=>item.id!=id)
    array = array.map((item)=>{return {...item,number:array.indexOf(item)+1}})
    return array
  }
  
  function deleteFood(id){
    setMeal((prev)=>{
      return prev.filter((item)=>item.id!=id)
    })
  }

  function handleChange(value,itemEditedId,property){
    setMeal((prev=>{
      return prev.map((item)=>createEditedItem(item,property,itemEditedId,value))
    }))
  }

  return(
    <div className={style.wrapper}>
      <div className={style.delete_button}>
        <h3>{number}ª Refeição</h3>
        <IconButton onClick ={()=>setMealsId(deleteMeal)}  size="small" aria-label="add" sx={{...buttonSx,bgcolor:'#EB5C4C',margin:'5px'}}>
          <DeleteIcon/>
        </IconButton>
        </div>
      <div className={style.container}>       
        <div className={style.table}>
          <TableHeader mealId={id} row={{food:'Alimento',portionQuantity:'Qtde. Porções',calories:'Calorias',carb:'Carboidrato',prot:'Proteína',fat:'Gordura',}}/>
          {meal.map((item)=><TableRow row={item} deleteFood={deleteFood} handleChange={handleChange}/>)}
          <TableTotal row={sumItems(meal)} />
        </div>
    </div>
  </div>
  )
}
