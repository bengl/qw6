import qw from './qw6'
import {deepEqual as eq} from 'assert'
import pitesti from 'pitesti'

const test = pitesti()

const assert = r => Promise.resolve().then(() => eq(r, ['foo', 'bar', 'baz']))

test('single line, space-delimited', assert(qw`foo bar baz`))

test('single line, space-delimited, extra spaces', assert(qw`  foo bar baz `))

test('multi-line', assert(qw`foo
bar
baz`))

test('multi-line, extra spaces', assert(qw`
     foo
     bar
     baz
`))

test('multi-line, complex lines', assert(qw`
     foo bar
     baz
`))

test()
