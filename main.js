function bubblesort_plain(unsort) {
  console.log("Bubblesort started for 'plain'"); // Send to console
  var list = unsort ; /*var is optional */
  console.log(list);
  list = list.trim(); // trim whitespace at begin and end

  // delete commas of input
  if (list.includes(",")) {
    list = list.replace(/,/g, "");
  };

  //convert string to array
  arr = list.split(" ");
  console.log(arr);

  //bubblesort-algorithm
  end = arr.length
  for (j=0; j < arr.length; j++) {
    for (i=0; i < end; i++) {
      if (arr[i] > arr[i+1]) {
        cache = arr [i+1];
        arr[i+1] = arr[i];
        arr[i] = cache;
      }
    }
    end--;
  }

  console.log(arr);
  //document.getElementById("result").innerHTML = arr + "</p><p>" + arr.reverse();
  //arr as string
  var sort = "";
  for (i=0;i<arr.length; i++) {
    if (i == arr.length -1) {
      sort += (arr[i]);
    }
    else {
      sort += (arr[i] + " ");
    }

  }
  return sort;
  //document.getElementById("txt").innerHTML = txt;
}
