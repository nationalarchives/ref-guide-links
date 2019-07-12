const { table } = require('table');
const chalk = require('chalk');


module.exports = log_it = (results, test_reference, variables) => {

    process.stdout.write('\033c');

    print_variable_extraction_table(test_reference, variables);

    print_results(results, variables)

};

const print_variable_extraction_table = (test_reference, variables) => {
    console.log(`\nGiven ${test_reference} reference, these ${chalk.blue.bold('variables')} were extracted:`);

    const variable_extraction = [
        [chalk.yellow.bold('Extracted letter code'), chalk.magenta.bold('Extracted series'), chalk.cyanBright.bold('Full reference')],
        [chalk.yellow(variables.letter_code), chalk.magenta(variables.series), chalk.cyanBright.bold(variables.reference)]
    ];

    const variable_extraction_table = table(variable_extraction, {});

    console.log(variable_extraction_table);
};

const print_results =  (results, variables) => {
    console.log(`For these variables, the ${chalk.blue.bold('results')} were:`);

    const variable_extraction = [
        [' ', 'Number of guides', 'Guides'],
        [chalk.yellow.bold(variables.letter_code), chalk.yellow(Object.keys(results.guides_for_letter_code).length), chalk.yellow(Object.values(results.guides_for_letter_code).join(',\n'))],
        [chalk.magenta(variables.series), chalk.magenta(Object.keys(results.guides_for_series).length), chalk.magenta(Object.values(results.guides_for_series).join(',\n'))],
        [chalk.cyanBright(variables.reference), chalk.cyanBright(Object.keys(results.guides_for_reference).length), chalk.cyanBright(Object.values(results.guides_for_reference).join(',\n'))],

    ];

    const variable_extraction_table = table(variable_extraction, {});

    console.log(variable_extraction_table, '\n');
};
