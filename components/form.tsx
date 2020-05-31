import styled from 'styled-components'
import { connect, useStore } from 'react-redux'
import { useState } from 'react'
import { sendPost } from '../action'

const Field = styled.div`
  display: block;
  margin-bottom: 0.5rem;
`

const Label = styled.label`
  display: block;
`

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: palevioletred;
  color: white;

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`

const Form = (props: any) => {
  const { sendPost } = props
  const [title, setTilte] = useState('')
  const [text, setText] = useState('')

  const handlerTitle = (event) => {
    setTilte(event.target.value)
  }
  const handlerText = (event) => {
    setText(event.target.value)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    sendPost(title, text)
    setTilte('')
    setText('')
  }

  return (
    <form onSubmit={handleSubmit}>
      Add new post
      <Field>
        <Label htmlFor="title">Title</Label>
        <input type="text" id="title" value={title} onChange={handlerTitle} />
      </Field>
      <Field>
        <Label htmlFor="text">Text</Label>
        <textarea id="text" value={text} onChange={handlerText} />
      </Field>
      <Button type="submit">Add</Button>
    </form>
  )
}

export default connect(null, { sendPost })(Form)
