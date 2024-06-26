import styled from 'styled-components'
import { labelMixin } from './mixins/mixins'

const StyledLabel = styled.label`
  ${labelMixin}
  align-self: start;
`

export default StyledLabel
