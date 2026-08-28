[
    { $match: { creditAccount } },
    {
        $group: {
            _id: null,
            total: { $sum: '$amount' },
        },
    },
]
