# qw6

This is basically just `qw` from Perl re-implemented in ES6. Yep, it's just a stupid-simple one-liner, but I like the syntax and don't want to redefine this in every file I use it, so here it is as a module. Small modules, FTW!

#### Examples:

```javascript
let x = qw`foo bar baz`
// --> ['foo', 'bar', 'baz']

let x = qw`
one
two
three
`
// --> ['one', 'two', 'three']
```

### License

See LICENSE.txt
