import React from 'react'

export default function SetLocalStorage(){

    console.log(localStorage)

    // new users
    if (localStorage.getItem('returning_user') == null){
        console.log('new user')
        localStorage.setItem('returning_user', true)
        localStorage.setItem('games',JSON.stringify({'reflex':{'times':[],'average':0}}))
        console.log(localStorage)
    }


    return(
        <></>
    )
}
