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
        placeholder='creditManagementTransactionType'
        property='creditTransactionType'
        required
    />
    <DateTime
        placeholder='creditManagementTransactionDate'
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
