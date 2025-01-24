import styled, { css } from 'styled-components'

const Heading = styled.h1`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  line-height: 1.5;

  ${(props) =>
    props.as === 'h1' &&
    css`
      font-size: 3rem;
      font-weight: 600;
    `};

  ${(props) =>
    props.as === 'h2' &&
    css`
      font-size: 2rem;
      font-weight: 600;
    `};

  ${(props) =>
    props.as === 'h3' &&
    css`
      font-size: 2rem;
      font-weight: 500;
    `};

  ${(props) =>
    props.as === 'h4' &&
    css`
      font-size: 3rem;
      font-weight: 600;
      text-align: center;
    `};

  /* button popover */
  & svg {
    font-size: 2.8rem;
    color: var(--color-brand-600);
  }

  & span:first-of-type {
    display: flex;
    align-items: center;
  }
`
export default Heading
