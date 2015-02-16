import qw from './qw6'
import {deepEqual} from 'assert'

let singleLine = 'foo bar baz'
let multiLine = `foo
bar
baz`
let singleLineSpaces = '  foo bar baz '
let multiLineSpaces = `
     foo
     bar
     baz
`
let multiComplexLine = `
     foo bar
     baz
`

let assertExpected = r => deepEqual(r, ['foo', 'bar', 'baz'])

describe('qw6', () => {
    it('works on single line, space-delimited', () =>
            assertExpected(qw`${singleLine}`))
    it('works on single line, space-delimited with extra spaces', () =>
            assertExpected(qw`${singleLineSpaces}`))
    it('works on multi-line', () =>
            assertExpected(qw`${multiLine}`))
    it('works on multi-line with extra spaces', () =>
            assertExpected(qw`${multiLineSpaces}`))
    it('works on multi-line with complex lines', () =>
            assertExpected(qw`${multiComplexLine}`))
})
