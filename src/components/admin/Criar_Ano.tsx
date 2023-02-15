import React, { useState } from 'react'
import { api } from '../../utils/api'
import type { NextPage } from 'next'
import { letters, Years } from '../../constants'

const Criar_Ano: NextPage = () => {
  const {isLoading, mutate: Create_Ano} = api.Admin.createYear.useMutation()
  const [YearSelected,setYear] = useState("2")
  const [Letter, setLetter] = useState("A")

  return (
    <div className='w-[50%]'>
      {isLoading? <p>Loading</p>
      :<div className='space-y-4 bg-gray-800/20 p-4'>
        
        <div className='flex items-center space-x-1 w-full shadow-sm'>
          {Years.map((y,i) => (
            <button key={i} className={`px-4 p-1 bg-gray-500/20 opacity-20 text-sm ${y.for == YearSelected ?
            'opacity-90 scale-110' : 'hover:scale-105 hover:opacity-60'}
            transition-all font-semibold tracking-wider`}
            onClick={() => setYear(y.for)}>
              {y.name}
            </button>
          ))}
        </div>
        <div className='flex'>
          <p className='text-sm text-white/80'>Letra referente ao curso do ano:</p>
          <input type={'text'} onChange={(e) => {
            setLetter(e.target.value)
          }} maxLength={1} placeholder={"Digite a letra aqui"}
          className={"_input"}/>
        </div>
        
        <p>
          Ano: {YearSelected}º{Letter.toLocaleUpperCase()}
        </p>
        <button className='underline text-white/50 hover:scale-110 transition-all'
        onClick={() => {
          if(!letters.includes(Letter.toLocaleLowerCase())) return alert(`${Letter} não é uma letra valida`)
          Create_Ano({name:YearSelected+Letter})
        }}>
          Criar ano
        </button>
      </div>}
    </div>
  )
}

export default Criar_Ano