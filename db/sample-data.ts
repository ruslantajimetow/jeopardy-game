import { hashSync } from 'bcrypt-ts-edge';

export const jeopardyCategories = {
  users: [
    {
      name: 'Ruslan',
      email: 'admin@example.com',
      password: hashSync('123456', 10),
    },
    {
      name: 'John',
      email: 'john@example.com',
      password: hashSync('123456', 10),
    },
  ],
  questions: [
    {
      category: 'Geography',
      questions: [
        {
          question: 'What is the capital of France?',
          answers: ['Paris', 'London', 'Berlin', 'Rome'],
          correctAnswer: 'Paris',
          score: 200,
        },
        {
          question: 'Which country has the longest coastline?',
          answers: ['Canada', 'Australia', 'Russia', 'United States'],
          correctAnswer: 'Canada',
          score: 400,
        },
        {
          question: 'What is the largest desert in the world?',
          answers: ['Sahara', 'Arabian', 'Gobi', 'Kalahari'],
          correctAnswer: 'Sahara',
          score: 600,
        },
        {
          question: 'In which continent is the Amazon Rainforest?',
          answers: ['South America', 'Africa', 'Asia', 'Australia'],
          correctAnswer: 'South America',
          score: 800,
        },
        {
          question: 'What is the smallest country in the world?',
          answers: ['Vatican City', 'Monaco', 'San Marino', 'Liechtenstein'],
          correctAnswer: 'Vatican City',
          score: 1000,
        },
      ],
    },
    {
      category: 'Sports',
      questions: [
        {
          question: 'Which country won the 2018 FIFA World Cup?',
          answers: ['France', 'Germany', 'Brazil', 'Argentina'],
          correctAnswer: 'France',
          score: 200,
        },
        {
          question: 'Who holds the record for most Olympic gold medals?',
          answers: [
            'Michael Phelps',
            'Usain Bolt',
            'Larisa Latynina',
            'Paavo Nurmi',
          ],
          correctAnswer: 'Michael Phelps',
          score: 400,
        },
        {
          question: "What sport is known as 'the king of sports'?",
          answers: ['Soccer', 'Basketball', 'Tennis', 'Rugby'],
          correctAnswer: 'Soccer',
          score: 600,
        },
        {
          question: 'Which team won the 2020 NBA Championship?',
          answers: [
            'Los Angeles Lakers',
            'Miami Heat',
            'Boston Celtics',
            'Golden State Warriors',
          ],
          correctAnswer: 'Los Angeles Lakers',
          score: 800,
        },
        {
          question: 'In which city were the 2008 Summer Olympics held?',
          answers: ['Beijing', 'London', 'Athens', 'Sydney'],
          correctAnswer: 'Beijing',
          score: 1000,
        },
      ],
    },
    {
      category: 'Movie',
      questions: [
        {
          question: "Who directed 'Jaws'?",
          answers: [
            'Steven Spielberg',
            'George Lucas',
            'Martin Scorsese',
            'Francis Ford Coppola',
          ],
          correctAnswer: 'Steven Spielberg',
          score: 200,
        },
        {
          question: 'Which movie won the Oscar for Best Picture in 1994?',
          answers: [
            'Forrest Gump',
            'The Shawshank Redemption',
            'Pulp Fiction',
            'The Lion King',
          ],
          correctAnswer: 'Forrest Gump',
          score: 400,
        },
        {
          question:
            "What is the name of the fictional African country in 'Black Panther'?",
          answers: ['Wakanda', 'Zamunda', 'Genovia', 'Elbonia'],
          correctAnswer: 'Wakanda',
          score: 600,
        },
        {
          question: "Who played the Joker in 'The Dark Knight'?",
          answers: [
            'Heath Ledger',
            'Jared Leto',
            'Jack Nicholson',
            'Mark Hamill',
          ],
          correctAnswer: 'Heath Ledger',
          score: 800,
        },
        {
          question: "What year was 'The Godfather' released?",
          answers: ['1972', '1969', '1980', '1975'],
          correctAnswer: '1972',
          score: 1000,
        },
      ],
    },
    {
      category: 'Music',
      questions: [
        {
          question: "Who is known as the 'King of Pop'?",
          answers: [
            'Michael Jackson',
            'Elvis Presley',
            'Prince',
            'James Brown',
          ],
          correctAnswer: 'Michael Jackson',
          score: 200,
        },
        {
          question: "Which band released the album 'Abbey Road'?",
          answers: [
            'The Beatles',
            'The Rolling Stones',
            'The Who',
            'Pink Floyd',
          ],
          correctAnswer: 'The Beatles',
          score: 400,
        },
        {
          question: "What is the title of Beyoncé's debut solo album?",
          answers: [
            'Dangerously in Love',
            "B'Day",
            'I Am... Sasha Fierce',
            'Lemonade',
          ],
          correctAnswer: 'Dangerously in Love',
          score: 600,
        },
        {
          question: 'Which music genre originated in Jamaica?',
          answers: ['Reggae', 'Hip-hop', 'Jazz', 'Blues'],
          correctAnswer: 'Reggae',
          score: 800,
        },
        {
          question: "Who is known for the hit song 'Shape of You'?",
          answers: [
            'Ed Sheeran',
            'Justin Bieber',
            'Ariana Grande',
            'Taylor Swift',
          ],
          correctAnswer: 'Ed Sheeran',
          score: 1000,
        },
      ],
    },
    {
      category: 'Random',
      questions: [
        {
          question: 'How many bones are in the adult human body?',
          answers: ['206', '208', '210', '212'],
          correctAnswer: '206',
          score: 200,
        },
        {
          question: 'Who invented the telephone?',
          answers: [
            'Alexander Graham Bell',
            'Thomas Edison',
            'Nikola Tesla',
            'Michael Faraday',
          ],
          correctAnswer: 'Alexander Graham Bell',
          score: 400,
        },
        {
          question: 'What is the chemical symbol for gold?',
          answers: ['Au', 'Ag', 'Pb', 'Fe'],
          correctAnswer: 'Au',
          score: 600,
        },
        {
          question: 'Which planet is known as the Red Planet?',
          answers: ['Mars', 'Venus', 'Jupiter', 'Saturn'],
          correctAnswer: 'Mars',
          score: 800,
        },
        {
          question: 'What is the longest river in the world?',
          answers: ['Nile', 'Amazon', 'Yangtze', 'Mississippi'],
          correctAnswer: 'Nile',
          score: 1000,
        },
      ],
    },
  ],
};
