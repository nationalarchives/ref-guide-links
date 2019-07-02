const log_it = require('./log_it');

module.exports = extract_letter_code_section = (letter_code, data) => {

    let result = data[letter_code] || false;

    log_it(letter_code, result);

    return result;
};
