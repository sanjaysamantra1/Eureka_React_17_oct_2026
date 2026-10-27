function test(a, b, ...c) {
    console.log(`a:${a}  b:${b}  c:${c}`);
}
test(10, 20, 30, 40, 50);

// Rest parameter must be last formal parameter
