import styled from 'styled-components'

const Fieldset = styled.fieldset`
  border: none;
  padding: 0;
  margin: 0;
`

const Radio = styled.input`
  position: absolute;
  opacity: 0;
  margin: 0;
`

const Label = styled.label`
  font-size: 18px;
  font-weight: 700;
  padding: 0 3px 6px 3px;
  letter-spacing: 0.06px;
  text-transform: uppercase;

  &:not(:last-child) {
    margin: 0 14px 0 0;
  }

  &:hover {
    color: ${(props) => props.theme.palette.primary};
  }

  &:active {
    color: ${(props) => props.theme.palette.primary};
  }

  &:focus {
    color: ${(props) => props.theme.palette.primary};
  }

  &:has(${Radio}:checked) {
    color: ${(props) => props.theme.palette.primary};
    border-bottom: 3px solid ${(props) => props.theme.palette.primary};
  }
`

function MonetaryUnit() {
  const namesUnits = ['BTC', 'UAH', 'RUB', 'EUR', 'USD']

  return (
    <Fieldset id='monetaryUnit'>
      {namesUnits.map((name, id) => (
        <Label key={id}>
          <Radio type='radio' name='monetaryUnit' />

          {name}
        </Label>
      ))}
    </Fieldset>
  )
}

export default MonetaryUnit