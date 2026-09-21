import {
    DateTime,
    DialogForm,
    LongText,
    Numeric,
    Select,
    Text,
} from 'form'

const inputs = <>
    <Text
        placeholder='creditManagementCreditAccount'
        property='creditAccount'
        required
    />
    <Select
        options={[
            'charge',
            'payment',
            'refund',
            'adjustment',
            'writeOff',
        ]}
        placeholder='coreTransactionType'
        property='creditTransactionType'
        required
    />
    <DateTime
        placeholder='coreTransactionDate'
        property='transactionDate'
        required
    />
    <Numeric
        placeholder='creditManagementAmount'
        property='amount'
        required
    />
    <LongText
        placeholder='creditManagementDescription'
        property='description'
    />
</>

export default <DialogForm inputs={inputs} />
