import SortBy from '../../ui/SortBy'
import Filter from '../../ui/Filter'
import TableOperations from '../../ui/TableOperations'

import { getToday } from '../../utils/helpers'

function GuestTableOperations() {
  return (
    <TableOperations>
      <Filter
        filterField="bookings.startDate"
        options={[
          { value: 'all', label: 'All' },
          {
            value: `${getToday()}`,
            label: 'Has upcoming bookings',
          },
        ]}
      />

      <SortBy
        options={[
          { value: 'fullName-asc', label: 'Sort by Name (A-Z)' },
          { value: 'fullName-desc', label: 'Sort by Name (Z-A)' },
          { value: 'id-asc', label: 'Sort by ID# (asc)' },
          { value: 'id-desc', label: 'Sort by ID# (desc)' },
          { value: 'nationalID-asc', label: 'Sort by National ID# (asc)' },
          { value: 'nationalID-desc', label: 'Sort by National ID# (desc)' },
        ]}
      />
    </TableOperations>
  )
}

export default GuestTableOperations
