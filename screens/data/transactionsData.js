const transactionTypeDefaultData=[
    { label: "Income", value: "Income" },
    { label: "Expense", value: "Expense" },
    { label: "Transfer", value: "Transfer" },
    { label: "Investment", value: "Investment" },
    { label: "Other", value: "Other" }
  ];

const incomeCategoryDefaultData=[
    { label: "Salary", value: "Salary" },
    { label: "Investment return", value: "Investment return" },
    { label: "Freelancing", value: "Freelancing" },
    { label: "Other", value: "Other" },
    { label: "Bussiness", value: "Bussiness" },
]

const expenseCategoryDefaultData=[
    { label: "Heathcare", value: "Heathcare" },
    { label: "Dineout", value: "Dineout" },
    { label: "Vehicle Maintanance", value: "Vehicle Maintanance" },
    { label: "Other", value: "Other" },
]

const investmentCategoryDefaultData=[
    { label: "Stcoks", value: "Stocks" },
    { label: "Mutual funds", value: "Mutual funds" },
    { label: "Policies", value: "Policies" },
    { label: "FD/RD", value: "FD/RD" },
    { label: "Other", value: "Other" }
]

const transactionModeDefaultData=[
    { label: "Cash", value: "Cash" },
    { label: "Credit", value: "Credit" },
    { label: "Debit", value: "Debit" },
    { label: "UPI", value: "UPI" },
    { label: "Net Banking", value: "Net Banking" },
    { label: "Other", value: "Other" },

]
  export { transactionTypeDefaultData,
     incomeCategoryDefaultData, expenseCategoryDefaultData, 
    investmentCategoryDefaultData, transactionModeDefaultData}