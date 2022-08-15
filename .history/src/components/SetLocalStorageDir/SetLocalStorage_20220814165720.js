import React from 'react'

export default function SetLocalStorage(){


    // new users
    if (localStorage.getItem('returning_user') == null){
        console.log('new user')
        localStorage.setItem('returning_user', true)
        localStorage.setItem('games',JSON.stringify({reflex:{times:[1,2,3],average:0}}))
        let games = localStorage.getItem('games')
        JSON.parse(games).reflex.average = 4
        localStorage.setItem('games', JSON.stringify(games))
        console.log(localStorage.getItem('games'))


    return(
        <></>
    )
}
