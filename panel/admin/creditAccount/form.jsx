import {
    DateTime,
    DialogForm,
    Numeric,
    Text,
} from 'form'

const inputs = <>
    <Text
        customer
        required
    />
    <Text creditTerm />
    <Numeric
        creditLimit
        required
    />
    <Numeric
        balance
        required
    />
    <Text
        currency
        required
    />
    <DateTime
        openedDate
        required
    />
</>

export default <DialogForm inputs={inputs} />
