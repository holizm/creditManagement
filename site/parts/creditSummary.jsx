export default ({ creditAccount }) => <dl class='creditSummary'>
    <dt class='balance'>{creditAccount.balance}</dt>
    <dd class='creditLimit'>{creditAccount.creditLimit}</dd>
    <dd class='availableCredit'>{creditAccount.availableCredit}</dd>
</dl>
