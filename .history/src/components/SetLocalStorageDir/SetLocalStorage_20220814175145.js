import React from 'react'

export default function SetLocalStorage(){


    // new users
    if (localStorage.getItem('returning_user') == null){
        console.log('new user')
        localStorage.setItem('returning_user', true)

        //sets default values for new users
        localStorage.setItem('games',JSON.stringify({reflex:{times:[1,2,3],average:0}}))


    }
    return(
        <></>
    )
}
