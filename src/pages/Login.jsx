import styled from 'styled-components'
import Logo from '../ui/Logo'
import Heading from '../ui/Heading'
import { screenSizes } from '../utils/constants'
import LoginForm from '../features/authentication/LoginForm'

const LoginLayout = styled.main`
  min-height: 100dvh;
  display: grid;
  grid-template-columns: 48rem;
  align-content: center;
  justify-content: center;
  gap: 3.2rem;
  background-color: var(--color-grey-50);

  @media (max-width: ${screenSizes.tablet}) {
    grid-template-columns: 1fr;
    padding: 2rem 2.4rem 3.2rem;
    gap: 1.6rem;
  }
`

function Login() {
  return (
    <LoginLayout>
      <Logo />
      <Heading as="h4">Log in to your account</Heading>
      <LoginForm />
    </LoginLayout>
  )
}

export default Login
