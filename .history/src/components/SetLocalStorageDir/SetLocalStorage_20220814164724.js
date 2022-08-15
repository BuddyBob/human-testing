import React from 'react'

export default function SetLocalStorage(){

    console.log(localStorage)

    // new users
    // if (localStorage.getItem('returning_user') == null){
    //     console.log('new user')
    //     localStorage.setItem('returning_user', true)
        localStorage.setItem('games',JSON.stringify({'reflex':{'times':[1,2,3],'average':0}}))
        let reflex = localStorage.setItem('games')
        JSON.parse(reflex).reflex.average = 4
        localStorage.setItem('games', JSON.stringify(reflex))
        console.log(localStorage)


    return(
        <></>
    )
}
