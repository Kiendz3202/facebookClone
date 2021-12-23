import { useState } from "react"



const useInput = (handleValid) => {
    const [enteredInput, setEnteredInput] = useState('')
    const [isTouched, setIstouch] = useState(false)

    const enteredIsValid = handleValid(enteredInput)
    const hasError = !enteredIsValid && isTouched

    const handleInput = (event) => {
        setIstouch(false)
        setEnteredInput(event.target.value)
    }
    const handleBlur = () => {
        setIstouch(true)
    }
    const reset = () => {
        setEnteredInput('')
        setIstouch(false)
    }


    return {
        enteredInput,
        isTouched,
        enteredIsValid,
        hasError,
        handleInput,
        handleBlur,
        reset
    }
}


export default useInput