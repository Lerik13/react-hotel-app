import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import Header from './Header'
import Sidebar from './Sidebar'
import { screenSizes } from '../utils/constants'

const StyledAppLayout = styled.div`
  //display: grid;
  //grid-template-columns: 26rem 1fr;
  //grid-template-rows: auto 1fr;
  min-height: 100dvh;
  margin-top: 6rem;
  //transition: ease-in-out 0.35s;
  transition: all 0.5s;

  @media (max-width: ${screenSizes.tablet}) {
    margin-top: 4.8rem;
  }
`

const Main = styled.main`
  background-color: var(--color-grey-50);
  padding: 4rem 4.8rem 6.4rem;
  //overflow: scroll;
  overflow: auto;
  min-height: 100dvh;

  @media (max-width: ${screenSizes.tablet}) {
    padding: 2rem 2.4rem 3.2rem;
  }
`

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  @media (max-width: ${screenSizes.tablet}) {
    gap: 1.6rem;
  }
`

function AppLayout() {
  return (
    <StyledAppLayout>
      <Header />
      <Sidebar />
      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>
    </StyledAppLayout>
  )
}

export default AppLayout
