// Lead model
// this describes a 'lead' in prospecteye
ProspectEye.Lead = Backbone.Model.extend({

    defaults:{
        companyName: '',
        orgNr: '55XXXX-XXXX',
        turnover: 0,
        lastVisit: '2013-01-01: 12:12:12',
        phone: '070-2337384',
        countryCode: 'SE',
        achivements: {'1': {name: 'Laddat ner prislista'},
            '2': {name: 'Efterfrågat demo'},
            '3': {name: 'Vill ha nyhetbrev'},
            '4': {name: 'Kontaktat oss'}
        },
        creditValue: 'AAA',
        importantPeople: [
            {id: 1, name: 'Karl Karlsson', title: 'CEO'}
        ],
        accumulateValue: 0,
        totalVisits: 0
    }

});

// Lead Collection
// this is a collection of leads.
ProspectEye.LeadCollection = Backbone.Collection.extend({

    model: ProspectEye.Lead

});

var _leads = new ProspectEye.LeadCollection([
    new ProspectEye.Lead({companyName: 'ProspectEye AB',orgnr: '552343-3212',turnover: 3000, accumulateValue: 43, totalVisits: 3}),
    new ProspectEye.Lead({companyName: 'Kalles Kaviar',orgnr: '552343-3212',turnover: 20000, accumulateValue: 79, totalVisits: 6,
        achivements: {
            '2': {name: 'Efterfrågat demo'},
            '3': {name: 'Vill ha nyhetbrev'},
            '4': {name: 'Kontaktat oss'}}
        }),
    new ProspectEye.Lead({companyName: 'Stadium',orgnr: '552343-3212',turnover: 3000, accumulateValue: 33, totalVisits: 10}),
    new ProspectEye.Lead({companyName: 'Expressen',orgnr: '552343-3212',turnover: 3000, creditValue: 'AA', achivements: {'1': {name: 'Laddat ner prislista'}}, accumulateValue: 12, totalVisits: 1})
]);