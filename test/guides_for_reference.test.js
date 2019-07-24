const assert = require('assert');
const data = require('../data/refs-in-guides-back-linked-full');
const get_guides_for_reference = require('../get_guides_for_reference');

describe('It should return the correct guides', function () {

    describe('for a given reference', function () {

        const references = [
            {
                letter_code: 'J',
                series: 'J 89',
                reference: 'J 89/13/1',
                guides: {
                    "court-of-kings-bench-plea-side-and-kings-queens-bench-division-cases-1702-1998": "Court of King's Bench (Plea Side) and King's/Queen's Bench Division cases 1702-1998"
                }
            },
            {
                letter_code: 'AB',
                series: 'AB 5',
                reference: 'AB 5/5',
                guides: {}
            },
            {
                letter_code: 'AO',
                series: 'AO 14',
                reference: 'AO 14/37',
                guides: {
                    "british-transatlantic-slave-trade-records": "British transatlantic slave trade records"
                }
            },
            {
                letter_code: 'BW',
                series: 'BW 1',
                reference: 'BW 1/1',
                guides: {}
            },
            {
                letter_code: 'CHAR',
                series: 'CHAR 13',
                reference: 'CHAR 13/483',
                guides: {
                    "elementary-primary-schools": "Elementary and primary schools"
                }
            },
            {
                letter_code: 'CHAR',
                series: 'CHAR 13',
                reference: 'CHAR 13/13',
                guides: {}
            },
            {
                letter_code: 'ACT',
                series: 'ACT 1',
                reference: 'ACT 1/632',
                guides: {
                    "companies-and-businesses": "Companies and businesses"
                }
            },
            {
                letter_code: 'LEV',
                series: 'LEV 1',
                reference: 'LEV 1/1',
                guides: {}
            },
            {
                letter_code: 'CP',
                series: 'CP 25/1',
                reference: 'CP 25/1/284/18',
                guides: {
                    "court-kings-bench-records-1200-1600": "Court of King's Bench records 1200-1702"
                }
            },
            {
                letter_code: 'PRO',
                series: 'PRO 31/8',
                reference: 'PRO 31/8/140B',
                guides: {
                    "religious-houses-lands-1000-1530": "Religious houses and their lands c.1000-1530"
                }
            }
        ];

        references.forEach(i => {
            it(`series ${i.reference}`, function () {
                assert.deepEqual(get_guides_for_reference(i.letter_code, i.series, i.reference, data), i.guides, `There was a problem with ${i.reference}`);
            });
        })
    });
});
