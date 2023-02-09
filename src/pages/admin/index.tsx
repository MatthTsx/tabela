import React, { useState } from 'react'
import Criar_Ano from '../../components/admin/Criar_Ano'
import Horarios from '../../components/admin/horarios'
import Mudar_Ano from '../../components/admin/Mudar_Ano'
import Title from '../../layout/Title'
import { api } from '../../utils/api'
import type {NextPage} from "next"

const index: NextPage = () => {
  const Ano = api.Admin.createYear.useMutation()
  const [Tab,setTab] = useState<number>(0)

  const tabs_divs = ["Horarios","Criar Ano","Modificar Ano"]

  return (
    <>
        <Title title={"Tabela Admin"}/>
        <main>
            <div className='w-full h-screen flex flex-col items-center'>

              <div className='w-full h-32 flex justify-center items-center'>
                <div className='flex items-center justify-between space-x-32 shadow-3xl border-b-2 border-white/20
                px-6'>
                  {tabs_divs.map((t,i) => (
                    <button className={`_tab ${Tab == i ?
                    'text-white cursor-default'
                    :'_tab-hover'} transition-all`}
                    onClick={() => setTab(i)}>
                      {t}</button>
                  ))}
                </div>
              </div>
              
              {Tab == 0 ?
              <Horarios/>
              :Tab == 1 ?
              <Criar_Ano/>
              :Tab == 2 &&
              <Mudar_Ano/>
              }
            </div>
        </main>
    </>
  )
}

export default index