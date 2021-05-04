const typeWrite = (sentence, time) => {
  for (const char of sentence) {
    setTimeout(() => {
      process.stdout.write(char);
      // console.log(!sentence.charAt(char));
    }, time += 50);
  }
  setTimeout(() => {
    process.stdout.write('\n');
  }, time += 50);
};

typeWrite("hello there from lighthouse labs", 0);

