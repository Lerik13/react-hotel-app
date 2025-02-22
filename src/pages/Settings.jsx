import { HiOutlineAdjustmentsHorizontal } from 'react-icons/hi2'
import Row from '../ui/Row'
import Heading from '../ui/Heading'
import UpdateSettingsForm from '../features/settings/UpdateSettingsForm'

function Settings() {
  return (
    <Row>
      <Heading as="h1">
        <span>
          <HiOutlineAdjustmentsHorizontal />
        </span>
        Update Hotel Settings
      </Heading>
      <UpdateSettingsForm />
    </Row>
  )
}

export default Settings
