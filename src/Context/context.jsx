import { createContext } from "react";

const Context =createContext({
    allProduct:[],
    bestProduct:[],
    offersProduct:[],
    infoProduct:{},
    statusModal:false,
    statusbestProduct:false,
    statusComment:false,
    statusMenu:false,
    showForm:false,
    showPassword:false,
    newProduct:()=>{},
    ShowPasswordHandler:()=>{},
    ShowFormHandler:()=>{},
    showOffer:()=>{},
    showModalMenu:()=>{},
    showModalComment:()=>{},
    bestshowModal:()=>{},
    showInfoProduct:()=>{},
    login:()=>{},
    logout:()=>{},
    showModal:()=>{}

})

export default Context