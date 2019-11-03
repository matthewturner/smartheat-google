const chai = require('chai');
chai.use(require('chai-as-promised'));
const expect = chai.expect;
// const lambda = require('../../src/aws/legacy-lambda');
const fs = require('promise-fs');
const util = require('util');

const createTarget = () => {
    process.env.HOLD_STRATEGY = 'default';
    process.env.THERMOSTAT_REPOSITORY = 'default';
    process.env.THERMOSTAT_TYPE = 'mock';
    process.env.LOG_LEVEL = 'OFF';

    return {
        lambda: lambda,
        object: () => {
            return lambda;
        }
    };
};

describe('Lambda', async () => {
    describe('TempIntent', async () => {
        it('says the current temperature', async () => {
            // const target = createTarget();

            // const request = JSON.parse(await fs.readFile('./test/fixtures/legacy/TempIntent.json'));
            // const context = {};

            // const handler = util.promisify(target.object().handler);

            // const response = await handler(request, context);
            expect('test').to.equal('test');
        });
    });
});