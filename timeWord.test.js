const timeWord = require('./timeWord');

describe('#timeword', () => {
  test('it is a function', () => {
    expect(typeof timeWord).toBe('function');
  });
});

// Simple test function

// 
function test(input, expected) {
  const result = timeToWords(input);
  console.log(result === expected ? `PASS: ${input}` : `FAIL: ${input}, Expected: ${expected}, Got: ${result}`);
}

// Running test cases
test("00:00", "midnight");
test("00:12", "twelve twelve am");
test("01:00", "one o’clock am");
test("06:01", "six oh one am");
test("06:10", "six ten am");
test("06:18", "six eighteen am");
test("06:30", "six thirty am");
test("10:34", "ten thirty four am");
test("12:00", "noon");
test("12:09", "twelve oh nine pm");
test("23:23", "eleven twenty three pm");


const timeWord = require('./timeWord');

// describe('#timeword', () => {
//   test('it is a function', () => {
//     expect(typeof timeWord).toBe('function');
//   });

//   test('returns midnight for 00:00', () => {
//     expect(timeWord("00:00")).toBe("midnight");
//   });

//   test('returns twelve twelve am for 00:12', () => {
//     expect(timeWord("00:12")).toBe("twelve twelve am");
//   });

//   test('returns one o’clock am for 01:00', () => {
//     expect(timeWord("01:00")).toBe("one o’clock am");
//   });

//   test('returns six oh one am for 06:01', () => {
//     expect(timeWord("06:01")).toBe("six oh one am");
//   });

//   test('returns six ten am for 06:10', () => {
//     expect(timeWord("06:10")).toBe("six ten am");
//   });

//   test('returns six eighteen am for 06:18', () => {
//     expect(timeWord("06:18")).toBe("six eighteen am");
//   });

//   test('returns six thirty am for 06:30', () => {
//     expect(timeWord("06:30")).toBe("six thirty am");
//   });

//   test('returns ten thirty four am for 10:34', () => {
//     expect(timeWord("10:34")).toBe("ten thirty four am");
//   });

//   test('returns noon for 12:00', () => {
//     expect(timeWord("12:00")).toBe("noon");
//   });

//   test('returns twelve oh nine pm for 12:09', () => {
//     expect(timeWord("12:09")).toBe("twelve oh nine pm");
//   });

//   test('returns eleven twenty three pm for 23:23', () => {
//     expect(timeWord("23:23")).toBe("eleven twenty three pm");
//   });
// });
