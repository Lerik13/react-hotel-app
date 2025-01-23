import styled, { css } from 'styled-components'
import Logo from './Logo'
import MainNav from './MainNav'
import { useOpenSidebar } from '../context/OpenSidebarContext'
//import Uploader from '../data/Uploader'

const transform = {
  open: css`
    transform: translate(0);
  `,

  closed: css`
    transform: translate(-100%);
  `,
}

const StyledSidebar = styled.aside`
  background-color: var(--color-grey-0);
  padding: 3.2rem 2.4rem;
  border-right: 1px solid var(--color-grey-100);

  display: grid;
  grid-template-rows: auto 1fr;
  grid-template-columns: 1fr;
  gap: 2rem;
  width: 26rem;
  height: 100%;
  box-shadow: var(--shadow-md);

  position: fixed;
  z-index: 10;
  transition: ease-in-out 0.4s;
  ${(props) => transform[props.transform]}
`

function Sidebar() {
  const { isSidebarOpen, sidebarRef } = useOpenSidebar()

  return (
    <StyledSidebar
      ref={sidebarRef}
      transform={isSidebarOpen ? 'open' : 'closed'}
    >
      <Logo />
      <MainNav />

      {/* <Uploader /> */}
    </StyledSidebar>
  )
}

export default Sidebar
