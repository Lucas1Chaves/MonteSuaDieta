import React from 'react'
import style from './TotalMacroCard.module.scss'
import { mealSelectorState } from './TableCard'
import { useRecoilValue } from 'recoil'
import { sumItems } from './common'

export default function TotalMacroCard(){
  const meals = useRecoilValue(mealSelectorState)
  let sumTotal 
  for (var i=0;i<meals.length;i++){
    sumTotal = sumItems(meals[i],sumTotal)
  }
  sumTotal = sumTotal || {calories:0,fat:0,prot:0,carb:0}
  
  return(
    <div className={style.wrapper}>
      <h3>Soma total de Macronutrientes</h3>
      <h4>Calorias: {sumTotal.calories} kcal</h4>
      <h4>Carboidrato: {sumTotal.carb} g</h4>
      <h4>Proteína: {sumTotal.prot} g</h4>
      <h4>Gordura: {sumTotal.fat} g</h4>
    </div>
  )
}