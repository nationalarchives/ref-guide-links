const data = require('./data/refs-in-guides-back-linked-full');
const get_variables = require('./get_variables');
const get_guides_for_letter_code = require('./get_guides_for_letter_code');

const test_reference = 'AB';
const { letter_code, series, reference } = get_variables(test_reference);

console.log(get_guides_for_letter_code(letter_code, data));





