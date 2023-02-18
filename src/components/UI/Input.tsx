import classes from './Input.module.css'
import { forwardRef } from 'react'

interface Input {
  id: string,
  type: string,
  min?:number,
  max?:number,
  step?: number,
  defaultValue?:number
}

interface InputProps {
  label: string, input: Input
}

const Input = forwardRef<HTMLInputElement, InputProps>(({label, input}, ref) => {
  return ( <div className={classes.input}>
    <label htmlFor={input.id}>{label}</label>
    <input  ref={ref} {...input} />
  </div> );
})
 
export default Input;