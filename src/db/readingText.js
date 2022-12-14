const tasksInput = [
  {
    title: 'A poster at work',
    text: 'Come and join our lunchtime yoga class with experienced yoga teacher Divya Bridge! When? Every Tuesday at 1.30 p.m. Where? Meeting Room 7. How much? £10 for four 30-minute classes. What to bring? Comfortable clothes. Divya will provide the yoga mats. How to join? Write to Sam at Sam.Holden@example.com. We can only take a maximum of 20 in the room, so book now!',
    task1: [
      {
        id: 1,
        question: 'Which day of the week does the yoga class take place?',
        variant1: 'Monday',
        variant2: 'Tuesday',
        variant3: 'Wednesday',
        variant4: 'Thursday',
        correct: 'Tuesday',
      },
      {
        id: 2,
        question: 'How many classes can you take for £10?',
        variant1: 'three',
        variant2: 'four',
        variant3: 'six',
        variant4: 'eight',
        correct: 'four',
      },
      {
        id: 3,
        question: 'What time will the class end? ',
        variant1: '2.00 p.m.',
        variant2: '4.00 p.m.',
        variant3: '2.00 a.m.',
        variant4: '4.00 a.m.',
        correct: '2.00 p.m.',
      },
      {
        id: 4,
        question: 'What kind of clothes do you need to wear to the class?',
        variant1: 'nice',
        variant2: 'beautiful',
        variant3: 'comfortable',
        variant4: 'big',
        correct: 'comfortable',
      },
      {
        id: 5,
        question: 'What do you need to send to Sam if you want to join? ',
        variant1: 'post',
        variant2: 'email',
        variant3: 'pone number',
        variant4: 'flowers',
        correct: 'email',
      },
      {
        id: 6,
        question: 'When should you book if you want to join? ',
        variant1: 'now',
        variant2: 'tomorrow',
        variant3: 'yesterday',
        variant4: 'the day before yesterday',
        correct: 'now',
      },
      {
        id: 7,
        question: 'Sam Holden is the yoga teacher. ',
        variant1: 'true',
        variant2: 'false',
        variant3: 'not mentioned',
        variant4: "I don't know",
        correct: 'false',
      },
      {
        id: 8,
        question: 'The yoga class is once a week.',
        variant1: 'true',
        variant2: 'false',
        variant3: 'not mentioned',
        variant4: "I don't know",
        correct: 'true',
      },
      {
        id: 9,
        question: 'The class is at lunchtime in room 7. ',
        variant1: 'true',
        variant2: 'false',
        variant3: 'not mentioned',
        variant4: "I don't know",
        correct: 'true',
      },
      {
        id: 10,
        question: 'You need to bring yoga mats to the class.',
        variant1: 'true',
        variant2: 'false',
        variant3: 'not mentioned',
        variant4: "I don't know",
        correct: 'false',
      },
      {
        id: 11,
        question: "The class can't take 22 people",
        variant1: 'true',
        variant2: 'false',
        variant3: 'not mentioned',
        variant4: "I don't know",
        correct: 'true',
      },
      {
        id: 12,
        question: 'You need to call Sam Holden if you want to join the class.',
        variant1: 'true',
        variant2: 'false',
        variant3: 'not mentioned',
        variant4: "I don't know",
        correct: 'false',
      },
    ],
  },
];

export default tasksInput;
