import {
    DateTime,
    List,
} from 'list'
import Form from './form'

const headers = <>
    <th start>creditManagementCreditAccount</th>
    <th>coreTransactionType</th>
    <th>coreTransactionDate</th>
    <th>creditManagementAmount</th>
    <th>creditManagementBalance</th>
</>

const row = item => <>
    <td>{item.creditAccount?.customer?.title}</td>
    <td>{item.creditTransactionType}</td>
    <DateTime value={item.transactionDate} />
    <td>{item.amount}</td>
    <td>{item.balance}</td>
</>

export default <List
    create={Form}
    hasEdit
    headers={headers}
    row={row}
/>
