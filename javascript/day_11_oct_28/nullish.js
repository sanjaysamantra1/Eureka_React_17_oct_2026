function test(a, b, c) {
    b = b ?? 20;  // b should have 20 value if 'b' is undefined or null
    c = c || 30;  // c should have 30 value if 'c' is any falsy value
    console.log(`a:${a} b:${b} c:${c}`);
}

test(10);
test(10, null, null);
test(10, false, false);
test(10, '', '');


/* 
??    use fallback value only for undefined/null
||    use fallback value for any falsy value  (undefined, null, 0, false , '' )
*/