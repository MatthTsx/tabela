import React, { useState } from 'react'
import { api } from '../../utils/api'
import AddMat from './addMat'


function Mudar_Ano() {
  const {data:anos, isLoading: AnosLoading} = api.Commons.GetAnos.useQuery()
  const [YearSelected, setYearSelected] = useState<string>("")

  const {data:mat, isLoading:matLoading, refetch: MatReflesh} =
    api.Commons.GetMaterias.useQuery({ id:YearSelected })
  
  const removeMat = api.Admin.RemoveMat.useMutation()
  const [reload,setReload] = useState(1)


  return (
    <div className=' w-full flex items-center flex-col'>
      <div className='w-[55%] flex flex-col items-center bg-gray-800/20 p-4'>
        <div className='h-24 flex gap-1 flex-wrap w-full'>
              {AnosLoading ? <p>Loading</p>
              :anos?.length == 0? <p>unable to find the grades</p>
              :anos?.map((ano,i) => (
                  <button key={i} className={`px-4 p-1 bg-gray-500/20 opacity-20 text-sm h-10
                  ${ano.id == YearSelected ?
                      'opacity-90 scale-110' : 'hover:scale-105 hover:opacity-60'}
                      transition-all font-semibold tracking-wider`}
                  onClick={() => {setYearSelected(ano.id)}}>
                      {ano.ano}
                  </button>
              ))}
          </div>

          <div className='flex w-full justify-between'>
            <div className='flex flex-col'>
              {matLoading? <p>Loading...</p>
              :mat == null ? <p></p>
              :mat?.posibleMaterias.length != 0 ? 
              mat?.posibleMaterias.map((materia,i) => (
                <button onClick={(e) => {
                  removeMat.mutate({ AnoId:YearSelected, MatId:materia.id })
                  const sla = e.target as HTMLButtonElement
                  sla.hidden = true
                }}>
                  {materia.materias}
                </button>
              ))
              :<p>Essa turma não possui materias</p>}
            </div>

            <div className='w-[50%]'>
              
              <AddMat AnoMat={mat} id={YearSelected}/>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Mudar_Ano