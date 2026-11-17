// Palindrome -->

function palindrome() {
  const text = "palindrome";

  function isValid(char) {
    return /^[a-zA-z0-9]$/.test(char);
  }

  let i = 0;
  let j = text.length - 1;

  while (i < j) {
    while (i < j && !isValid(text[i])) {
      i++;
    }
    while (i < j && !isValid(text[j])) {
      j--;
    }
    if (text[i].toLowerCase() !== text[j].toLowerCase()) {
      return document.write(
        `<h3>Question 1. The word '${text}' is not a Palindrome</h3>`,
      );
    }
    i++;
    j--;
  }
  document.write(`Question 1. The word ${text} is a Palindrome`);
}

palindrome();

// Anagram -->

function anagram() {
  const text1 = "anagram";
  const text2 = "aarmnga";

  let count = {};

  for (let i = 0; i < text1.length; i++) {
    if (count[text1[i]] !== undefined) {
      count[text1[i]] += 1;
    } else count[text1[i]] = 1;

    if (count[text2[i]] !== undefined) {
      count[text2[i]] -= 1;
    } else count[text2[i]] = -1;
  }

  for (let key in count) {
    if (count[key] != 0) {
      return document.write(
        `<h3>Question 2. The words '${text1}' & '${text2}' is not an anagram</h3>`,
      );
    }
  }
  document.write(
    `<h3>Question 2. The words '${text1}' & '${text2}' is anagram</h3>`,
  );
}

anagram();

// Reverse the string

function reverseString() {
  const text = "Sriram Kannan";
  let arr = text.split("");

  let i = 0;
  let j = arr.length - 1;

  while (i < j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    i++;
    j--;
  }
  return document.write(
    `<h3>Question 3. The word '${text}' is reversed as '${arr.join("")}'</h3>`,
  );
}

reverseString();

// Prime Nos

function primeNos() {
  const num = 18;

  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      return document.write(
        `<h3>Question 4. The number ${num} is not a prime number</h3>`,
      );
    }
  }
  return document.write(
    `<h3>Question 4. The number ${num} is a prime number</h3>`,
  );
}

primeNos();

// Swap number

function swapNos() {
  let a = 10;
  let b = 20;
  document.write(`<h3>Question 5. Original a = ${a} & b = ${b}</h3>`);

  [b, a] = [a, b];
  document.write(`<h3>Changed a = ${a} & b = ${b}</h3>`);
}

swapNos();

// Array loop

function arrayLoop() {
  const num = [1, 2, 3, 4];

  document.write(`<h3>Question 6. Normal</h3>`);
  for (let i = 0; i < num.length; i++) {
    document.write(`<h3>${num[i]}</h3>`);
  }

  document.write(`<h3>Break 2nd index</h3>`);
  for (let i = 0; i < num.length; i++) {
    if (i == 2) break;
    document.write(`<h3>${num[i]}</h3>`);
  }

  document.write(`<h3>Continue leave 2nd index</h3>`);
  for (let i = 0; i < num.length; i++) {
    if (i == 2) continue;
    document.write(`<h3>${num[i]}</h3>`);
  }
}

arrayLoop();

// Flatten

function flatten() {
  const arr = [1, 2, 3, [4, 5, 6], [7, 8, 9]];
  document.write(
    `<h3>Question 7. Original [1, 2, 3, [4, 5, 6], [7, 8, 9]]</h3>`,
  );
  document.write(`<h3>Flatten ${arr.flat()}</h3>`);
  document.write(`<h3>First element in 2nd array ${arr[3][0]}</h3>`);
  document.write(`<h3>First element in 3rd array ${arr[4][0]}</h3>`);
}

flatten();
