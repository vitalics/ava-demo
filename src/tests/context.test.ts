import anyTest, { TestInterface, Macro } from "ava";

interface Context {
    foo: string
}

const test = anyTest as TestInterface<Context>;

const macro: Macro<[string], Context> = (t, expected: string) => {
    t.is(t.context.foo, expected);
};

test.beforeEach(t => {
    t.context = { foo: 'bar' };
});

test('foo is bar', macro, 'bar');
