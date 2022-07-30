/** @format */

import React from 'react'
import imageTest from '../assets/test.png'

export const Test = React.memo(() => {
    return (
        <div>
            <p>hello react</p>
            <img src={imageTest}></img>
        </div>
    )
})

Test.displayName = 'Test'
