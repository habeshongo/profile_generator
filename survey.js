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
                      My Name is ${name} 
                      i love programming ${coding}
                      I enjoy listening ${pop}
                      I enjoy  my ${brunch}
                      and i like to eat ${chicken}
                      my favourite sport is ${football}
                      I am good at running and cooking ${power}
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
