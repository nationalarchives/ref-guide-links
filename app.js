const data = require('./data/refs-in-guides-back-linked-full');

const get_fragments = require('./get_fragments');
const get_guides_for_letter_code = require('./get_guides_for_letter_code');
const get_guides_for_series = require('./get_guides_for_series');
const get_guides_for_reference = require('./get_guides_for_reference');

const log_it  = require('./utilities/log_it');

const test_reference = 'ADM 1/24575';
const { letter_code, series, reference } = get_fragments(test_reference);

let results = {
    guides_for_letter_code: get_guides_for_letter_code(letter_code, data),
    guides_for_series: get_guides_for_series(letter_code, series, data),
    guides_for_reference: get_guides_for_reference(letter_code, series, reference, data)
};

log_it(results, test_reference, get_fragments(test_reference));







