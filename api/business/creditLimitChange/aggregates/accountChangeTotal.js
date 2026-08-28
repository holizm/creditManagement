[
    { $match: { creditAccount } },
    {
        $group: {
            _id: null,
            total: {
                $sum: {
                    $subtract: [
                        '$newLimit',
                        '$previousLimit',
                    ],
                },
            },
        },
    },
]
