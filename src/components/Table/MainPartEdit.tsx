import React from 'react'
import { api } from '../../utils/api'
import { DayObject } from './editTabela'

interface Props{
    index: number | null,
    name: String,
    id: String,
    day: String,
    _Day: DayObject
}

function MainPartEdit({ index,name,id,day, _Day }: Props) {
    const {data: mat, isLoading} = api.Commons.GetMaterias.useQuery({ id: id as string })
    const {mutate: change} = api.Admin.ChangeMatDay.useMutation()
    
    if(index == null) return (<div>Null</div>)

  return (
    <div className='w-[51rem] flex flex-col items-center pt-8 gap-y-4'>
        <div className=''>
            <p className='text-green-400 tracking-widest uppercase text-lg'>{name}</p>
        </div>
        <div className='flex flex-row flex-wrap w-full px-8 gap-2'>
            {mat?.posibleMaterias.length != 0 ?  mat?.posibleMaterias.map((mate, i) => (
                <button key={i} onClick={() => {
                    _Day.set(index, mate.materias)
                    change({id:id as string, day: _Day.obj})
                }}
                className="px-4 p-1 bg-gray-500/20 opacity-20 text-sm h-10">
                    {mate.materias}
                </button>
            ))
            :<p className='text-sm font-semibold text-white/80'>
                Essa turma ainda não tem materias especificadas, vá ao menu modificar Ano para adicionar 
            </p>}
        </div>
    </div>
  )
}

export default MainPartEdit