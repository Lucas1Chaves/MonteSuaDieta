import React,{useState} from 'react'
import style from './EditableText.module.scss'


export default function EditableText({value,handleChange,id}){  

  function onChange(event){
    handleChange(event.target.value.replace(',','.'),id,'portionQuantity')
  }

  return (
    <input className={style.input}
      type='text'
      aria-label ='Nome histórico'
      value = {value}
      onChange={onChange}
     
    />
  )
}