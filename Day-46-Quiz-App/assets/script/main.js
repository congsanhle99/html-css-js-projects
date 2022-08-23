const quizData = [
  {
    question: "Which language runs in a web browser?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
  },
  {
    question: "What does CSS stand for?",
    a: "Central Style Sheets",
    b: "Cascading Style Sheets",
    c: "Cascading Simple Sheets",
    d: "Cars SUVs Sailboats",
    correct: "b",
  },
  {
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Hypertext Markdown Language",
    c: "Hyperloop Machine Language",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
  },
  {
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
  },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

const loadQuiz = () => {
  deselectAnswer();

  // const currentQuizData = quizData[currentQuiz];
  // questionEl.innerText = currentQuizData.question;
  // a_text.innerText = currentQuizData.a;
  // b_text.innerText = currentQuizData.b;
  // c_text.innerText = currentQuizData.c;
  // d_text.innerText = currentQuizData.d;

  // using destructuring
  const { question, a, b, c, d } = quizData[currentQuiz];
  questionEl.innerText = question;
  a_text.innerText = a;
  b_text.innerText = b;
  c_text.innerText = c;
  d_text.innerText = d;
};

const deselectAnswer = () => {
  answerEls.forEach((answerEl) => (answerEl.checked = false));
};

const getSelect = () => {
  let answer;
  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
};

submitBtn.addEventListener("click", () => {
  const answer = getSelect();
  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;

    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `
      <h2>Your answered CORRECTLY at ${score}/${quizData.length} question!</h2>
      <button onclick="location.reload()">Reload</button>
      `;
    }
  }
});

loadQuiz();
