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
            }
        ];

        series.forEach(i => {
            it(`series ${i.series}`, function () {
                assert.deepEqual(get_guides_for_series(i.letter_code, i.series, data), i.guides, `There was a problem with ${i.series}`);
            });
        })
    });
});
