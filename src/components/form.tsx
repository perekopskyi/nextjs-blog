import styled, { AnyStyledComponent } from 'styled-components'
import { connect } from 'react-redux'
import { useState } from 'react'

import { sendPost } from '../action'
import { Button } from './button'
import { Section } from './section'

const Field = styled.div`
  display: block;
  margin-bottom: 0.8rem;
  width: 100%;
`

const Label = styled.label`
  display: block;
`

const StyledInput: AnyStyledComponent = styled.input`
  display: block;
  width: 100%;
  padding: 7px;
  font-size: 16px;
  border-width: 1px;
  border-color: ${(props: any) => (props.error ? 'red' : '#cccccc')};
  background-color: #ffffff;
  color: #000000;
  border-style: solid;
  border-radius: 5px;
  box-shadow: 1px 1px 5px rgba(66, 66, 66, 0.3);
  text-shadow: 0px 0px 2px rgba(66, 66, 66, 0.22);
  outline: none;
`

const Textarea: AnyStyledComponent = styled.textarea`
  display: block;
  width: 100%;
  padding: 7px;
  font-size: 16px;
  border-width: 1px;
  border-color: ${(props: any) => (props.error ? 'red' : '#cccccc')};
  background-color: #ffffff;
  color: #000000;
  border-style: solid;
  border-radius: 5px;
  box-shadow: 1px 1px 5px rgba(66, 66, 66, 0.3);
  text-shadow: 0px 0px 2px rgba(66, 66, 66, 0.22);
  outline: none;
`

const Form = (props: any) => {
  const { sendPost } = props
  const [title, setTilte] = useState('')
  const [text, setText] = useState('')
  const [error, setError] = useState(false)

  const handlerTitle = (event: any) => {
    setTilte(event.target.value)
    if (event.target.value.length > 0) {
      setError(false)
    }
  }
  const handlerText = (event: any) => {
    setText(event.target.value)
    if (event.target.value.length > 0) {
      setError(false)
    }
  }

  const handleSubmit = async (event: any) => {
    event.preventDefault()
    if (title.length === 0 || text.length === 0) {
      setError(true)
      alert('All fields must be filled')
    } else {
      sendPost(title, text)
      setTilte('')
      setText('')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Section>
        <p>Add new post</p>
      </Section>
      <Field>
        <Label htmlFor="title">Title</Label>
        <StyledInput
          type="text"
          id="title"
          value={title}
          onChange={handlerTitle}
          error={error}
        />
      </Field>
      <Field>
        <Label htmlFor="text">Text</Label>
        <Textarea
          id="text"
          rows={5}
          value={text}
          onChange={handlerText}
          error={error}
        />
      </Field>
      <Field>
        <Button primary type="submit">
          Add post
        </Button>
      </Field>
    </form>
  )
}

export default connect(null, { sendPost })(Form)
