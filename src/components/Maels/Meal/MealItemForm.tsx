import { useRef, useState } from 'react';
import Input from '../../UI/Input';
import classes from './MealItemForm.module.css'

interface MealItemFormProps {id: string, onAddItem: (amount: number) => void}

const MealItemForm = ({id, onAddItem}: MealItemFormProps) => {
  const [isFormValid, setIsFormValid] = useState(true);
  const inputRef = useRef<HTMLInputElement>(null)

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const inputValue = inputRef.current?.value

    if (!inputValue || inputValue?.trim().length === 0 || +inputValue < 0 || +inputValue > 5) {
      setIsFormValid(false)
      return
    }

    onAddItem(+inputValue)
  }

  return ( <form className={classes.form} onSubmit={submitHandler}>
    <Input label='Amount' input={{
      id,
      type: 'number',
      min: 1,
      max: 10,
      step: 1,
      defaultValue: 1
    }}
      ref={inputRef}
    />
    <button>Add</button>
    {isFormValid && <p>Please enter value between 1 and 5</p>}
  </form> )
}
 
export default MealItemForm