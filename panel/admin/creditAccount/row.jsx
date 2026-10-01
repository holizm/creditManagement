export default item => <>
    <td>{item.customer?.title}</td>
    <td>{item.creditLimit}</td>
    <td>{item.balance}</td>
    <td>{item.availableCredit}</td>
    <td>{item.state?.title}</td>
</>
