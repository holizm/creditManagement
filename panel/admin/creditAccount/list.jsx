import { List } from 'list'
import Form from './form'

const headers = <>
    <th start>creditManagementCustomer</th>
    <th>creditManagementCreditLimit</th>
    <th>creditManagementBalance</th>
    <th>creditManagementAvailableCredit</th>
    <th>stateMachinesState</th>
</>

const row = item => <>
    <td>{item.customer?.title}</td>
    <td>{item.creditLimit}</td>
    <td>{item.balance}</td>
    <td>{item.availableCredit}</td>
    <td>{item.state?.title}</td>
</>

export default <List
    create={Form}
    hasDelete
    hasEdit
    headers={headers}
    row={row}
/>
