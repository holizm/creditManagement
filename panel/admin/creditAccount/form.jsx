import {
    DateTime,
    DialogForm,
    Numeric,
    Text,
} from 'form'

const inputs = <>
    <Text
        placeholder='customer'
        property='customer'
        required
    />
    <Text
        placeholder='creditTerm'
        property='creditTerm'
    />
    <Numeric
        placeholder='creditLimit'
        property='creditLimit'
        required
    />
    <Numeric
        placeholder='balance'
        property='balance'
        required
    />
    <Text
        placeholder='currency'
        property='currency'
        required
    />
    <DateTime
        placeholder='openedDate'
        property='openedDate'
        required
    />
</>

export default <DialogForm inputs={inputs} />
