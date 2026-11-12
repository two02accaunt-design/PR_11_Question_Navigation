const questions = [
  { question: "Що використовується для оголошення змінної в JavaScript?", answers: ["let", "print", "echo"] },
  { question: "Який метод додає елемент у кінець масиву?", answers: ["shift()", "push()", "pop()"] },
  { question: "Яка властивість масиву повертає кількість елементів?", answers: ["size", "count", "length"] },
  { question: "Яка команда виводить повідомлення в консоль?", answers: ["console.log()", "document.writeFile()", "alert.log()"] }
];

let numberQuestion = 0;

const questionElement = document.getElementById("question");
const answersElement = document.getElementById("answers");
const counterElement = document.getElementById("counter");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

function updateNavigation() {
  // На першому питанні приховуємо Prev.
  prevButton.style.display = numberQuestion === 0 ? "none" : "inline-block";

  // На останньому питанні приховуємо Next.
  nextButton.style.display =
    numberQuestion === questions.length - 1 ? "none" : "inline-block";
}

function showQuestion() {
  const current = questions[numberQuestion];
  questionElement.textContent = current.question;
  counterElement.textContent = `Питання ${numberQuestion + 1} з ${questions.length}`;
  answersElement.innerHTML = "";

  current.answers.forEach(answer => {
    const item = document.createElement("div");
    item.className = "answer";
    item.textContent = answer;
    answersElement.appendChild(item);
  });

  updateNavigation();
}

prevButton.addEventListener("click", () => {
  if (numberQuestion > 0) {
    numberQuestion--;
    showQuestion();
  }
});

nextButton.addEventListener("click", () => {
  if (numberQuestion < questions.length - 1) {
    numberQuestion++;
    showQuestion();
  }
});

showQuestion();
