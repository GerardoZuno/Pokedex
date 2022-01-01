import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'



const useDebounce = (input: string, time: number) => {    

    const [debouncedValue, setdebouncedValue] = useState('')


    useEffect(() => {

    const timeout =    setTimeout(() => { 
          setdebouncedValue(input)
        }, time);
        return () => {
            clearTimeout(timeout)
        }
    }, [input])


    return {
        debouncedValue
    }    
}

export default useDebounce
