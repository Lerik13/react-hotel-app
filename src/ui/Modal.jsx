import { useState, cloneElement, createContext, useContext } from 'react'
import { createPortal } from 'react-dom'
import { HiXMark } from 'react-icons/hi2'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import { screenSizes } from '../utils/constants'
import { useOutsideClick } from '../hooks/useOutsideClick'

const modalVariants = {
  hidden: {
    y: '-100dvh',

    opacity: 0,
  },
  visible: {
    y: '0',

    opacity: 1,
    transition: {
      duration: 4,
      type: 'spring',
      damping: 25,
      stiffness: 300,
    },
  },
  exit: {
    y: '100vh',
    opacity: 0,
  },
}

const StyledModal = styled(motion.div)`
  position: fixed;
  top: 10dvh;
  left: 30dvw;
  z-index: 100;
  max-width: max-content;
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-lg);
  padding: 3.2rem 4rem;
  //top: 50%;
  //left: 50%;
  //transform: translate(-50%, -50%);
  //transition: all 0.5s;
  overflow: auto;

  @media (max-width: ${screenSizes.mobile}) {
    top: 5dvh;
    left: 0dvw;
  }
  @media (max-width: ${screenSizes.laptop}) {
    top: 5dvh;
    left: 5dvw;
  }
`

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: var(--backdrop-color);
  backdrop-filter: blur(4px);
  z-index: 1000;
  transition: all 0.5s;
`

const Button = styled.button`
  background: none;
  border: none;
  padding: 0.4rem;
  border-radius: var(--border-radius-sm);
  transform: translateX(0.8rem);
  transition: all 0.2s;
  position: absolute;
  top: 1.2rem;
  right: 1.9rem;

  &:hover {
    background-color: var(--color-grey-100);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    /* Sometimes we need both */
    /* fill: var(--color-grey-500);
    stroke: var(--color-grey-500); */
    color: var(--color-grey-500);
  }
`

const ModalContext = createContext()

function Modal({ children }) {
  const [openName, setOpenName] = useState('')

  const close = () => setOpenName('')
  const open = setOpenName

  return (
    <ModalContext.Provider value={{ openName, open, close }}>
      {children}
    </ModalContext.Provider>
  )
}

function Open({ children, opens: opensWindowName }) {
  const { open } = useContext(ModalContext)

  return cloneElement(children, { onClick: () => open(opensWindowName) })
}

function Window({ children, name }) {
  const { openName, close } = useContext(ModalContext)

  const ref = useOutsideClick(close)

  if (name !== openName) return null

  return createPortal(
    <Overlay>
      <StyledModal
        ref={ref}
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={modalVariants}
        transition={{ duration: 1 }}
      >
        <Button onClick={close}>
          <HiXMark />
        </Button>

        <div>{cloneElement(children, { onCloseModal: close })}</div>
      </StyledModal>
    </Overlay>,
    document.body
  )
}

Modal.Open = Open
Modal.Window = Window

export default Modal
