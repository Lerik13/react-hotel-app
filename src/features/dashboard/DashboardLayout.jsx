import styled from 'styled-components'
import Spinner from '../../ui/Spinner'
import { useRecentBookings } from './useRecentBookings'
import { useRecentStays } from './useRecentStays'
import { useCabins } from '../cabins/useCabins'
import Stats from './Stats'
import SalesChart from './SalesChart'
import DurationChart from './DurationChart'
import TodayActivity from '../check-in-out/TodayActivity'
import { screenSizes } from '../../utils/constants'

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;

  @media (max-width: ${screenSizes.tablet}) {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
`

function DashboardLayout() {
  const { bookings, isLoading: isLoading1 } = useRecentBookings()
  const {
    //stays,
    confirmedStays,
    isLoading: isLoading2,
    numDays,
  } = useRecentStays()

  const { cabins, isLoading: isLoading3 } = useCabins()

  if (isLoading1 || isLoading2 || isLoading3) return <Spinner />

  //console.log(bookings)

  return (
    <StyledDashboardLayout>
      <Stats
        bookings={bookings}
        confirmedStays={confirmedStays}
        numDays={numDays}
        cabinCount={cabins.length}
      />

      <TodayActivity />

      <DurationChart confirmedStays={confirmedStays} />

      <SalesChart bookings={bookings} numDays={numDays} />
    </StyledDashboardLayout>
  )
}

export default DashboardLayout
