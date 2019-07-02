const data = require('./data/refs-in-guides-back-linked-full');

const get_variables = require('./get_variables');
const extract_relevant_section = require('./extract_relevant_section');
const extract_letter_code_section = require('./extract_letter_code_section');


const test_reference = 'ADM 104/140';

const { letter_code, series, reference } = get_variables(test_reference);

let result = {};

result.letter_code_section = extract_letter_code_section(letter_code, data);

if (result.letter_code_section) {
    result.series_section = extract_relevant_section(series, result.letter_code_section);

    if (result.series_section) {
        result.reference_section = extract_relevant_section(reference, result.series_section);
    }
}




