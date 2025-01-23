import { motion } from 'framer-motion'
import styled from 'styled-components'
import { useWindowSize } from '../hooks/useWindowSize'
import { windowSizes } from '../utils/constants'

const StyledButtonIcon = styled(motion.button)`
  background: none;
  border: none;
  padding: 0.6rem;
  border-radius: var(--border-radius-sm);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  //transition: all 0.2s;

  &:hover {
    background-color: var(--color-grey-100);
  }

  & svg {
    width: 2.2rem;
    height: 2.2rem;
    color: var(--color-brand-600);
  }
`

function ButtonIcon({ onClick, children }) {
  const { width } = useWindowSize()

  return (
    <StyledButtonIcon
      whileHover={{ scale: 1.2 }}
      whileTap={width >= windowSizes.tablet ? { scale: 1 } : { scale: 1.2 }}
      transition={
        width >= windowSizes.tablet
          ? { duration: 0.3, type: 'spring', stiffness: 250 }
          : { duration: 0.3, type: 'spring', stiffness: 300 }
      }
      onClick={onClick}
    >
      {children}
    </StyledButtonIcon>
  )
}

export default ButtonIcon
