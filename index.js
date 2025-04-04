const fibs = (number) => {
  let fibArray = [];
  let a = 0;
  let b = 1;

  for (let i = 0; i < number; i++) {
    fibArray.push(a);
    const temp = a;
    a = b;
    b = temp + b;
  }
  return fibArray;
};

console.log(fibs(10));
