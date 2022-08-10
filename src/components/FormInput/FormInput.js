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
            <label htmlFor={props.name} className="input-label">{label}</label>
            <input 
            className="auth-input"
            {...inputProps}
            onChange={onChange}
            onBlur={handleFocus}
            onFocus={()=>inputProps.name ==="confirmPassword" && setFocused(true)}
            focused={focused.toString()}
            ></input>
            <span className="error-span">{errorMessage}</span>
        </div>
    )
}
