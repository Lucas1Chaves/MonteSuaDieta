import { jsPDF } from "jspdf";
import autoTable from 'jspdf-autotable';

export function multiplyObject(obj,factor) {
  const newObj = {...obj}
  for (let key in obj) {
    if (typeof obj[key] == 'number' )  {
      newObj[key] = (factor*obj[key]).toFixed(1);
    }
  }
  return newObj
}

export function sumItems(data,sum){    

  sum = sum || {calories:0,carb:0,prot:0,fat:0}
 
  for (let i =0; i<data.length; i++){
    if (data[i].food !='Total'){
    sum.calories = parseFloat((sum.calories + Math.max(data[i].calories,0)).toFixed(1))
    sum.carb = parseFloat((sum.carb + Math.max(data[i].carb,0)).toFixed(1))
    sum.prot = parseFloat((sum.prot + Math.max(data[i].prot,0)).toFixed(1))
    sum.fat = parseFloat((sum.fat + Math.max(data[i].fat,0)).toFixed(1))
  }
}
  return sum
}

export function createPdf(data,sumTotalMacro){
    const doc = new jsPDF();
    var pageWidth = doc.internal.pageSize.width || doc.internal.pageSize.getWidth()
    doc.text('Resumo da Dieta', pageWidth / 2, 10,{align:'center'})

    doc.autoTable({
      startY: 15,
      head: [['Calorias', 'Carboidrato', 'Proteína','Gordura']],
      body: [[
        `${sumTotalMacro.calories} kcal`,
        `${sumTotalMacro.carb} g`,
        `${sumTotalMacro.prot} g`,
        `${sumTotalMacro.fat} g`       
      ]],
      theme:'grid'
    })

    doc.text('Refeições', pageWidth / 2, doc.lastAutoTable.finalY + 10,{align:'center'})
    doc.autoTable({
      startY: doc.lastAutoTable.finalY + 15,
      head: [['Alimento', 'Porção', 'Calorias', 'Carboidrato', 'Proteína','Gordura']],
      
      body: createData(data),
      theme:'grid'
    })
  
    doc.save("a4.pdf");
}


function createData(data){
  const rows = [] 
  for (var i = 0 ; i < data.length; i++){
    const mealData = data[i]
    var row = [{colSpan: 6, content: `${i+1}ª REFEIÇÃO`,styles: { valign: 'middle', halign: 'center' }}]
    rows.push(row)
    for (var j=0; j<mealData.length; j++){
      const food = mealData[j]
      row = [
        food.food,
        `${Math.round(food.portionQuantity*100)} g`,
        `${food.calories} kcal`,
        `${food.carb} g`,
        `${food.prot} g`,
        `${food.fat} g`
      ] 
      rows.push(row)
    }
    const mealSum = sumItems(mealData)
    row = [
      {colSpan: 2, content: `Total:`,styles: { valign: 'middle', halign: 'center' }},
      `${mealSum.calories} kcal`,
      `${mealSum.carb} g`,
      `${mealSum.prot} g`,
      `${mealSum.fat} g`
    ] 
    rows.push(row)
    rows.push([{colSpan: 6, content:''}])  
  }
  return rows
}
