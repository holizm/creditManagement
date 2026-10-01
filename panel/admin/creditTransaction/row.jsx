import { DateTime } from 'list'

export default item => <>
    <td>{item.creditAccount?.customer?.title}</td>
    <td>{item.creditTransactionType}</td>
    <DateTime value={item.transactionDate} />
    <td>{item.amount}</td>
    <td>{item.balance}</td>
</>
