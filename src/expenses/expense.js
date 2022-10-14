const expenseTypes = {
    livingExpense: {fin: 'Elämiskustannus', eng: 'Living expense', swe: 'Levnadskostnad'},
    groceryExpense: {fin: 'Ruokakustannus', eng: 'Grocery expense', swe: 'Matkostnader'},
    subscriptionExpense: {fin: 'Tilauskustannus', eng: 'Subscription expense', swe: 'Prenumerationskostnader'},
    transportationExpense: {fin: 'Liikennekustannus', eng: 'Transportation expense', swe: 'Transportkostnad'},
    hedonisticExpense: {fin: 'Hyvänolon kustannus', eng: 'Hedonistic expense', swe: 'Hedonistisk kostnad'},
    healthcareExpense: {fin: 'Terveyskustannus', eng: 'Healthcare expense', swe: 'Sjukvårdskostnad'},
}

const expenseRecurrences = {
    single: {fin: 'Yksittäinen', eng: 'Single', swe: 'Enda'},
    daily: {fin: 'Päivittäinen', eng: 'Daily', swe: 'Dagligen'},
    weekly: {fin: 'Viikottainen', eng: 'Weekly', swe: 'Varje vecka'},
    monthly: {fin: 'Kuukausittainen', eng: 'Monthly', swe: 'En gång i månaden'},
    yearly: {fin: 'Vuosittainen', eng: 'Annual', swe: 'Årlig'},

}


export  { expenseTypes, expenseRecurrences }