import { MOCK_DATA } from "../data/MOCK_DATA"
import { useEffect, useState } from "react"


export const pedirDatos = () => {
    return new Promise((resolve, reject)=>{
        setTimeout(()=> {
            resolve(MOCK_DATA)
        },1000)
    })
}

