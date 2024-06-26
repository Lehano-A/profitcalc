import styled from 'styled-components'
import StyledInputRange from '../../../styled/StyledInputRange'
import { forwardRef, useEffect, useState } from 'react'

const StyledBoxInputRange = styled.div`
  position: relative;
  z-index: 5;
  height: 38px;
`

const InputRangeElement = styled(StyledInputRange)`
  width: 100%;
  background: transparent;
  z-index: 1;

  @media (min-width: 480px) {
    min-width: 220px;
  }

  @media (min-width: 640px) {
    min-width: 320px;
  }
`

const PseudoTrack = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 10px;
  width: 100%;
  border-radius: 30px;
  background-image: ${(props) =>
    `linear-gradient(90deg, ${props.theme.palette.inputRange.gradient.start} ${props.$xCoord}%, ${props.theme.palette.inputRange.gradient.end} 0)`};
`

const InputRange = forwardRef(function InputRange(
  { settings, setCurrentValueInputInvestmentPeriod, setInputNumberValue, required = false },
  ref,
) {
  const { value, min = 0, max = 100 } = settings || {}

  const [xCoord, setXCoord] = useState(getXCoord(value))

  useEffect(() => {
    value === '' ? setXCoord(0) : setXCoord(getXCoord(value))
  }, [value])

  function handleOnChange(e) {
    const value = Number(e.target.value)

    setXCoord(getXCoord(value))

    setCurrentValueInputInvestmentPeriod && setCurrentValueInputInvestmentPeriod(value)
    setInputNumberValue && setInputNumberValue(value)
  }

  function handleOnFocus() {
    ref.current.focus()
  }

  function getXCoord(currentValue) {
    return ((currentValue - min) / (max - min)) * 100
  }

  return (
    <StyledBoxInputRange>
      <InputRangeElement
        onFocus={handleOnFocus}
        ref={ref}
        {...settings}
        onChange={handleOnChange}
        type='range'
        required={required}
      />

      <PseudoTrack $xCoord={xCoord} defaultValue={value} min={min} max={max} />
    </StyledBoxInputRange>
  )
})

export default InputRange
