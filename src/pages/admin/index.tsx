import React from 'react'
import Title from '../../layout/Title'
import { api } from '../../utils/api'

function index() {
    const Ano = api.Admin.createYear.useMutation()

  return (
    <>
        <Title title={"Tabela Admin"}/>
        <main>
            <div>AA</div>
            <button onClick={async () => {
                await Ano.mutate({name:"2D"})
                console.log("azul")
            }}>Criar coisa</button>
        </main>
    </>
  )
}

export default index