// =====================================================
// GLOBAL VARIABLES
// =====================================================

let currentUser = null;

let currentExam = null;

let currentQuestionIndex = 0;

let selectedAnswers = {};

let timerInterval = null;

let timeRemaining = 15 * 60;


// =====================================================
// QUESTIONS
// 10 QUESTIONS EACH
// =====================================================

const examQuestions = {

    HTML: [

        {
            question: "What does HTML stand for?",
            options: [
                "Hyper Text Markup Language",
                "High Text Machine Language",
                "Hyperlink Text Management Language",
                "Home Tool Markup Language"
            ],
            answer: 0
        },

        {
            question: "Which tag is used to create a paragraph?",
            options: [
                "<p>",
                "<paragraph>",
                "<para>",
                "<text>"
            ],
            answer: 0
        },

        {
            question: "Which tag is used to create a hyperlink?",
            options: [
                "<link>",
                "<a>",
                "<href>",
                "<url>"
            ],
            answer: 1
        },

        {
            question: "Which tag is used for the largest heading?",
            options: [
                "<h6>",
                "<heading>",
                "<h1>",
                "<head>"
            ],
            answer: 2
        },

        {
            question: "Which HTML element is used to display an image?",
            options: [
                "<image>",
                "<img>",
                "<picture>",
                "<src>"
            ],
            answer: 1
        },

        {
            question: "Which attribute specifies the image source?",
            options: [
                "href",
                "src",
                "link",
                "source"
            ],
            answer: 1
        },

        {
            question: "Which tag creates an unordered list?",
            options: [
                "<ol>",
                "<list>",
                "<ul>",
                "<li>"
            ],
            answer: 2
        },

        {
            question: "Which tag is used for a table row?",
            options: [
                "<td>",
                "<tr>",
                "<th>",
                "<table-row>"
            ],
            answer: 1
        },

        {
            question: "Which declaration defines an HTML5 document?",
            options: [
                "<html5>",
                "<doctype html>",
                "<!DOCTYPE html>",
                "<document>"
            ],
            answer: 2
        },

        {
            question: "Which tag is used to create a button?",
            options: [
                "<button>",
                "<btn>",
                "<input-button>",
                "<click>"
            ],
            answer: 0
        }

    ],


    CSS: [

        {
            question: "What does CSS stand for?",
            options: [
                "Computer Style Sheets",
                "Cascading Style Sheets",
                "Creative Style System",
                "Colorful Style Sheets"
            ],
            answer: 1
        },

        {
            question: "Which property changes text color?",
            options: [
                "font-color",
                "text-color",
                "color",
                "foreground"
            ],
            answer: 2
        },

        {
            question: "Which property changes background color?",
            options: [
                "bgcolor",
                "background-color",
                "background",
                "color-background"
            ],
            answer: 1
        },

        {
            question: "Which symbol is used for an ID selector?",
            options: [
                ".",
                "#",
                "*",
                "@"
            ],
            answer: 1
        },

        {
            question: "Which symbol is used for a class selector?",
            options: [
                "#",
                ".",
                "*",
                "$"
            ],
            answer: 1
        },

        {
            question: "Which property changes font size?",
            options: [
                "font-style",
                "text-size",
                "font-size",
                "size"
            ],
            answer: 2
        },

        {
            question: "Which property adds space inside an element?",
            options: [
                "margin",
                "padding",
                "spacing",
                "border"
            ],
            answer: 1
        },

        {
            question: "Which property makes text bold?",
            options: [
                "font-weight",
                "text-bold",
                "font-bold",
                "bold"
            ],
            answer: 0
        },

        {
            question: "Which CSS property controls element width?",
            options: [
                "size",
                "width",
                "element-width",
                "length"
            ],
            answer: 1
        },

        {
            question: "Which display value creates a flex container?",
            options: [
                "block",
                "grid",
                "flex",
                "inline"
            ],
            answer: 2
        }

    ],


    JavaScript: [

        {
            question: "What is JavaScript mainly used for?",
            options: [
                "Styling web pages",
                "Adding interactivity to web pages",
                "Creating databases only",
                "Creating images"
            ],
            answer: 1
        },

        {
            question: "Which keyword declares a variable?",
            options: [
                "var",
                "variable",
                "v",
                "declare"
            ],
            answer: 0
        },

        {
            question: "Which keyword creates a constant?",
            options: [
                "constant",
                "const",
                "fixed",
                "static"
            ],
            answer: 1
        },

        {
            question: "Which method prints output to the console?",
            options: [
                "print()",
                "console.log()",
                "display()",
                "write()"
            ],
            answer: 1
        },

        {
            question: "Which symbol is used for strict equality?",
            options: [
                "=",
                "==",
                "===",
                "!="
            ],
            answer: 2
        },

        {
            question: "Which method converts JSON text into an object?",
            options: [
                "JSON.parse()",
                "JSON.convert()",
                "JSON.object()",
                "JSON.read()"
            ],
            answer: 0
        },

        {
            question: "Which method adds an element to the end of an array?",
            options: [
                "push()",
                "add()",
                "append()",
                "insert()"
            ],
            answer: 0
        },

        {
            question: "Which event occurs when a user clicks an element?",
            options: [
                "onhover",
                "onclick",
                "onpress",
                "onselect"
            ],
            answer: 1
        },

        {
            question: "Which keyword is used to define a function?",
            options: [
                "function",
                "def",
                "func",
                "method"
            ],
            answer: 0
        },

        {
            question: "Which object represents the HTML document?",
            options: [
                "window",
                "document",
                "html",
                "page"
            ],
            answer: 1
        }

    ],


    Python: [

        {
            question: "What type of language is Python?",
            options: [
                "Programming language",
                "Markup language",
                "Styling language",
                "Database language"
            ],
            answer: 0
        },

        {
            question: "Which function displays output in Python?",
            options: [
                "display()",
                "echo()",
                "print()",
                "write()"
            ],
            answer: 2
        },

        {
            question: "Which symbol starts a comment in Python?",
            options: [
                "//",
                "#",
                "/*",
                "<!--"
            ],
            answer: 1
        },

        {
            question: "Which data type stores True or False?",
            options: [
                "String",
                "Integer",
                "Boolean",
                "Float"
            ],
            answer: 2
        },

        {
            question: "Which keyword defines a function?",
            options: [
                "function",
                "def",
                "func",
                "define"
            ],
            answer: 1
        },

        {
            question: "Which brackets are used for a list?",
            options: [
                "()",
                "{}",
                "[]",
                "<>"
            ],
            answer: 2
        },

        {
            question: "Which keyword is used for a loop?",
            options: [
                "for",
                "loop",
                "repeat",
                "iterate"
            ],
            answer: 0
        },

        {
            question: "Which function returns the length of a list?",
            options: [
                "length()",
                "size()",
                "len()",
                "count()"
            ],
            answer: 2
        },

        {
            question: "Which keyword is used to handle exceptions?",
            options: [
                "catch",
                "try",
                "exception",
                "handle"
            ],
            answer: 1
        },

        {
            question: "Which operator is used for exponentiation?",
            options: [
                "^",
                "**",
                "//",
                "^^"
            ],
            answer: 1
        }

    ]

};


// =====================================================
// PAGE FUNCTIONS
// =====================================================

function hideAllPages() {

    document
        .querySelectorAll(".page, .exam-page")
        .forEach(page => {
            page.classList.add("hidden");
        });

}


function showLogin() {

    hideAllPages();

    document
        .getElementById("loginPage")
        .classList.remove("hidden");

    document
        .getElementById("loginError")
        .textContent = "";

}


function showRegister() {

    hideAllPages();

    document
        .getElementById("registerPage")
        .classList.remove("hidden");

    document
        .getElementById("registerError")
        .textContent = "";

    document
        .getElementById("registerSuccess")
        .textContent = "";

}


// =====================================================
// REGISTER
// =====================================================

document
    .getElementById("registerForm")
    .addEventListener("submit", async function(event) {

        event.preventDefault();

        const name =
            document
                .getElementById("registerName")
                .value
                .trim();

        const email =
            document
                .getElementById("registerEmail")
                .value
                .trim();

        const password =
            document
                .getElementById("registerPassword")
                .value;

        const confirmPassword =
            document
                .getElementById("confirmPassword")
                .value;

        const errorElement =
            document.getElementById("registerError");

        const successElement =
            document.getElementById("registerSuccess");

        errorElement.textContent = "";
        successElement.textContent = "";

        // Password confirmation
        if (password !== confirmPassword) {

            errorElement.textContent =
                "Passwords do not match.";

            return;
        }

        if (password.length < 6) {

            errorElement.textContent =
                "Password must contain at least 6 characters.";

            return;
        }

        try {

            const response = await fetch(
                "/api/register",
                {
                    method: "POST",

                    headers: {
                        "Content-Type":
                            "application/json"
                    },

                    body: JSON.stringify({
                        name,
                        email,
                        password
                    })
                }
            );

            const data =
                await response.json();

            if (!response.ok) {

                errorElement.textContent =
                    data.message ||
                    "Registration failed.";

                return;
            }

            successElement.textContent =
                data.message;

            document
                .getElementById("registerForm")
                .reset();

            setTimeout(() => {
                showLogin();
            }, 1500);

        } catch (error) {

            console.error(error);

            errorElement.textContent =
                "Unable to connect to the server.";

        }

    });


// =====================================================
// LOGIN
// =====================================================

document
    .getElementById("loginForm")
    .addEventListener("submit", async function(event) {

        event.preventDefault();

        const email =
            document
                .getElementById("studentEmail")
                .value
                .trim();

        const password =
            document
                .getElementById("studentPassword")
                .value;

        const errorElement =
            document.getElementById("loginError");

        const loginButton =
            document.getElementById("loginButton");

        errorElement.textContent = "";

        loginButton.disabled = true;
        loginButton.textContent = "Checking...";

        try {

            const response = await fetch(
                "/api/login",
                {
                    method: "POST",

                    headers: {
                        "Content-Type":
                            "application/json"
                    },

                    body: JSON.stringify({
                        email,
                        password
                    })
                }
            );

            const data =
                await response.json();

            if (!response.ok) {

                errorElement.textContent =
                    data.message ||
                    "Login failed.";

                loginButton.disabled = false;
                loginButton.textContent = "Login";

                return;
            }

            // Save logged-in user
            currentUser = data.user;

            localStorage.setItem(
                "loggedInUser",
                JSON.stringify(data.user)
            );

            document
                .getElementById("selectionStudentName")
                .textContent =
                data.user.name;

            hideAllPages();

            document
                .getElementById("examSelectionPage")
                .classList.remove("hidden");

            document
                .getElementById("loginForm")
                .reset();

        } catch (error) {

            console.error(error);

            errorElement.textContent =
                "Unable to connect to the server.";

        }

        loginButton.disabled = false;
        loginButton.textContent = "Login";

    });


// =====================================================
// CHECK LOGIN
// =====================================================

function checkLoggedInUser() {

    const savedUser =
        localStorage.getItem("loggedInUser");

    if (savedUser) {

        try {

            currentUser =
                JSON.parse(savedUser);

            document
                .getElementById("selectionStudentName")
                .textContent =
                currentUser.name;

            hideAllPages();

            document
                .getElementById("examSelectionPage")
                .classList.remove("hidden");

        } catch (error) {

            localStorage.removeItem(
                "loggedInUser"
            );

            showLogin();

        }

    } else {

        showLogin();

    }

}


// =====================================================
// SELECT EXAM
// =====================================================

function selectExam(examName) {

    currentExam = examName;

    currentQuestionIndex = 0;

    selectedAnswers = {};

    hideAllPages();

    document
        .getElementById("loadingPage")
        .classList.remove("hidden");

    setTimeout(() => {

        startExam(examName);

    }, 800);

}


// =====================================================
// START EXAM
// =====================================================

function startExam(examName) {

    hideAllPages();

    document
        .getElementById("examPage")
        .classList.remove("hidden");

    document
        .getElementById("examTitle")
        .textContent =
        examName + " Examination";

    document
        .getElementById("welcomeText")
        .textContent =
        "Welcome, " + currentUser.name;

    document
        .getElementById("totalQuestions")
        .textContent =
        examQuestions[examName].length;

    timeRemaining = 15 * 60;

    startTimer();

    createQuestionNumbers();

    displayQuestion();

}


// =====================================================
// TIMER
// =====================================================

function startTimer() {

    clearInterval(timerInterval);

    updateTimer();

    timerInterval = setInterval(() => {

        timeRemaining--;

        updateTimer();

        if (timeRemaining <= 0) {

            clearInterval(timerInterval);

            alert(
                "Time is over. Your exam will be submitted automatically."
            );

            submitExam(true);

        }

    }, 1000);

}


function updateTimer() {

    const minutes =
        Math.floor(timeRemaining / 60);

    const seconds =
        timeRemaining % 60;

    document
        .getElementById("timer")
        .textContent =
        String(minutes).padStart(2, "0")
        + ":"
        + String(seconds).padStart(2, "0");

}


// =====================================================
// DISPLAY QUESTION
// =====================================================

function displayQuestion() {

    const questions =
        examQuestions[currentExam];

    const question =
        questions[currentQuestionIndex];

    document
        .getElementById("questionNumber")
        .textContent =
        currentQuestionIndex + 1;

    document
        .getElementById("category")
        .textContent =
        currentExam;

    document
        .getElementById("questionText")
        .textContent =
        question.question;

    const container =
        document.getElementById(
            "optionsContainer"
        );

    container.innerHTML = "";

    question.options.forEach(
        (option, index) => {

            const label =
                document.createElement("label");

            label.className = "option";

            if (
                selectedAnswers[
                    currentQuestionIndex
                ] === index
            ) {

                label.classList.add("selected");

            }

            label.innerHTML = `
                <input
                    type="radio"
                    name="answer"
                    value="${index}"
                    ${selectedAnswers[currentQuestionIndex] === index ? "checked" : ""}
                >

                ${option}
            `;

            label.addEventListener(
                "click",
                () => {

                    selectedAnswers[
                        currentQuestionIndex
                    ] = index;

                    displayQuestion();

                }
            );

            container.appendChild(label);

        }
    );

    document
        .getElementById("previousBtn")
        .disabled =
        currentQuestionIndex === 0;

    document
        .getElementById("nextBtn")
        .disabled =
        currentQuestionIndex ===
        questions.length - 1;

    updateQuestionNumbers();

}


// =====================================================
// QUESTION NUMBERS
// =====================================================

function createQuestionNumbers() {

    const container =
        document.getElementById(
            "questionNumbers"
        );

    container.innerHTML = "";

    const questions =
        examQuestions[currentExam];

    questions.forEach(
        (_, index) => {

            const button =
                document.createElement("button");

            button.className =
                "question-number";

            button.textContent =
                index + 1;

            button.addEventListener(
                "click",
                () => {

                    currentQuestionIndex =
                        index;

                    displayQuestion();

                }
            );

            container.appendChild(button);

        }
    );

}


function updateQuestionNumbers() {

    const buttons =
        document.querySelectorAll(
            ".question-number"
        );

    buttons.forEach(
        (button, index) => {

            button.classList.remove(
                "current"
            );

            button.classList.remove(
                "answered"
            );

            if (
                index ===
                currentQuestionIndex
            ) {

                button.classList.add(
                    "current"
                );

            }

            if (
                selectedAnswers[index] !==
                undefined
            ) {

                button.classList.add(
                    "answered"
                );

            }

        }
    );

}


// =====================================================
// NEXT QUESTION
// =====================================================

function nextQuestion() {

    const questions =
        examQuestions[currentExam];

    if (
        currentQuestionIndex <
        questions.length - 1
    ) {

        currentQuestionIndex++;

        displayQuestion();

    }

}


// =====================================================
// PREVIOUS QUESTION
// =====================================================

function previousQuestion() {

    if (currentQuestionIndex > 0) {

        currentQuestionIndex--;

        displayQuestion();

    }

}


// =====================================================
// SUBMIT EXAM
// =====================================================

function submitExam(autoSubmit = false) {

    clearInterval(timerInterval);

    const questions =
        examQuestions[currentExam];

    let correct = 0;

    let wrong = 0;

    let unanswered = 0;

    questions.forEach(
        (question, index) => {

            const selected =
                selectedAnswers[index];

            if (selected === undefined) {

                unanswered++;

            } else if (
                selected === question.answer
            ) {

                correct++;

            } else {

                wrong++;

            }

        }
    );

    if (!autoSubmit) {

        const confirmed =
            confirm(
                "Are you sure you want to submit the exam?"
            );

        if (!confirmed) {

            startTimer();

            return;

        }

    }

    const percentage =
        Math.round(
            (correct / questions.length) * 100
        );

    document
        .getElementById("resultName")
        .textContent =
        currentUser.name;

    document
        .getElementById("resultExam")
        .textContent =
        currentExam;

    document
        .getElementById("score")
        .textContent =
        percentage + "%";

    document
        .getElementById("correctAnswers")
        .textContent =
        correct;

    document
        .getElementById("wrongAnswers")
        .textContent =
        wrong;

    document
        .getElementById("unansweredQuestions")
        .textContent =
        unanswered;

    let message = "";

    if (percentage >= 80) {

        message = "Excellent! 🎉";

    } else if (percentage >= 60) {

        message = "Very Good! 👍";

    } else if (percentage >= 40) {

        message = "Good effort! Keep learning.";

    } else {

        message = "Keep practicing and try again.";

    }

    document
        .getElementById("resultMessage")
        .textContent =
        message;

    hideAllPages();

    document
        .getElementById("resultPage")
        .classList.remove("hidden");

}


// =====================================================
// BACK TO EXAM SELECTION
// =====================================================

function backToSelection() {

    clearInterval(timerInterval);

    currentExam = null;

    selectedAnswers = {};

    hideAllPages();

    document
        .getElementById("examSelectionPage")
        .classList.remove("hidden");

}


// =====================================================
// LOGOUT
// =====================================================

function logout() {

    clearInterval(timerInterval);

    currentUser = null;

    currentExam = null;

    selectedAnswers = {};

    localStorage.removeItem(
        "loggedInUser"
    );

    document
        .getElementById("loginForm")
        .reset();

    hideAllPages();

    document
        .getElementById("loginPage")
        .classList.remove("hidden");

}


// =====================================================
// START APPLICATION
// =====================================================

document.addEventListener(
    "DOMContentLoaded",
    () => {

        checkLoggedInUser();

    }
);