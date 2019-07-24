const assert = require('assert');
const data = require('../data/refs-in-guides-back-linked-full');

const get_guides_for_letter_code = require('../get_guides_for_letter_code');

describe('It should return the correct guides', function () {

    describe('for a given letter code', function () {

        const letter_codes = [
            {
                letter_code: 'AB',
                guides: {
                    "contaminated-land": "Contaminated land"
                }
            },
            {
                letter_code: 'ADM',
                guides: {
                    "birth-marriage-death-armed-forces": "Births, marriages and deaths in the armed forces",
                    "british-army-operations-second-world-war": "British Army operations in the Second World War",
                    "british-transatlantic-slave-trade-records": "British transatlantic slave trade records",
                    "colonies-dependencies-further-research": "Colonies and dependencies from 1782",
                    "contaminated-land": "Contaminated land",
                    "first-world-war": "First World War",
                    "prisoners-of-war-british-hands": "Prisoners of war in British hands",
                    "research-development-british-army": "Research and development in the British Army",
                    "research-development-royal-navy": "Research and development in the Royal Navy",
                    "royal-air-force-operations": "Royal Air Force operations",
                    "royal-navy-operations-correspondence-1660-1914": "Royal Navy operations and correspondence 1660-1914",
                    "royal-navy-operations-policy-after-1945": "Royal Navy operations and policy after 1945",
                    "royal-navy-operations-second-world-war": "Royal Navy operations in the Second World War",
                    "royal-navy-ratings-pensions": "Royal Navy ratings' pensions 17th-20th centuries",
                    "second-world-war": "Second World War",
                    "wars-overview": "Wars: an overview"
                }
            },
            {
                letter_code: 'J',
                guides: {
                    "chancery-equity-suits-after-1558": "Chancery equity suits 1558-1875",
                    "gay-lesbian-history": "Sexuality and gender identity history"
                }
            },
            {
                letter_code: 'AX',
                guides: {}
            },
            {
                letter_code: 'ACT',
                guides: {}
            },
            {
                letter_code: 'AO',
                guides: {
                    "catholics": "Catholics"
                }
            },
            {
                letter_code: 'BW',
                guides: {
                    "propaganda": "Propaganda"
                }
            },
            {
                letter_code: 'CHAR',
                guides: {}
            },
            {
                letter_code: 'LEV',
                guides: {}
            },
            {
                letter_code: 'CP',
                guides: {}
            },
            {
                letter_code: 'IR',
                guides: {
                    "taxation": "Taxation"
                }
            },
            {
                letter_code: 'PRO',
                guides: {}
            }
        ];

        letter_codes.forEach(i => {
            it(`letter code ${i.letter_code}`, function () {
                assert.deepEqual(get_guides_for_letter_code(i.letter_code, data), i.guides, `There was a problem with ${i.letter_code}`);
            });
        })
    });
});
