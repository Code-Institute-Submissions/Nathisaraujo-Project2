const gameQuestions = [
    {
        question: "What was Mario`s first name?",
        answer: [
            { option: "Jumpman", correct: true },
            { option: "Wario", correct: false },
            { option: "Carl", correct: false },
        ],
    },
    {
        question: "What was the best-selling video game so far?",
        answer: [
            { option: "Grand Theft Auto V", correct: false },
            { option: "Tetris (1989)", correct: false },
            { option: "Minecraft", correct: true },
        ],
    },
    {
        question: "How many hours lasted the longest video game session?",
        answer: [
            { option: "121 hours", correct: true },
            { option: "138 hours", correct: false },
            { option: "93 hours", correct: false },
        ],
    },
    {
        question: "When was the first esports tournament held?",
        answer: [
            { option: "1991", correct: false },
            { option: "1972", correct: true },
            { option: "1983", correct: false },
        ],
    },
    {
        question: "Check the false option",
        answer: [
            { option: "A video game was used by the U.S. Military to train tank gunners.", correct: false },
            { option: "The Gameboy Advance is the best-selling video game of all time.", correct: true },
            { option: "A dragon in Skyrim is voiced by the same man who voices Nintendo`s Mario.", correct: false },
        ],
    },
    {
        question: "Which game some democracy activists used to spread messages that criticized China`s rule of Hong Kong?",
        answer: [
            { option: "Grand Theft Auto: San Andreas", correct: false },
            { option: "The sims 4", correct: false },
            { option: "Animal Crossing: New Horizons", correct: true },
        ],
    },
    {
        question: "How many Pokemons exist?",
        answer: [
            { option: "1015", correct: true },
            { option: "983", correct: false },
            { option: "Animal Crossing: New Horizons", correct: false },
        ],
    },
    {
        question: "Robin Williams gave his daughter's name in honor of what game?",
        answer: [
            { option: "Lara - Tomb Raider", correct: false },
            { option: "Zelda - The Legend of Zelda", correct: true },
            { option: "Cereza - Bayonetta", correct: false },
        ],
    },
    {
        question: "What was the largest crossover game in history?",
        answer: [
            { option: "Final Fantasy Brave Exvius", correct: false },
            { option: "Smash Bros. Ultimate", correct: true },
            { option: "Street Fighter V", correct: false },
        ],
    },
    {
        question: "How many different weapons were usable in Borderlands 2 approximately?",
        answer: [
            { option: "17 million", correct: true },
            { option: "7 million", correct: false },
            { option: "700 thousand", correct: false },
        ],
    },
];

const question = document.getElementsByClassName("question-area");
const answer = document.getElementsByClassName("answer");
const finish = document.getElementsByClassName("finish");
const result = document.getElementsByClassName("result");
const score = document.getElementsByClassName("score");



let correctAnswers = 0;