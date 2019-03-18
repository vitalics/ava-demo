import test from 'ava';
import { config } from 'dotenv';

config();

test.before(async t => {
    t.log('dotenv arg ', test.meta.file, process.env.SOME_ARG);
    t.is(process.env.SOME_ARG, '123');
})

test('title', t => {
    t.is(1, +'1');
});
