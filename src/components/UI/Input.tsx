import classes from './Input.module.css'

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

const Input = ({label, input}: InputProps) => {
  return ( <div className={classes.input}>
    <label htmlFor={input.id}>{label}</label>
    <input   {...input} />
  </div> );
}
 
export default Input;