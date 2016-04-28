/*
The look-and-say sequence was introduced and analyzed by John Conway.
In mathematics, the look-and-say sequence is the sequence of integers beginning as follows:

1, 11, 21, 1211, 111221, 312211, 13112221, 1113213211, ... (sequence A005150 in OEIS).
To generate a member of the sequence from the previous member, read off the digits of the previous member, counting the number of digits in groups of the same digit. For example:

1 is read off as "one 1" or 11.
11 is read off as "two 1s" or 21.
21 is read off as "one 2, then one 1" or 1211.
1211 is read off as "one 1, one 2, then two 1s" or 111221.
111221 is read off as "three 1s, two 2s, then one 1" or 312211.

(wikipedia: https://en.wikipedia.org/wiki/Look-and-say_sequence#cite_note-1)
*/

var in_a_row = function(a, start, say) {
  var i;
  for (i = start; i < a.length && a[i] === a[start]; i++)
    ;
  say[say.length] = i - start;
  say[say.length] = a[start];
};

var look_and_say = function(look) { // plays one round of look & say 
  var i, say;
  say = [];
  for (i = 0; i < look.length; i += say[say.length - 2]) in_a_row(look, i, say);
  return say;
};

var n_times = function(x, n) {  // plays n rounds of look & say  
  var turn, i;
  turn = x;
  for (i = 0; i < n; i++) turn = look_and_say(turn);
  return turn.length;
};

var test_in_a_row = function() {
  var i, input, got, want, cases;
  cases = [
    [ [ 1 ], [ 1, 1 ] ],
    [ [ 1, 2 ], [ 1, 1 ] ],
    [ [ 1, 1, 2 ], [ 2, 1 ] ],
    [ [ 1, 1 ], [ 2, 1 ] ],
    [ [ 1, 1, 1 ], [ 3, 1 ] ],
  ];
  for (i = 0; i < cases.length; i++) {
    got = [];
    in_a_row(cases[i][0], 0, got);
    want = cases[i][1];
    if (JSON.stringify(got) !== JSON.stringify(want)) {
      console.log("in_a_row(" + cases[i][0] + "): got " + got + "; want " + want)
    } else {
      console.log("it works like a fkn clock!");
    }
  }
};

var test_look_and_say = function() {
  var i, input, got, want, cases;
  cases = [
    [ [ 1 ], [ 1, 1 ] ],
    [ [ 1, 1 ], [ 2, 1 ] ],
    [ [ 2, 1 ], [ 1, 2, 1, 1 ] ],
    [ [ 1, 2, 1, 1 ], [ 1, 1, 1, 2, 2, 1 ] ],
    [ [ 1, 1, 1, 2, 2, 1 ], [ 3, 1, 2, 2, 1, 1 ] ],
  ];
  for (i = 0; i < cases.length; i++) {
    got  = look_and_say(cases[i][0]);
    want = cases[i][1];
    if (JSON.stringify(got) !== JSON.stringify(want)) {
      console.log("look_and_say(" + cases[i][0] + "): got " + got + "; want " + want)
    } else {
      console.log("it works like a fkn clock!");
    }
  }
};

var test_n_times = function() {
  if (JSON.stringify(n_times([ 1 ], 6)) !== "8") {
    console.log("test 1 has failed, wanted 8, got " + JSON.stringify(n_times([ 1 ], 6)));
  } else  if (JSON.stringify(n_times([1, 3, 2, 1, 1, 3, 1, 1, 1, 2], 40)) !== "492982") {
    console.log("test 2 has failed, wanted 492982, got " + JSON.stringify(n_times([1, 3, 2, 1, 1, 3, 1, 1, 1, 2], 40)));	
  } else {
    console.log("it works like a fkn clock!");
  }
};
