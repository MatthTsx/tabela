import React from 'react'

function Tabela() {
    const coisa = {
        segunda: {
            name: "segunda",
            horario: ["Historia","Goku","e"]
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

  return (
    <div className=' flex space-x-2'>
        {arry.map((day,index) => (
            <div key={index} className="w-32">
                <p className='tracking-widest font-semibold text-white text-center border-2 border-white/20
                shadow-xl hover:text-blue-300'>{day.name}</p>
                {day.horario.map((aula,i) => (
                    <p key={i} className="min-h-[1rem]">{aula}</p>
                ))}
            </div>
        ))}
    </div>
  )
}

export default Tabela