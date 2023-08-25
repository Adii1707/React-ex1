import React, { useEffect } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { useDispatch, useSelector } from 'react-redux';
import { getTrackingData } from '../Redux/App/action';

ChartJS.register(ArcElement, Tooltip, Legend);


 
export function Expense() {

  const dispatch = useDispatch();
let  Data = useSelector((store)=> store.appreducer.Data) || [];

useEffect(()=>{
  dispatch(getTrackingData())
},[dispatch])
  
// console.log(Data)
let Expense = Data?.filter((el)=> { if(el.Type=="Expense") { return el.Category}})
let email = localStorage.getItem("usermail") || "";
console.log(email);
Expense = Expense.filter((el)=> email == el.Email)

let food = Expense.filter((el)=> el.Category == "Food & Drinks");
let shopping = Expense.filter((el)=> el.Category == "Shopping");
let Housing = Expense.filter((el)=> el.Category == "Housing");
let Bills = Expense.filter((el)=> el.Category == "Bills");
let Vehicle = Expense.filter((el)=> el.Category == "Vehicle & Transport");
let Lifestyle = Expense.filter((el)=> el.Category == "LifeStyle");

// console.log(food)
let FA = 0;
let SA = 0;
let HA = 0;
let BA = 0;
let VA = 0;
let LA = 0;


food.forEach((el)=>{ return FA += +el.Amount});
shopping.forEach((el)=>{ return SA += +el.Amount});
Housing.forEach((el)=>{ return HA += +el.Amount});
Bills.forEach((el)=>{ return BA += +el.Amount});
Vehicle.forEach((el)=>{ return VA += +el.Amount});
Lifestyle.forEach((el)=>{ return LA += +el.Amount});


const data = {
  labels: ["Food & Drinks", "Shopping", "Housing", "Bills", 'Vehicle & Transport', "LifeStyle"],
  datasets: [
    {
      label: `Expense of Rupees`,
      
      data: [FA, SA, HA, BA, VA, LA],
      
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
      
    },
  ],
};


  return <Doughnut data={data} />;
}
