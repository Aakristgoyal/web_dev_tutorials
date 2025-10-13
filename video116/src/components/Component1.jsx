import React from 'react'
import { useContext } from 'react'
import {counterContext} from '../context/Context'
const Component1 = () => {
    const {count}=useContext(counterContext)
    return (
        <div>
        Component1 {count}
        </div>
    )
}

export default Component1
