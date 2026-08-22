import {
    DateTime,
    DialogForm,
    Numeric,
    Text,
} from 'form'

const inputs = <>
    <Text
        placeholder='creditManagementCustomer'
        property='customer'
        required
    />
    <Text
        placeholder='creditManagementCreditTerm'
        property='creditTerm'
    />
    <Numeric
        placeholder='creditManagementCreditLimit'
        property='creditLimit'
        required
    />
    <Numeric
        placeholder='creditManagementBalance'
        property='balance'
        required
    />
    <Text
        placeholder='creditManagementCurrency'
        property='currency'
        required
    />
    <DateTime
        placeholder='creditManagementOpenedDate'
        property='openedDate'
        required
    />
</>

export default <DialogForm inputs={inputs} />
