import React from 'react'
import { api } from '../../utils/api'

interface Props{
    index: number | null,
    name: String,
    id: String
}

function MainPartEdit({ index,name,id }: Props) {
    const {data: mat, isLoading} = api.Commons.GetMaterias.useQuery({ id: id as string })
    console.log(mat)
    if(index == null) return (<div>Null</div>)

  return (
    <div className='w-[51rem] flex flex-col items-center pt-8 gap-y-4'>
        <div className=''>
            <p className='text-green-400 tracking-widest uppercase text-lg'>{name}</p>
        </div>
        <div>
            {mat?.posibleMaterias.length != 0 ?  mat?.posibleMaterias.map((mate, i) => (
                <p key={i}>a</p>
            ))
            :<div>
                Essa turma ainda não tem materias especificadas, vá ao menu modificar Ano para adicionar 
            </div>}
        </div>
    </div>
  )
}

export default MainPartEdit