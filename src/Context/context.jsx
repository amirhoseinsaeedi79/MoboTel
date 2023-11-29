import { createContext } from "react";

const Context =createContext({
    allProduct:[],
    bestProduct:[],
    infoProduct:{},
    statusModal:false,
    statusbestProduct:false,
    statusComment:false,
    statusMenu:false,
    newProduct:()=>{},
    showModalMenu:()=>{},
    showModalComment:()=>{},
    bestshowModal:()=>{},
    showInfoProduct:()=>{},
    showModal:()=>{}

})

export default Context