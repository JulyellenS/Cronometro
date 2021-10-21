import React, {useState, useEffect} from 'react'
import LabelCronometro from './LabelCronometro'
import  Botao  from  './Botao'
import  LabelParcial  from  './LabelParcial'



const Contador = (props) => {
    const [segundos, setSegundos] = useState(0)
    const [minutos, setMinutos] = useState(0)
    const [stop, setStop] = useState(false)
    const [nameStop, setNameStop] = useState("Stop")
    const [parcial, setParcial] =  useState([])


    
    const incrementar = () => {   
        if(stop===false){
            setSegundos(segundos+1)
        }
    }
    
    const zerarCronometro = () => {
        setSegundos(0)
        setMinutos(0)
        setParcial([])
    }
    

    const pararTempo = () => {
        setStop(!stop)
        if(stop)
        {
            setNameStop("Stop")
        }else
        {
            setNameStop("Play")
        } 
    }
    
    
    const incrementarMinutos = () => {
        setMinutos(minutos + 1)
    }

    const parciais = () => {
        let p = minutos + ":" + segundos
        setParcial([...parcial, p])
    }
    
    
    useEffect(() => {
        let id = setInterval(() => {
            incrementar()
        }, 1000)
        return () => clearInterval(id);   
    }, [segundos, stop])
    useEffect(() => {
        if (segundos >= 60){
            zerarCronometro()
            incrementarMinutos()
        }
    }, [segundos])

    {/*useEffect(() => {
        let id = setInterval(() => {
            incrementar()
        }, 1000)
        if (segundos >= 15){
            zerarSegundos()
            incrementarMinutos()
        }
        return () => clearInterval(id)
    }, [segundos, stop])*/} //substitui os dois userEffect por apenas um.

    return(
            <div>
                <LabelCronometro name={`${minutos}:${segundos < 10 ? "0"+segundos : segundos}`}/>
                <Botao onClick={() => {zerarCronometro()}} label="Zerar"/>
                <Botao onClick={() => {pararTempo()}} label={nameStop}/>
                <Botao  onClick={() => {parciais()}}  label="Parcial" />
                <LabelParcial  itens={parcial}/>
            </div>
        )
}
export default Contador
