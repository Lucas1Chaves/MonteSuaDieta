import React from 'react'
import {nanoid} from 'nanoid'
import { Button } from '@mui/material'
import style from './View.module.scss'
import logo from '../assets/logo.svg'
import AddIcon from '@mui/icons-material/Add';
import TotalMacroCard from './TotalMacroCard.js'
import TableCard from './TableCard.js'
import {atom,useRecoilState} from 'recoil'
import DownloadButton from './DownloadButton'

const buttonSx =
  {bgcolor:'#467CF4',
  border:'2px solid transparent',
  '&:hover':{
    bgcolor:'white',
    color:'black',
    border:'2px solid black'}
  }

export const mealsIdState = atom({
  key:'mealsID',
  default:[{
    id:nanoid(15),
    number:1
  }]
})

export default function View(){
  const [mealsId,setMealsId] = useRecoilState(mealsIdState)


  return(
    <div className={style.wrapper}>
      <div className={style.header_container}>
        <div className={style.empty}></div>
        <img src={logo} />
        {<TotalMacroCard  /> 
        }
      </div>
      <div className={style.buttons}>
      <Button 
        onClick={()=>setMealsId((prev)=>[...prev,{id:nanoid(15),number:prev.length+1}])}
        variant="contained"
        startIcon ={<AddIcon />}
        sx ={{...buttonSx}}
        >
          Adicionar Refeição
      </Button>
      <DownloadButton />
      </div>
      {mealsId.map((item)=><TableCard id={item.id} number={item.number}  />)
      }
    </div>
  )
}