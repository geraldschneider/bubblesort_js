function test() {
  var unsort = "2 5, 7 9 4 1, 3 5";
  var sort = "1 2 3 4 5 5 7 9";

  res = bubblesort_plain(unsort);
  console.log("Target: " +  sort + ".");
  console.log("Actual: " +  res + ".");
  if (res == sort) {
    console.log("Passed test sucessfully");
  }
  else {
    console.log("FAILED");
  }
}
