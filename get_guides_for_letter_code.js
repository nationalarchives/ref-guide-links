module.exports = get_guides_for_letter_code = (letter_code, data) => {
    return data[letter_code].guides || {};
};
