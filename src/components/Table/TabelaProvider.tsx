import React, { useState } from 'react'
import { api } from '../../utils/api'
import EditTabela from './editTabela'
import Tabela from './Tabela'

function TabelaProvider({editable}:{editable:Boolean}) {
    const {
        data: anos,
        isLoading: anos_loading
    } = api.Commons.GetAnos.useQuery()
    
    
    const [YearSelected, setYearSelected] = useState("")
    const {data: horarios} = api.Commons.GetTable.useQuery({ id:YearSelected })

    const [selectedDay,setSelectedDay] = useState<String>("segunda")
    const [editMode, setEditMode] = useState<Boolean>(false)

  return (
    <div className='w-[75%] flex flex-col items-center'>
        {editMode && YearSelected!="" ? 
        <EditTabela id={YearSelected as string} day={selectedDay as string}/>
        :
        <>
        <div className='h-24 flex w-[65%] gap-1 flex-wrap'>
            {anos_loading ? <p>Loading</p>
            :anos?.length == 0? <p>unable to find the grades</p>
            :anos?.map((ano,i) => (
                <button key={i} className={`px-4 p-1 bg-gray-500/20 opacity-20 text-sm h-10
                ${ano.id == YearSelected ?
                    'opacity-90 scale-110' : 'hover:scale-105 hover:opacity-60'}
                    transition-all font-semibold tracking-wider`}
                onClick={() => {setEditMode(false);setYearSelected(ano.id)}}>
                    {ano.ano}
                </button>
            ))}
        </div>
        <Tabela data={horarios} editable={editable} id={YearSelected}
        func={editable ? setEditMode : null} func2={editable ? setSelectedDay : null}/>
        </>
        }
    </div>
  )
}

export default TabelaProvider