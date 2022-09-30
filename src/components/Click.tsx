import React, {useState} from 'react'

export default function Clicker() {
    const [value, setValue] = useState(0)

    return (
        <>
            <div>{ value }</div>
            <button onClick={() => setValue(prev => prev + 1)}>Click</button>
        </>
    )

}