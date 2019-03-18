import test, { Macro } from 'ava';

const macro: Macro<[string, number]> = (t, input, expected) => {
    t.is(eval(input), expected);
};
macro.title = (providedTitle = '', input, expected) => `${providedTitle} ${input} = ${expected}`.trim();

test.before(async t => {
    t.log('dotenv arg ', test.meta.file, process.env.SOME_ARG);
});

test(macro, '2 + 2', 4);
test(macro, '2 * 3', 6);
test('providedTitle', macro, '3 * 3', 9);