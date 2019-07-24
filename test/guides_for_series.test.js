const assert = require('assert');
const data = require('../data/refs-in-guides-back-linked-full');
const get_guides_from_series = require('../get_guides_for_series');

const get_guides_for_series = require('../get_guides_for_series');

describe('It should return the correct guides', function () {

    describe('for a given series', function () {

        const series = [
            {
                letter_code: 'AB',
                series: 'AB 7',
                guides: {
                    "photographs": "Photographs"
                }
            },
            {
                letter_code: 'AB',
                series: 'AB 5',
                guides: {
                    "architectural-drawings": "Architectural drawings"
                }
            },
            {
                letter_code: 'AB',
                series: 'AB 6',
                guides: {}
            },
            {
                letter_code: 'AX',
                series: 'AX 14',
                guides: {
                    "government-datasets": "Government datasets"
                }
            },
            {
                letter_code: 'J',
                series: 'J 89',
                guides: {
                    "chancery-cases-supreme-court-after-1875": "Chancery cases after 1875"
                }
            },
            {
                letter_code: 'ACT',
                series: 'ACT 1',
                guides: {}
            },
            {
                letter_code: 'AO',
                series: 'AO 14',
                guides: {}
            },
            {
                letter_code: 'BW',
                series: 'BW 1',
                guides: {}
            },
            {
                letter_code: 'CHAR',
                series: 'CHAR 13',
                guides: {
                    "elementary-primary-schools": "Elementary and primary schools",
                    "conveyances-of-land-charitable-uses-trust-deeds-1736-1963": "Land and property for charitable use: trust deeds, 1736-1963",
                    "secondary-schools": "Secondary schools"
                }
            },
            {
                letter_code: 'LEV',
                series: 'LEV 1',
                guides: {}
            },
            {
                letter_code: 'CP',
                series: 'CP 25/2',
                guides: {
                    "land-conveyance-feet-of-fines-1182-1833":"Land and property ownership: conveyances by feet of fines 1182-1833",
                    "enrolment-of-deeds-registration-of-titles-land":"Land and property ownership: enrolment and registration of title 1227-c1930"
                }
            },
            {
                letter_code: 'CP',
                series: 'CP 25/1',
                guides: {
                    "general-eyres-1194-1348":"General eyres 1194-1348",
                    "enrolment-of-deeds-registration-of-titles-land":"Land and property ownership: enrolment and registration of title 1227-c1930"
                }
            },
            {
                letter_code: 'IR',
                series: 'IR 121/1',
                guides: {
                    "valuation-office-survey-land-value-ownership-1910-1915":"Land use, value and ownership: Valuation Office Survey 1910-1915",
                    "maps-further-research":"Maps: further research",
                    "ordnance-survey":"Ordnance Survey"
                }
            },
            {
                letter_code: 'PRO',
                series: 'PRO 31/8',
                guides: {
                    "foreign-affairs-before-1509":"Foreign affairs before 1509",
                    "state-papers-ireland-1509-1782":"State Papers Ireland 1509-1782"
                }
            }
        ];

        series.forEach(i => {
            it(`series ${i.series}`, function () {
                assert.deepEqual(get_guides_for_series(i.letter_code, i.series, data), i.guides, `There was a problem with ${i.series}`);
            });
        })
    });
});
