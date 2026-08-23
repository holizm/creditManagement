export default ({ creditAccount }) => <dl class='summary'>
    <dt class='balance'>{creditAccount.balance}</dt>
    <dd class='limit'>{creditAccount.creditLimit}</dd>
    <dd class='availableCredit'>{creditAccount.availableCredit}</dd>
</dl>
