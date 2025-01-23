import { AnimatePresence, motion } from 'framer-motion'
import styled, { css } from 'styled-components'
import { IoCloseSharp } from 'react-icons/io5'
import Logo from './Logo'
import MainNav from './MainNav'
import { useOpenSidebar } from '../context/OpenSidebarContext'
import ButtonIcon from './ButtonIcon'
import { useWindowSize } from '../hooks/useWindowSize'
import { screenSizes, windowSizes } from '../utils/constants'
//import Uploader from '../data/Uploader'

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
  const { width } = useWindowSize()

  return (
    <StyledWrapper
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <StyledSidebar
        onClick={(e) => e.stopPropagation()}
        initial={{ transform: 'translateX(-100%)', opacity: 0 }}
        animate={{ transform: 'translateX(0)', opacity: 1 }}
        exit={{ transform: 'translateX(-100%)', opacity: 0 }}
        transition={{ type: 'spring', stiffness: 400, damping: 25 }}
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
