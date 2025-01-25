import styled, { css } from 'styled-components'
import { screenSizes } from '../utils/constants'

const StyledFormRow = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 24rem 1fr 1fr;
  gap: 2.4rem;
  padding: 1.2rem 0;

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
  }

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }

  ${(props) =>
    props.isright &&
    css`
      display: flex;
      justify-content: flex-end;
      gap: 1.2rem;
    `}

  @media (max-width: ${screenSizes.laptop}) {
    grid-template-columns: 1fr 1.3fr;
  }
  @media (max-width: ${screenSizes.tablet}) {
    grid-template-columns: 1fr;
    gap: 0.5rem;
  }
`

const Label = styled.label`
  font-weight: 500;
`

const Error = styled.span`
  font-size: 1.4rem;
  color: var(--color-red-700);
`

function FormRow({ label, error, children, isright = false }) {
  return (
    <StyledFormRow isright={isright}>
      {label && <Label htmlFor={children?.props?.id}>{label}</Label>}
      {children}
      {error && <Error>{error}</Error>}
    </StyledFormRow>
  )
}

FormRow.defaultProps = {
  isright: false,
}

export default FormRow
