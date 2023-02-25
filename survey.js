const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("What's your name? Nicknames are also acceptable :) ", (name) => {
  rl.question("What's an activity you like doing? ", (coding) => {
    rl.question('What do you listen to while doing that? ', (pop) => {
      rl.question(
        'Which meal is your favourite (eg: dinner, brunch, etc.) ',
        (brunch) => {
          rl.question(
            "What's your favourite thing to eat for that meal? ",
            (chicken) => {
              rl.question(
                'Which sport is your absolute favourite? ',
                (football) => {
                  rl.question(
                    'What is your superpower? In a few words, tell us what you are amazing at! ',
                    (power) => {
                      let str = `
                      ${name} loves ${coding} and enjoys listening to ${pop} music. 
                      ${brunch} is his favorite meal for which he likes to eat ${chicken}. 
                      His favorite sport is ${football} and his superpower is ${power}.
                      `;
                      console.log(str);
                      rl.close();
                    }
                  );
                }
              );
            }
          );
        }
      );
    });
  });
});
