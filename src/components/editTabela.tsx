import React from 'react'


interface Props{
    id: String,
    day: String,
}

function EditTabela({ day, id }:Props) {
    

  return (
    <div className='h-[30rem] w-full flex bg-gray-800/20'>
        <div className='bg-gray-800/20 h-full w-48 p-2 flex flex-col'>
            {day}
        </div>
    </div>
  )
}

export default EditTabela