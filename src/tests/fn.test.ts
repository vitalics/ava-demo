import test, { ExecutionContext } from "ava";

const hasLength = (t: ExecutionContext, input: string, expected: number) => {
    console.log('execute file ', test.meta.file);
    t.is(input.length, expected);
};

test('bar has length 3', hasLength, 'bar', 3);

test.todo('implement me');