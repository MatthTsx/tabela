import React, { Dispatch } from 'react'

interface Props{
    data: {
        segunda: String[],
        terca: String[],
        quarta: String[],
        quinta: String[],
        sexta: String[]
    } | null | undefined,
    editable: Boolean,
    id: String,
    func: React.Dispatch<React.SetStateAction<Boolean>> | null,
    func2: React.Dispatch<React.SetStateAction<String>> | null,
}

function Tabela({ data, editable, func, func2 }:Props) {

    const arry = [
        { name:"segunda", horario: data?.segunda || [""]},
        { name:"terça",   horario: data?.terca || [""]},
        { name:"quarta",  horario: data?.quarta || [""]},
        { name:"quinta",  horario: data?.quinta || [""]},
        { name:"sexta",   horario: data?.sexta  || [""]},
    ]

    const horas = [
        "07:30 - 08:20",
        "08:20 - 09:10",
        "09:10 - 10:00",
        "10:20 - 11:10",
        "11:10 - 12:00",
        "13:00 - 13:50",
        "13:50 - 14:40",
        "14:40 - 15:30"
    ]

  return (
    <div className=' flex space-x-2 relative items-center'>
            <div className="w-32 absolute -left-32 opacity-50 top-7">
                {horas.map((ar,i) => (
                    <p key={i} className="min-h-[2rem] shadow-lg border-b-[1px] text-white/70
                    border-white/10 text-center items-center justify-center flex text-sm">
                        {ar}
                    </p>
                ))}
            </div>
        {arry.map((day,index) => (
            <div key={index} className="w-32">
                <button className={`tracking-widest font-semibold text-white text-center border-2 border-white/20
                shadow-xl hover:text-blue-300 w-full ${editable && '_day-activate'}`} onClick={async () => {
                    if(func == null || editable == false || func2 == null) return
                    globalThis.__Day_True = undefined
                    func2(day.name)
                    func(true)
                }}>
                    <p className=''>
                        {day.name}
                    </p>
                </button>
                {[...Array(8)].map((ar,i) => (
                    <div className='relative group' key={i}>
                        <p key={i} className={`min-h-[2rem] shadow-lg border-b-[1px] text-white/70
                        border-white/20 text-center items-center justify-center flex`}>
                            {day.horario[i]}</p>
                    </div>
                ))}
            </div>
        ))}
    </div>
  )
}

export default Tabela