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
        placeholder='creditAccount'
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
        placeholder='transactionType'
        property='creditTransactionType'
        required
    />
    <DateTime
        placeholder='transactionDate'
        property='transactionDate'
        required
    />
    <Numeric
        placeholder='amount'
        property='amount'
        required
    />
    <LongText
        placeholder='description'
        property='description'
    />
</>

export default <DialogForm inputs={inputs} />
