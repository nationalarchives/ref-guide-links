module.exports = is_legacy_sub_class_series = (reference) => {

    const regex = /^(CP 2[456]\/|IR (12[14-9]|13[0-5])\/|PRO (3[01]|41|66)\/)/;

    return reference.search(regex) !== -1;
};
