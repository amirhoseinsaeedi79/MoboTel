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
    newProduct:()=>{},
    showOffer:()=>{},
    showModalMenu:()=>{},
    showModalComment:()=>{},
    bestshowModal:()=>{},
    showInfoProduct:()=>{},
    showModal:()=>{}

})

export default Context