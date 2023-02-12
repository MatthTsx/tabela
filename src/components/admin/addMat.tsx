import React, { useState } from 'react'
import { api } from '../../utils/api'

interface Props{
    AnoMat: {
      posibleMaterias: any[]
    } | null | undefined,
    id: string,
}

function AddMat({AnoMat, id}: Props) {
    const {data: AllMats, isLoading: AllMatsLoading} = api.Commons.GetAllMaterias.useQuery()
    const [matName, setMatName] = useState<string>("")

    const create = api.Admin.CreateMat.useMutation()
    const addMat = api.Admin.AddMat.useMutation()

  return (
    <div className='flex flex-col w-full items-center justify-between h-96'>
        <div className='flex flex-col w-full items-start px-4 h-full overflow-y-scroll'>
            {AllMats?.map((m,i) => (
                !AnoMat?.posibleMaterias.some(ma => ma.materias == m.materias) &&
                <div key={i}>
                    <button onClick={(e) => {
                        addMat.mutate({ AnoId:id, MatId:m.id })
                        const btn = e.target as HTMLButtonElement
                        btn.hidden = true
                    }}>
                        <p>{m.materias}</p>
                    </button>
                </div>
            ))}
        </div>

        <div>
            <input placeholder='nome da materia' onChange={(e) => setMatName(e.target.value)}
            className="text-black"/>
            <button onClick={() => {
                if(AllMats?.some(m => m.materias == matName)) return
                create.mutate({ name: matName })
            }}>Criar Materia</button>
        </div>
    </div>
  )
}

export default AddMat