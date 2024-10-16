import {useEffect, useState} from 'react'
export function Boton(){
    let [incremento, setIncremento ]=useState(0);
    let [mensaje ,setMensaje]=useState("")

    useEffect(()=>{
        console.log("render")
    },[])

    return<>
        <h1>marvin hizo click: { incremento }</h1>

        <button className="btn-danger" onClick={()=>{
            setIncremento(incremento+1)
        }}>
            INCREMENTAR
        </button>
        <button className="btn-danger" onClick={()=>{
            setIncremento(incremento=0)
        }}>
            RENICIAR
        </button>
        <button className="btn-danger" onClick={()=>{
            setIncremento(incremento-1)
        }}>
            MENORAR
        </button>

        <input onChange={e=>setMensaje(e.target.value)}/>
        <button onClick={()=>{
            console.log("el mensaje es:"+mensaje)
            
        }}>
            SAVE
        </button>

        </>
}

