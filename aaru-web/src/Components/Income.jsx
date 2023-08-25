import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getTrackingData } from '../Redux/App/action';

ChartJS.register(ArcElement, Tooltip, Legend);


 
export function Income() {

  const dispatch = useDispatch();
  let  Data = useSelector((store)=> store.appreducer.Data) || [];
  
  useEffect(()=>{
    dispatch(getTrackingData())
  },[dispatch])

let Income = Data.filter((el)=> { if(el.Type=="Income") { return el.Category}}) || []


let email = localStorage.getItem("usermail") || "";
console.log(email);
Income = Income.filter((el)=> email == el.Email)



let Salary = Income.filter((el)=> el.Category == "Salary");
let Gifts = Income.filter((el)=> el.Category == "Gifts");
let Refunds = Income.filter((el)=> el.Category == "Refunds");
let Other = Income.filter((el)=> el.Category == "Others"); 

let SA = 0;
let GA = 0;
let RA = 0;
let OA = 0;

  Salary.forEach((el)=> { return SA += +el.Amount});
  Gifts.forEach((el)=> { return GA += +el.Amount});
  Refunds.forEach((el)=> { return RA += +el.Amount});
  Other.forEach((el)=> { return OA += +el.Amount});



  const data = {
    labels: ['Salary', 'Gifts', 'Refunds', 'Other'],
    datasets: [
      {
        label: 'Income of Rupees',
        data: [SA, GA, RA, OA],
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
