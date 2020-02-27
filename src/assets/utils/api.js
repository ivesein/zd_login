import axios from 'axios'
 export const getVerifyImgApi=(url,param)=>{
     console.log(param)
     return axios.get(url,{params:param})
 }

 export const verifyImgApi=(url,param)=>{
     return axios.get(url,{params:param})
 }

 export const verifyPhoneApi=(url,param)=>{
     return axios.get(url,{params:param})
 }