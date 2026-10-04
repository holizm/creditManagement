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
        creditAccount
        required
    />
    <Select
        creditTransactionType
        options={[
            'charge',
            'payment',
            'refund',
            'adjustment',
            'writeOff',
        ]}
        placeholder='transactionType'
        required
    />
    <DateTime
        required
        transactionDate
    />
    <Numeric
        amount
        required
    />
    <LongText description />
</>

export default <DialogForm inputs={inputs} />
