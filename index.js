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

const fibsRecursive = (number) => {
  if (number <= 0) {
    return [];
  } else if (number === 1) {
    return [0];
  } else if (number === 2) {
    return [0, 1];
  } else {
    const sequence = fibsRecursive(number - 1);
    sequence.push(
      sequence[sequence.length - 1] + sequence[sequence.length - 2]
    );
    return sequence;
  }
};

console.log(fibsRecursive(6));
