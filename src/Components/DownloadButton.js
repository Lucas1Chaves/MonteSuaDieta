import React from 'react'
import { createPdf,sumItems } from './common.js'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { useRecoilValue } from 'recoil'
import { mealSelectorState } from './TableCard'
import { Button } from '@mui/material'

const buttonSx =
  {bgcolor:'#467CF4',
  border:'2px solid transparent',
  '&:hover':{
    bgcolor:'white',
    color:'black',
    border:'2px solid black'}
  }

export default function DownloadButton(){
  const meals = useRecoilValue(mealSelectorState)
  let sumTotal 
  for (var i=0;i<meals.length;i++){
    sumTotal = sumItems(meals[i],sumTotal)
  }
  function handleDownload(){
    createPdf(meals,sumTotal)
  }

  return (
    <Button 
      onClick={handleDownload}
      variant="contained"
      endIcon={<ArrowDownwardIcon />}
      sx ={{...buttonSx,bgcolor:'#696969'}}
      >
        Baixar Dieta
      </Button>
  )
}