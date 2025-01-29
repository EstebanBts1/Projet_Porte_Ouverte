const questions = [
    {
        question: "Que signifie SLAM ?",
        choices: ["Système et Logiciels Appliqués au Management", "Solutions Logicielles et Applications Métiers", "Systèmes Localisés et Applications Mobiles"],
        correct: 1
    },
    {
        question: "Quel langage est souvent utilisé en SLAM ?",
        choices: ["Javascript", "HTML", "CSS"],
        correct: 0
    },
    {
        question: "Quelle est une tâche principale en SLAM ?",
        choices: ["Gestion des réseaux", "Développement d'applications", "Rédaction de rapports financiers"],
        correct: 1
    },
    {
        question: "Que signifie HTML ?",
        choices: ["HyperText Markup Language", "HighText Machine Language", "Hyperlink and Text Markup Language"],
        correct: 0
    },
    {
        question: "Que signifie CSS ?",
        choices: ["Computer Style Sheets", "Creative Style System", "Cascading Style Sheets"],
        correct: 2
    },
    {
        question: "Quel est le rôle principal de SQL ?",
        choices: ["Créer des interfaces utilisateur", "Manipuler des bases de données", "Configurer des serveurs"],
        correct: 1
    },
    {
        question: "Qu'est-ce qu'une boucle for ?",
        choices: ["Une structure permettant d'exécuter du code un nombre spécifique de fois","Une condition pour arrêter un programme","Une méthode pour trier des données"],
        correct: 0
    },
    {
        question: "Que signifie HTTP ?",
        choices: [
            "HyperText Transfer Protocol",
            "Hyperlink Transmission Protocol",
            "HyperTransfer Text Program"
        ],
        correct: 0
    },
    {
        question: "Quel langage est utilisé pour écrire des scripts côté serveur ?",
        choices: ["HTML", "CSS", "PHP"],
        correct: 2
    },
    {
        question: "Que signifie le mot-clé 'const' en JavaScript ?",
        choices: [
            "Déclare une variable constante qui ne peut pas être réaffectée",
            "Déclare une variable temporaire",
            "Déclare une constante globale"
        ],
        correct: 0
    },
];

let currentQuestion = 0;
Reponse_correctes=0
function loadQuestion() {
    const questionEl = document.getElementById("question");
    const choicesEl = document.getElementById("choices");

    questionEl.textContent = questions[currentQuestion].question;
    choicesEl.innerHTML = "";

    questions[currentQuestion].choices.forEach((choice, index) => {
        const button = document.createElement("button");
        button.textContent = choice;
        button.addEventListener("click", () => checkAnswer(index));
        choicesEl.appendChild(button);
    });
}

function checkAnswer(selected) {
    const correct = questions[currentQuestion].correct;
    if (selected === correct) {
        alert("Bonne réponse !");
        Reponse_correctes+=1
    } else {
        alert("Mauvaise réponse !");
    }

    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        alert("Quiz terminé !");
        alert("Vous avez "+Reponse_correctes+" réponses Correct")
        currentQuestion = 0;
        loadQuestion();
        window.location.href = `score.html?score=${Reponse_correctes}`;
    }
}

document.getElementById("next-btn").addEventListener("click", () => loadQuestion());

loadQuestion();