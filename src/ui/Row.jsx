import styled, { css } from 'styled-components'
import { screenSizes } from '../utils/constants'

const Row = styled.div`
  display: flex;

  ${(props) =>
    props.type === 'horizontal' &&
    css`
      justify-content: space-between;
      align-items: center;

      @media (max-width: ${screenSizes.tablet}) {
        flex-direction: column;
        gap: 1.8rem;

        min-width: 30rem;
      }
    `}

  ${(props) =>
    props.type === 'vertical' &&
    css`
      flex-direction: column;
      gap: 1.6rem;
    `}

  ${(props) =>
    props.type === 'form' &&
    css`
      align-items: center;
      font-size: 3rem;
      padding: 1.6rem 1.2rem;
      gap: 1.6rem;
      background-color: var(--color-blue-100);
      border: 1px solid var(--color-grey-100);
      border-radius: var(--border-radius-md);
      box-shadow: var(--shadow-md);

      @media (max-width: ${screenSizes.tablet}) {
        flex-direction: column;
        gap: 0.8rem;
      }

      & .button-back {
        font-size: 1.8rem;
        display: flex;
        align-items: flex-start;
        justify-self: flex-start;
        align-items: flex-start;

        @media (max-width: ${screenSizes.tablet}) {
          place-self: flex-start;
        }
      }
    `}
`

Row.defaultProps = {
  type: 'vertical',
}

export default Row
