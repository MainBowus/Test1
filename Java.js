const height_bmi = document.querySelector("#height"); 
const weight_bmi = document.querySelector("#weight"); 
const btn = document.querySelector('.calculate')
const avg = document.querySelector('.avg')
const info_bmi = document.querySelector('.info')
let sum = 0

btn.addEventListener('click',bmi=>{
 sum = weight_bmi.value/((height_bmi.value/100)**2);
    avg.innerHTML=(sum.toFixed(1));
    if(sum < 18.0){
        info_bmi.innerHTML='อยู่ในเกณฑ์น้ำหนักน้อยหรือผอม'
      
    }
    else if(sum>=18.5&&sum<=23.4){
        info_bmi.innerHTML='อยู่ในเกณฑ์ปกติ'
       
    }
    else if(sum>=23.5&&sum<=28.4){
        info_bmi.innerHTML='น้ำหนักเกิน'
  
    }
    else if(sum>=28.5&&sum<=34.9){
        info_bmi.innerHTML='โรคอ้วนขั้นที่ 1'
       
    }
    else if(sum>=35&&sum<=39.9){
        info_bmi.innerHTML='โรคอ้วนขั้นที่ 2'
      
    }
    else if(sum>40){
        info_bmi.innerHTML='โรคอ้วนขั้นสูงสุด'
    
    }

})