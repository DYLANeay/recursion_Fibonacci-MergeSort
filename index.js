const fibs = (number) => {
  for (
    var fibArray = [0, 1], i = 0, j = 1, k = 0;
    k < number;
    i = j, j = x, k++
  ) {
    x = i + j;
    fibArray.push(x);
  }
  console.log(fibArray);
};

fibs(10);
