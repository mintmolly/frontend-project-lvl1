import readlineSync from 'readline-sync';

const even = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const times = 3;
  for (let i = 1; i <= times; i += 1) {
    const number = Math.floor(Math.random().toFixed(2) * 100);
    const correct = (number % 2 === 0) ? 'yes' : 'no';
    const answer = readlineSync.question(`Question: ${number} `);
    console.log(`Your answer: ${answer}`);

    if (answer === correct) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correct}'. Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default even;
