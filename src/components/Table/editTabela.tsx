import React, { useState } from 'react'
import { api } from '../../utils/api'
import { disable_buttons, scale_buttons } from '../../utils/scripts'
import MainPartEdit from './MainPartEdit'


interface Props{
    id: string,
    day: string,
}


export class DayObject {
    obj = {}
    day: String = ""
    constructor(day: String, content: any) {
        this.day = day.replace("ç","c")
        if(day == "segunda") this.obj = {segunda: content}
        if(day.replace("ç","c") == "terca")   this.obj = {terca  : content}
        if(day == "quarta")  this.obj = {quarta : content}
        if(day == "quinta")  this.obj = {quinta : content}
        if(day == "sexta")   this.obj = {sexta  : content}
    }
    set(index:number,name:String){
        // @ts-ignore
        let arry = Array.from(this.obj[this.day])
        arry[index] = name
        // @ts-ignore
        this.obj[this.day] = arry
    }
}
declare global {
    var __Day_True: DayObject | undefined
}

function EditTabela({ day, id }:Props) {
    const {data: Classes, isLoading: ClassLoading} = api.Commons.GetByDay.useQuery({ id, day })
    const [selected, setSelected] = useState({name:"",index:null})
    const activ:String = day == "terça" ? 'terca' : day

    // @ts-ignore
    var _Day = globalThis.__Day_True || new DayObject(day, Classes != null && typeof Classes != undefined ? Classes[activ] : [""])
    globalThis.__Day_True = _Day

  return (
    <div className='h-[30rem] w-full flex bg-gray-800/20'>
        <div className='bg-gray-800/20 h-full w-48 p-2 flex flex-col shadow-xl'>
            <div className='flex flex-col items-center w-full gap-1 group mt-4 shadow-2xl'
            onMouseLeave={() => {disable_buttons()}}>
                <h1 className='uppercase tracking-wider'>{day}</h1>
                {ClassLoading ? <p>Loading</p>
                :Classes && _Day.obj &&
                // No damaging Error
                // @ts-ignore
                _Day.obj[Object.keys(_Day.obj)[0]].map(( clas,i ) => (
                    <button key={i} className={`group
                    transition-all __Btns w-full flex items-center justify-center flex-col
                    ${selected.index == i ?
                        "group-hover:opacity-20"
                        :"opacity-20 hover:opacity-75"
                        }`}>
                        <p className={`tracking-wide w-32 text-center transition-all ${selected.index == i &&
                        'text-green-400'
                        }`}

                        onMouseOver={(e) => {
                            scale_buttons(i as number)
                        }}
                        onClick={() => {setSelected({name:clas, index:i})}}>
                            {clas != "" ? clas : "Undefined"}
                        </p>
                        <div className='w-0 h-0.5 bg-white/20 group-hover:bg-green-400 transition-all group-hover:w-32 duration-500'/>
                    </button>
                ))}
            </div>
        </div>
        <style>
            {`
                .activate{
                    scale: 1.1;
                    opacity: 1 !important;
                }
                .activate p{
                    color: green;
                }
                .sub-activate{
                    scale: 1.1;
                    opacity: 0.4;
                }
            `}
        </style>
        <MainPartEdit index={selected.index} name={selected.name} id={id} day={day}
        // @ts-ignore
        _Day={_Day}/>
    </div>
  )
}

export default EditTabela