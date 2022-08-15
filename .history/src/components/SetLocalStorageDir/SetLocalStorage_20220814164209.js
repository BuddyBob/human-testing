import React from 'react'

export default function SetLocalStorage(){

    console.log(localStorage)

    // new users
    // if (localStorage.getItem('returning_user') == null){
    //     console.log('new user')
    //     localStorage.setItem('returning_user', true)
        localStorage.setItem('games',JSON.stringify({'reflex':{'times':[1,2,3],'average':0}}))
        let times = localStorage.getItem('games')
        console.log(JSON.parse(times))
    }


    return(
        <></>
    )
}
