/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import styled from 'styled-components'
import { useDispatch } from 'react-redux';
import todos from '../reducers/todos'

const NewTodo = () => {
// Local states
  const [name, setName] = useState('')
  const [urgency, setUrgency] = useState('')
  const [id, setId] = useState(0)

  const dispatch = useDispatch()

  // a function for dealing with new todos
  const HandleSubmit = (event) => {
    event.preventDefault()
    dispatch(todos.actions.addToDo({ name, id, urgency }))
    setName('')
    setUrgency('')
    setId('')
  }

  return (
    <ToDoWrapper>
      <form>
        <label htmlFor="new-todo"> New to-do </label>
        <input
          type="text"
          value={name}
          id={id}
          name="new-todo"
          onChange={(event) => setName(event.target.value)} />
        <label>
            Category:
          <UrgencySelect
            value={urgency}
            onChange={(event) => setUrgency(event.target.value)}>
            <option value="red">Do it ASAP</option>
            <option value="orange">Can wait a little</option>
            <option value="green">Just do it when you have time</option>
          </UrgencySelect>
        </label>
        <button type="submit" onClick={HandleSubmit}>Add</button>
      </form>
    </ToDoWrapper>
  )
}

export default NewTodo

const ToDoWrapper = styled.section`
    background-color: #f2e2c8;
    padding: 10px;
`
const UrgencySelect = styled.select`

`