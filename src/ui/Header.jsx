import styled from 'styled-components'
import { HiMiniBars3CenterLeft } from 'react-icons/hi2'
import HeaderMenu from './HeaderMenu'
import ButtonIcon from './ButtonIcon'
import UserAvatar from '../features/authentication/UserAvatar'
import { screenSizes } from '../utils/constants'
import { useOpenSidebar } from '../context/OpenSidebarContext'

const StyledHeader = styled.header`
  background-color: var(--color-grey-0);
  padding: 1.2rem 4.8rem;
  border-bottom: 1px solid var(--color-grey-100);

  display: flex;
  gap: 2.4rem;
  align-items: center;
  justify-content: space-between;

  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1;
  box-shadow: var(--shadow-sm);

  @media (max-width: ${screenSizes.tablet}) {
    padding: 0.6rem 2.4rem;
  }
`
const StyledDivRight = styled.div`
  display: flex;
  gap: 2.4rem;
  justify-content: flex-end;
`

function Header() {
  const { openSidebar } = useOpenSidebar()

  return (
    <StyledHeader>
      <ButtonIcon onClick={openSidebar}>
        <HiMiniBars3CenterLeft />
      </ButtonIcon>

      <StyledDivRight>
        <UserAvatar />
        <HeaderMenu />
      </StyledDivRight>
    </StyledHeader>
  )
}

export default Header
