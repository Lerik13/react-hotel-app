import { HiOutlineHomeModern } from 'react-icons/hi2'
import Row from '../ui/Row'
import Heading from '../ui/Heading'
import CabinTable from '../features/cabins/CabinTable'
import AddCabin from '../features/cabins/AddCabin'
import CabinTableOperations from '../features/cabins/CabinTableOperations'

function Cabins() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">
          <span>
            <HiOutlineHomeModern />
          </span>
          Cabins
        </Heading>
        <CabinTableOperations />
      </Row>
      <Row>
        <CabinTable />

        <AddCabin />
      </Row>
    </>
  )
}

export default Cabins
