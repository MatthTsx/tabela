import React from 'react'

function Tabela() {
    const coisa = {
        segunda: {
            name: "segunda",
            horario: ["Historia","Goku","e","w","","azul"]
        },
        terca:{
            name:"terça",
            horario: ["","",""]
        },
        quarta:{
            name:"quarta",
            horario: ["","",""]
        },
        quinta:{
            name:"terça",
            horario: ["","",""]
        },
        sexta:{
            name:"terça",
            horario: ["","",""]
        },
    }
    const arry = [coisa.segunda,coisa.terca,coisa.quarta,coisa.quarta,coisa.sexta]
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
                <p className='tracking-widest font-semibold text-white text-center border-2 border-white/20
                shadow-xl hover:text-blue-300'>{day.name}</p>
                {[...Array(8)].map((ar,i) => (
                    <p key={i} className="min-h-[2rem] shadow-lg border-b-[1px] text-white/70
                    border-white/20 text-center items-center justify-center flex">
                        {day.horario[i]}</p>
                ))}
            </div>
        ))}
    </div>
  )
}

export default Tabela