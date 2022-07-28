import openpyxl
from itertools import islice
import json

sheet = openpyxl.load_workbook('Python Aux/data.xlsx',data_only=True).active
data ={}
for item in islice(sheet.rows,6,None):
    if isinstance(item[0].value,int) and item[5].value !='*':      
        food_name =item[1].value 
        calories = item[3].value
        prot = item[5].value
        fat = item[6].value
        carb = item[8].value
        macro = {
            'calories': round(calories,1) if (isinstance(calories,float) or isinstance(calories,int)) else 0,
            'prot': round(prot,1) if (isinstance(prot,float) or isinstance(prot,int)) else 0,
            'fat':round(fat,1) if (isinstance(fat,float) or isinstance(fat,int)) else 0,
            'carb':round(carb,1) if (isinstance(carb,float) or isinstance(carb,int)) else 0,
            'portion':'100 gramas'
            }
        data[food_name] = macro
    
with open('data.js','w') as fp:
    json.dump(data,fp,indent=4)