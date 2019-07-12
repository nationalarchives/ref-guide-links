module.exports = get_guides_for_letter_code = (letter_code, data) => {

    const letter_code_found = data[letter_code] || false;

    if (letter_code_found) {
        return data[letter_code].guides || {};
    }

    return {};

};
