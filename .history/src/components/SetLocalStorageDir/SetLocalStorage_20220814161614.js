import React from 'react'

export default function SetLocalStorage(){

    console.log(localStorage)

    #
    if (localStorage.getItem('returning_user') == null){
        console.log('new user')
        localStorage.setItem('returning_user', true)
        
    }


    return(
        <></>
    )
}
