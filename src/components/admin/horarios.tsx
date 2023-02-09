import React from 'react'
import { api } from '../../utils/api'
import Tabela from '../Tabela'

function Horarios() {
    const {
        data: anos,
        isLoading: anos_loading
    } = api.Commons.GetAnos.useQuery()
    console.log(anos)

  return (
    <div className='w-[75%] flex flex-col items-center'>
        <div className='h-24 flex justify-center'>
            {anos_loading ? <p>Loading</p>
            :anos?.length == 0? <p>unable to find the grades</p>
            :anos?.map((ano,i) => (
                <div key={i}>
                    {ano.ano}
                </div>
            ))}
        </div>
        <Tabela/>
    </div>
  )
}

export default Horarios