[
    { $match: { currency } },
    {
        $group: {
            _id: null,
            availableCredit: { $sum: '$availableCredit' },
            balance: { $sum: '$balance' },
            creditLimit: { $sum: '$creditLimit' },
        },
    },
]
