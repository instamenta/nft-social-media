import { useState } from "react"
import "./FormInput.css"
export const FormInput = (props) => {
    const [focused, setFocused] = useState(false)
    const {label, errorMessage, onChange, id, ...inputProps} = props

    const handleFocus = ( e ) => {
        setFocused(true)
    }
    return(
        <div className="formInput">
            <label for={props.name}>{label}</label>
            <input 
            {...inputProps}
            onChange={onChange}
            onBlur={handleFocus}
            onFocus={()=>inputProps.name ==="confirmPassword" && setFocused(true)}
            focused={focused.toString()}
            ></input>
            <span>{errorMessage}</span>
        </div>
    )
}
