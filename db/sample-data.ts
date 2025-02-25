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
      category: 'HTML',
      questions: [
        {
          question: "What does the 'alt' attribute in an <img> tag do?",
          answers: [
            'Specifies the image source',
            'Provides alternative text for the image',
            'Sets the image dimensions',
            'Defines the image border',
          ],
          correctAnswer: 'Provides alternative text for the image',
          score: 200,
        },
        {
          question:
            'Which HTML tag is used to define a semantic section of content?',
          answers: ['<div>', '<span>', '<section>', '<p>'],
          correctAnswer: '<section>',
          score: 400,
        },
        {
          question: "What is the purpose of the 'data-' attribute in HTML?",
          answers: [
            'To style elements',
            'To store custom data private to the page or application',
            'To link external scripts',
            'To specify character encoding',
          ],
          correctAnswer:
            'To store custom data private to the page or application',
          score: 600,
        },
        {
          question:
            'Which element is used to create a dropdown menu in a form?',
          answers: ['<input>', '<select>', '<button>', '<textarea>'],
          correctAnswer: '<select>',
          score: 800,
        },
        {
          question: "What does the 'rel' attribute in an <a> tag specify?",
          answers: [
            'The relationship between the linked resource and the document',
            'The relative position of the link',
            'The resource loading priority',
            "The link's visibility status",
          ],
          correctAnswer:
            'The relationship between the linked resource and the document',
          score: 1000,
        },
      ],
    },
    {
      category: 'CSS',
      questions: [
        {
          question:
            'Which property is used to change the text color of an element?',
          answers: ['font-size', 'color', 'background-color', 'text-align'],
          correctAnswer: 'color',
          score: 200,
        },
        {
          question: "What does 'flexbox' primarily help with?",
          answers: [
            'Animating elements',
            'Creating responsive layouts',
            'Adding shadows',
            'Managing font styles',
          ],
          correctAnswer: 'Creating responsive layouts',
          score: 400,
        },
        {
          question:
            'Which CSS unit is relative to the font-size of the root element?',
          answers: ['px', 'em', 'rem', '%'],
          correctAnswer: 'rem',
          score: 600,
        },
        {
          question: "What is the purpose of the 'z-index' property?",
          answers: [
            'To control element stacking order',
            'To set element width',
            'To adjust opacity',
            'To define animation speed',
          ],
          correctAnswer: 'To control element stacking order',
          score: 800,
        },
        {
          question: "What does the 'position: sticky' value do?",
          answers: [
            'Fixes an element in place permanently',
            'Makes an element scroll with the page',
            'Keeps an element in a fixed position relative to its parent until a scroll threshold',
            'Hides an element until hovered',
          ],
          correctAnswer:
            'Keeps an element in a fixed position relative to its parent until a scroll threshold',
          score: 1000,
        },
      ],
    },
    {
      category: 'JavaScript',
      questions: [
        {
          question: "What is the output of 'typeof null' in JavaScript?",
          answers: ['null', 'undefined', 'object', 'string'],
          correctAnswer: 'object',
          score: 200,
        },
        {
          question:
            'Which method is used to add an element to the end of an array?',
          answers: ['push()', 'pop()', 'shift()', 'unshift()'],
          correctAnswer: 'push()',
          score: 400,
        },
        {
          question: "What does 'event.preventDefault()' do?",
          answers: [
            'Stops event bubbling',
            'Prevents the default behavior of an event',
            'Triggers an event manually',
            'Delays event execution',
          ],
          correctAnswer: 'Prevents the default behavior of an event',
          score: 600,
        },
        {
          question: "What is a 'closure' in JavaScript?",
          answers: [
            'A function with no parameters',
            'A function that remembers its outer scope variables',
            'A method to close a browser window',
            'A way to lock variables',
          ],
          correctAnswer: 'A function that remembers its outer scope variables',
          score: 800,
        },
        {
          question: "What does the 'async' keyword before a function indicate?",
          answers: [
            'The function runs synchronously',
            'The function returns a Promise',
            "The function cannot use 'await'",
            'The function executes immediately',
          ],
          correctAnswer: 'The function returns a Promise',
          score: 1000,
        },
      ],
    },
    {
      category: 'TypeScript',
      questions: [
        {
          question: 'What is the primary purpose of TypeScript?',
          answers: [
            'To add styles to JavaScript',
            'To add static typing to JavaScript',
            'To optimize JavaScript performance',
            'To replace JavaScript entirely',
          ],
          correctAnswer: 'To add static typing to JavaScript',
          score: 200,
        },
        {
          question: 'How do you define an interface in TypeScript?',
          answers: [
            'interface MyInterface {}',
            'class MyInterface {}',
            'type MyInterface = {}',
            'function MyInterface() {}',
          ],
          correctAnswer: 'interface MyInterface {}',
          score: 400,
        },
        {
          question: "What does the 'any' type signify in TypeScript?",
          answers: [
            'A specific type must be assigned',
            'The variable can hold any type',
            'The variable is read-only',
            'The variable is undefined',
          ],
          correctAnswer: 'The variable can hold any type',
          score: 600,
        },
        {
          question: "What is the purpose of the 'as' keyword in TypeScript?",
          answers: [
            'To alias imports',
            'To assert a type',
            'To define async functions',
            'To create abstract classes',
          ],
          correctAnswer: 'To assert a type',
          score: 800,
        },
        {
          question: "What does the 'never' type represent?",
          answers: [
            'A value that might be null',
            'A value that never occurs',
            'A variable with no type',
            'A type for all values',
          ],
          correctAnswer: 'A value that never occurs',
          score: 1000,
        },
      ],
    },
    {
      category: 'React',
      questions: [
        {
          question: "What is the purpose of 'useState' in React?",
          answers: [
            'To fetch data',
            'To manage component state',
            'To handle routing',
            'To style components',
          ],
          correctAnswer: 'To manage component state',
          score: 200,
        },
        {
          question: "What is a React 'component'?",
          answers: [
            'A reusable piece of UI',
            'A CSS stylesheet',
            'A database query',
            'A server-side function',
          ],
          correctAnswer: 'A reusable piece of UI',
          score: 400,
        },
        {
          question: "What does 'useEffect' do in React?",
          answers: [
            'Handles side effects in functional components',
            'Manages state updates',
            'Renders components conditionally',
            'Optimizes performance',
          ],
          correctAnswer: 'Handles side effects in functional components',
          score: 600,
        },
        {
          question: "What is the purpose of React's 'key' prop?",
          answers: [
            'To uniquely identify elements in a list',
            'To secure components',
            'To define component styles',
            'To trigger re-renders',
          ],
          correctAnswer: 'To uniquely identify elements in a list',
          score: 800,
        },
        {
          question: "What is a 'React Hook'?",
          answers: [
            'A function that lets you use state and other React features in functional components',
            'A tool for debugging React apps',
            'A method to connect to APIs',
            'A way to write class components',
          ],
          correctAnswer:
            'A function that lets you use state and other React features in functional components',
          score: 1000,
        },
      ],
    },
    {
      category: 'Next.js',
      questions: [
        {
          question: 'What is Next.js primarily used for?',
          answers: [
            'Server-side rendering and static site generation',
            'Client-side animations',
            'Database management',
            'CSS preprocessing',
          ],
          correctAnswer: 'Server-side rendering and static site generation',
          score: 200,
        },
        {
          question: "What does 'getStaticProps' do in Next.js?",
          answers: [
            'Fetches data at build time',
            'Renders components dynamically',
            'Handles client-side routing',
            'Optimizes images',
          ],
          correctAnswer: 'Fetches data at build time',
          score: 400,
        },
        {
          question: "What is the purpose of the 'pages' directory in Next.js?",
          answers: [
            'To store static assets',
            'To define routes and pages',
            'To manage API endpoints',
            'To configure styles',
          ],
          correctAnswer: 'To define routes and pages',
          score: 600,
        },
        {
          question: "What is 'Dynamic Routing' in Next.js?",
          answers: [
            'Routing based on URL parameters',
            'Static page generation',
            'Client-side navigation only',
            'Automatic code splitting',
          ],
          correctAnswer: 'Routing based on URL parameters',
          score: 800,
        },
        {
          question: "What does 'Incremental Static Regeneration' (ISR) allow?",
          answers: [
            'Updating static pages without rebuilding the entire site',
            'Real-time database updates',
            'Dynamic client-side rendering',
            'Serverless function deployment',
          ],
          correctAnswer:
            'Updating static pages without rebuilding the entire site',
          score: 1000,
        },
      ],
    },
    {
      category: 'Optimizing',
      questions: [
        {
          question: "What is 'lazy loading' in web development?",
          answers: [
            'Loading resources only when needed',
            'Preloading all assets',
            'Reducing server requests',
            'Compressing files',
          ],
          correctAnswer: 'Loading resources only when needed',
          score: 200,
        },
        {
          question: 'How can you reduce CSS file size?',
          answers: [
            'Minifying the CSS',
            'Adding more comments',
            'Using longer class names',
            'Increasing specificity',
          ],
          correctAnswer: 'Minifying the CSS',
          score: 400,
        },
        {
          question: "What does 'tree shaking' do in JavaScript?",
          answers: [
            'Removes unused code from bundles',
            'Optimizes image loading',
            'Reduces server latency',
            'Improves CSS rendering',
          ],
          correctAnswer: 'Removes unused code from bundles',
          score: 600,
        },
        {
          question:
            'What is the benefit of using a Content Delivery Network (CDN)?',
          answers: [
            'Faster content delivery by caching resources closer to users',
            'Improved database performance',
            'Reduced JavaScript execution time',
            'Better SEO ranking',
          ],
          correctAnswer:
            'Faster content delivery by caching resources closer to users',
          score: 800,
        },
        {
          question: "What is 'critical CSS'?",
          answers: [
            'CSS needed to render above-the-fold content',
            'Highly compressed CSS',
            'CSS for mobile devices only',
            'CSS that overrides other styles',
          ],
          correctAnswer: 'CSS needed to render above-the-fold content',
          score: 1000,
        },
      ],
    },
  ],
};
