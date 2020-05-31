import styled from 'styled-components'

export const Button = styled.button`
  background: ${(props) => (props.primary ? '#0070f3' : 'white')};
  color: ${(props) => (props.primary ? 'white' : '#0070f3')};
  font-size: 1em;
  padding: 0.3em 1.5em;
  border: 2px solid #0070f3;
  border-radius: 3px;
  margin-bottom: 10px;
  cursor: pointer;
`
