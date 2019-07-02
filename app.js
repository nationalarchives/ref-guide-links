const data = require('./data/refs-in-guides-back-linked-full');

const get_variables = require('./get_variables');
const extract_relevant_section = require('./extract_relevant_section');
const extract_letter_code_section = require('./extract_letter_code_section');

const test_reference = 'ADM 137';
const { letter_code, series, reference } = get_variables(test_reference);
const extracted_guides = {};

extracted_guides.letter_code = extract_letter_code_section(letter_code, data);

if (extracted_guides.letter_code) {
    extracted_guides.series = extract_relevant_section(series, extracted_guides.letter_code);

    if (extracted_guides.series) {
        extracted_guides.reference = extract_relevant_section(reference, extracted_guides.series);
    }
}





