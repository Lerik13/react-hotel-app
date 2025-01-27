import { AnimatePresence, motion } from 'framer-motion'
import styled, { css } from 'styled-components'
import { IoCloseSharp } from 'react-icons/io5'
import Logo from './Logo'
import MainNav from './MainNav'
import { useOpenSidebar } from '../context/OpenSidebarContext'
import ButtonIcon from './ButtonIcon'
import { useWindowSize } from '../hooks/useWindowSize'
import Uploader from '../data/Uploader'

const modalVariants = {
  hidden: {
    x: '-100dvw',
    opacity: 0,
  },
  visible: {
    x: '0',
    opacity: 1,
    transition: {
      duration: 4,
      type: 'spring',
      damping: 25,
      stiffness: 300,
    },
  },
  exit: {
    x: '-100dvw',
    opacity: 0,
  },
}

const StyledWrapper = styled(motion.div)`
  position: fixed;
  inset: 0;
  z-index: 10;
  background: rgba(0, 0, 0, 0.4);
`

const StyledSidebar = styled(motion.aside)`
  background-color: var(--color-grey-0);
  padding: 3.2rem 2.4rem;
  border-right: 1px solid var(--color-grey-100);

  display: grid;
  grid-template-rows: auto auto 1fr;
  grid-template-columns: 1fr;
  gap: 2rem;
  width: 26rem;
  height: 100%;
  box-shadow: var(--shadow-md);
  overflow: auto;
`

const StyledButtonWrapper = styled.div`
  display: flex;
  justify-content: right;
`

function SidebarModal({ onClose }) {
  return (
    <StyledWrapper
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <StyledSidebar
        onClick={(e) => e.stopPropagation()}
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={modalVariants}
        transition={{ duration: 1 }}
      >
        <StyledButtonWrapper>
          <ButtonIcon onClick={onClose}>
            <IoCloseSharp />
          </ButtonIcon>
        </StyledButtonWrapper>

        <Logo />
        <MainNav />

        {/* <Uploader /> */}
      </StyledSidebar>
    </StyledWrapper>
  )
}

function Sidebar() {
  const { isSidebarOpen, closeSidebar } = useOpenSidebar()

  return (
    <AnimatePresence>
      {isSidebarOpen && <SidebarModal onClose={closeSidebar} />}
    </AnimatePresence>
  )
}

export default Sidebar
