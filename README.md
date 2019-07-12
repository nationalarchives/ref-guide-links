# Reference -> Guide links 

Repository exploring ways to link references and research guides. Previous (somewhat related) work can be found in:

https://github.com/nationalarchives/iaid-guide-links

## Development machine configuraiton

Clone the repository and ensure you have Node.js installed. Having done this run `npm install` to install the necessary dependencies (as listed in the `package.json`).

### Testing

Having installed the mocha test framework globally with `npm i -g mocha` you can run tests from the project root by typing `mocha`. Tests are contained in the `test` directory

### Running the code

Type `node app.js` to run the code. To try different references change the `test_reference` variable in `app.js`
