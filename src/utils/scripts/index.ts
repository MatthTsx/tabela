

export function scale_buttons(index: number){
    const buttons = document.querySelectorAll(".__Btns")
    buttons.forEach((btn) => {
        btn.classList.remove("activate")
        btn.classList.remove("sub-activate")
    })
    buttons[index]?.classList.add('activate')

    buttons[index+1]?.classList.add('sub-activate')

    if(index == 0) return
    buttons[index - 1]?.classList.add("sub-activate")
}

export function disable_buttons(){
    const buttons = document.querySelectorAll(".__Btns")
    buttons.forEach((btn) => {
        btn.classList.remove("activate")
        btn.classList.remove("sub-activate")
    })
}