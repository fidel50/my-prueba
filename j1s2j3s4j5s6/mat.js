document.oncontextmenu=function(){return false};
// Banco de 40 preguntas de aritmética para la ESFM
        const questionBank = [
  {
    "question": "¿Cuál es el MCD de 105 y 140?",
    "options": ["25", "35", "45", "70"],
    "correct": 1,
    "explanation": "105 = 3 × 5 × 7; 140 = 2² × 5 × 7. Factores comunes: 5 × 7 = 35."
  },
  {
    "question": "¿Cuál es el mcm de 18, 24 y 36?",
    "options": ["36", "72", "108", "144"],
    "correct": 1,
    "explanation": "18 = 2 × 3², 24 = 2³ × 3, 36 = 2² × 3². mcm toma los máximos exponentes: 2³ × 3² = 8 × 9 = 72."
  },
  {
    "question": "¿Cuánto es (3/4 ÷ 2/5) × (1/3)?",
    "options": ["5/8", "5/6", "1/2", "3/10"],
    "correct": 0,
    "explanation": "(3/4) ÷ (2/5) = (3/4) × (5/2) = 15/8. Luego, (15/8) × (1/3) = 15/24 = 5/8."
  },
  {
    "question": "Un artículo sube un 20% y luego baja un 20%. Si el precio original era $100, ¿cuál es el precio final?",
    "options": ["$96", "$100", "$104", "$98"],
    "correct": 0,
    "explanation": "Tras subir 20%: 100 × 1.20 = $120. Luego baja 20%: 120 × 0.80 = $96."
  },
  {
    "question": "¿Cuánto es 2⁻³ + 3⁻²?",
    "options": ["17/72", "1/6", "5/18", "11/36"],
    "correct": 0,
    "explanation": "2⁻³ = 1/8, 3⁻² = 1/9. Mínimo común denominador: 72. 1/8 = 9/72, 1/9 = 8/72. Suma: 17/72."
  },
  {
    "question": "¿Qué fracción irreducible equivale a 0.125?",
    "options": ["1/6", "1/8", "1/12", "3/25"],
    "correct": 1,
    "explanation": "0.125 = 125/1000 = 1/8 al simplificar."
  },
  {
    "question": "¿Cuál es el valor de √(64 ÷ 4) × 3?",
    "options": ["8", "12", "16", "24"],
    "correct": 1,
    "explanation": "64 ÷ 4 = 16; √16 = 4; 4 × 3 = 12."
  },
  {
    "question": "¿Cuánto es (5 + 2 × 3)² – 7²?",
    "options": ["60", "72", "84", "100"],
    "correct": 1,
    "explanation": "2 × 3 = 6; 5 + 6 = 11; 11² = 121; 7² = 49; 121 – 49 = 72."
  },
  {
    "question": "Un tanque está lleno hasta 3/5. Si se usan 12 litros y ahora está a 1/2, ¿cuál es la capacidad total del tanque?",
    "options": ["90 L", "100 L", "120 L", "150 L"],
    "correct": 2,
    "explanation": "3/5 – 1/2 = 6/10 – 5/10 = 1/10. Esa fracción equivale a 12 L. Entonces, 1/10 del total = 12 → total = 120 L."
  },
  {
    "question": "¿Cuánto es 1 ÷ (1/2 + 1/3)?",
    "options": ["5/6", "6/5", "1/5", "5"],
    "correct": 1,
    "explanation": "1/2 + 1/3 = 5/6. Entonces, 1 ÷ (5/6) = 6/5."
  },
  {
    "question": "¿Cuál es el 120% de 75?",
    "options": ["80", "85", "90", "95"],
    "correct": 2,
    "explanation": "120% = 1.2; 1.2 × 75 = 90."
  },
  {
    "question": "Si el mcm de dos números es 60 y su MCD es 6, ¿cuál es su producto?",
    "options": ["300", "360", "420", "480"],
    "correct": 1,
    "explanation": "Para dos números a y b: a × b = mcm(a,b) × MCD(a,b) = 60 × 6 = 360."
  },
  {
    "question": "¿Cuánto es (2⁴ × 3²) ÷ (2² × 3)?",
    "options": ["12", "18", "24", "36"],
    "correct": 0,
    "explanation": "2⁴ ÷ 2² = 2² = 4; 3² ÷ 3 = 3; 4 × 3 = 12."
  },
  {
    "question": "¿Cuál es el resultado de √(16 + 9) – √(25 – 16)?",
    "options": ["0", "1", "2", "3"],
    "correct": 2,
    "explanation": "√(25) = 5; √(9) = 3; 5 – 3 = 2."
  },
  {
    "question": "¿Cuánto es el 35% de 80 más el 20% de 50?",
    "options": ["32", "36", "38", "42"],
    "correct": 2,
    "explanation": "35% de 80 = 0.35 × 80 = 28; 20% de 50 = 10; 28 + 10 = 38."
  },
  {
    "question": "¿Cuál es el menor número que al dividirlo entre 6, 8 y 10 deja residuo 2 en cada caso?",
    "options": ["122", "242", "362", "482"],
    "correct": 0,
    "explanation": "Buscamos el mcm(6,8,10) + 2. mcm = 120 → 120 + 2 = 122."
  },
  {
    "question": "¿Cuánto es (0.75 ÷ 0.25) × (2/3)?",
    "options": ["1", "2", "3", "4"],
    "correct": 1,
    "explanation": "0.75 ÷ 0.25 = 3; 3 × (2/3) = 2."
  },
  {
    "question": "¿Cuál es el valor de (–2)⁴ – (–3)²?",
    "options": ["5", "7", "10", "13"],
    "correct": 1,
    "explanation": "(–2)⁴ = 16 (exponente par); (–3)² = 9; 16 – 9 = 7."
  },
  {
    "question": "Si a/5 = b/7 y a + b = 60, ¿cuánto vale a?",
    "options": ["20", "25", "30", "35"],
    "correct": 1,
    "explanation": "La razón a:b = 5:7. Total de partes = 5 + 7 = 12. a = (5/12) × 60 = 25."
  },
  {
    "question": "¿Cuánto es 1.2 × 10⁴ – 3.5 × 10³?",
    "options": ["7500", "8500", "9500", "10500"],
    "correct": 1,
    "explanation": "1.2 × 10⁴ = 12,000; 3.5 × 10³ = 3,500; 12,000 – 3,500 = 8,500."
  },
  {
    "question": "¿Cuál es el MCD de 126, 168 y 210?",
    "options": ["21", "42", "63", "84"],
    "correct": 1,
    "explanation": "126 = 2 × 3² × 7; 168 = 2³ × 3 × 7; 210 = 2 × 3 × 5 × 7. Factores comunes con menor exponente: 2 × 3 × 7 = 42."
  },
  {
    "question": "¿Cuánto es (3/4)² ÷ (9/16)?",
    "options": ["1", "3/4", "4/3", "9/16"],
    "correct": 0,
    "explanation": "(3/4)² = 9/16; (9/16) ÷ (9/16) = 1."
  },
  {
    "question": "Un número aumentado en su 40% da 98. ¿Cuál es el número original?",
    "options": ["60", "65", "70", "75"],
    "correct": 2,
    "explanation": "x + 0.4x = 1.4x = 98 → x = 98 ÷ 1.4 = 70."
  },
  {
    "question": "¿Cuánto es √(0.04) + √(0.09)?",
    "options": ["0.5", "0.6", "0.7", "0.8"],
    "correct": 0,
    "explanation": "√0.04 = 0.2; √0.09 = 0.3; 0.2 + 0.3 = 0.5."
  },
  {
    "question": "¿Cuánto es 7! ÷ (5! × 2!)?",
    "options": ["14", "21", "28", "35"],
    "correct": 1,
    "explanation": "7! = 5040, 5! = 120, 2! = 2. Entonces: 5040 ÷ (120 × 2) = 5040 ÷ 240 = 21."
  },
  {
    "question": "Si el 20% de x es igual al 30% de 40, ¿cuánto vale x?",
    "options": ["50", "60", "70", "80"],
    "correct": 1,
    "explanation": "0.2x = 0.3 × 40 = 12 → x = 12 ÷ 0.2 = 60."
  },
  {
    "question": "¿Cuánto es (1/2 + 1/3 + 1/6)²?",
    "options": ["0", "1", "9/36", "4/9"],
    "correct": 1,
    "explanation": "1/2 + 1/3 + 1/6 = 3/6 + 2/6 + 1/6 = 6/6 = 1. 1² = 1."
  },
  {
    "question": "¿Cuál es el mayor número que divide a 84, 126 y 210 sin dejar residuo?",
    "options": ["21", "42", "63", "84"],
    "correct": 1,
    "explanation": "Es el MCD(84,126,210). Factorizaciones: 84=2²×3×7, 126=2×3²×7, 210=2×3×5×7 → MCD=2×3×7=42."
  },
  {
    "question": "¿Cuánto es 2.5 × (4/5) ÷ 0.2?",
    "options": ["5", "10", "15", "20"],
    "correct": 1,
    "explanation": "2.5 × (4/5) = 2.5 × 0.8 = 2; 2 ÷ 0.2 = 10."
  },
  {
    "question": "Si a : b = 3 : 4 y b : c = 2 : 5, ¿cuál es la razón a : c?",
    "options": ["3:10", "6:5", "4:15", "3:5"],
    "correct": 0,
    "explanation": "Para unificar b, multiplicamos: a:b = 3:4 = 6:8; b:c = 2:5 = 8:20 → a:c = 6:20 = 3:10."
  },
  {
    "question": "¿Cuánto es el 150% de 0.6?",
    "options": ["0.6", "0.75", "0.9", "1.2"],
    "correct": 2,
    "explanation": "150% = 1.5; 1.5 × 0.6 = 0.9."
  },
  {
    "question": "¿Cuál es el valor de (–1)¹⁰⁰ + (–1)¹⁰¹?",
    "options": ["–2", "–1", "0", "1"],
    "correct": 2,
    "explanation": "(–1)¹⁰⁰ = 1 (exponente par); (–1)¹⁰¹ = –1 (exponente impar); 1 + (–1) = 0."
  },
  {
    "question": "Un número disminuido en su 25% da 60. ¿Cuál es el número original?",
    "options": ["70", "75", "80", "90"],
    "correct": 2,
    "explanation": "x – 0.25x = 0.75x = 60 → x = 60 ÷ 0.75 = 80."
  },
  {
    "question": "¿Cuánto es √(144/25) ÷ (6/5)?",
    "options": ["1", "2", "5/6", "6/5"],
    "correct": 1,
    "explanation": "√(144/25) = 12/5. Luego, (12/5) ÷ (6/5) = (12/5) × (5/6) = 12/6 = 2."
  },
  {
    "question": "Si el mcm de dos números primos distintos es 143, ¿cuáles son esos números?",
    "options": ["11 y 13", "7 y 21", "13 y 17", "11 y 17"],
    "correct": 0,
    "explanation": "143 = 11 × 13. Ambos son primos, y el mcm de dos primos distintos es su producto."
  },
  {
    "question": "¿Cuánto es (0.125)⁻¹?",
    "options": ["4", "6", "8", "16"],
    "correct": 2,
    "explanation": "0.125 = 1/8. El exponente –1 indica el recíproco: (1/8)⁻¹ = 8."
  },
  {
    "question": "¿Cuál es el resultado de (–3)³ + (–2)⁴?",
    "options": ["–11", "–7", "5", "11"],
    "correct": 0,
    "explanation": "(–3)³ = –27; (–2)⁴ = 16; –27 + 16 = –11."
  },
  {
    "question": "¿Cuánto es (5/6 – 1/4) ÷ (1/12)?",
    "options": ["5", "6", "7", "8"],
    "correct": 2,
    "explanation": "5/6 – 1/4 = 10/12 – 3/12 = 7/12. Luego, (7/12) ÷ (1/12) = (7/12) × 12 = 7."
  },
  {
    "question": "Si 3 obreros hacen una obra en 12 días, ¿cuántos días tardarán 9 obreros (asumiendo ritmo constante)?",
    "options": ["3", "4", "6", "9"],
    "correct": 1,
    "explanation": "Es proporcionalidad inversa: 3 × 12 = 9 × d → 36 = 9d → d = 4."
  },
  {
    "question": "¿Cuál es el 0.5% de 4000?",
    "options": ["10", "20", "40", "200"],
    "correct": 1,
    "explanation": "0.5% = 0.005; 0.005 × 4000 = 20."
  }
];

        // Variables del juego
        let currentQuestionIndex = 0;
        let score = 0;
        let timer;
        let timeLeft = 60;
        let selectedQuestions = [];
        let userAnswers = Array(20).fill(null);
        let gameActive = false;

        // Elementos del DOM
        const startScreen = document.getElementById('start-screen');
        const gameScreen = document.getElementById('game-screen');
        const resultsScreen = document.getElementById('results-screen');
        const startBtn = document.getElementById('start-btn');
        const endBtn = document.getElementById('end-btn');
        const nextBtn = document.getElementById('next-btn');
        const restartBtn = document.getElementById('restart-btn');
        const questionText = document.getElementById('question-text');
        const optionsContainer = document.getElementById('options-container');
        const feedback = document.getElementById('feedback');
        const timerDisplay = document.getElementById('timer');
        const currentQuestionDisplay = document.getElementById('current-question');
        const currentScoreDisplay = document.getElementById('current-score');
        const progressFill = document.getElementById('progress-fill');
        const finalScoreDisplay = document.getElementById('final-score');
        const totalAnsweredDisplay = document.getElementById('total-answered');
        const correctAnswersDisplay = document.getElementById('correct-answers');
        const incorrectAnswersDisplay = document.getElementById('incorrect-answers');
        const unansweredDisplay = document.getElementById('unanswered');
        const percentageDisplay = document.getElementById('percentage');

        // Inicializar eventos
        startBtn.addEventListener('click', startGame);
        endBtn.addEventListener('click', endGame);
        nextBtn.addEventListener('click', nextQuestion);
        restartBtn.addEventListener('click', restartGame);

        // Función para iniciar el juego
        function startGame() {
            // Seleccionar 20 preguntas aleatorias del banco
            selectedQuestions = [...questionBank]
                .sort(() => Math.random() - 0.5)
                .slice(0, 20);
            
            // Reiniciar variables
            currentQuestionIndex = 0;
            score = 0;
            userAnswers = Array(20).fill(null);
            
            // Cambiar pantallas
            startScreen.classList.remove('active-screen');
            gameScreen.classList.add('active-screen');
            resultsScreen.classList.remove('active-screen');
            
            // Iniciar primera pregunta
            loadQuestion();
            gameActive = true;
        }

        // Función para cargar una pregunta
        function loadQuestion() {
            // Reiniciar temporizador
            timeLeft = 60;
            updateTimerDisplay();
            
            // Detener temporizador anterior si existe
            if (timer) clearInterval(timer);
            
            // Iniciar nuevo temporizador
            timer = setInterval(updateTimer, 1000);
            
            // Actualizar indicadores
            currentQuestionDisplay.textContent = currentQuestionIndex + 1;
            currentScoreDisplay.textContent = score;
            progressFill.style.width = `${(currentQuestionIndex / 20) * 100}%`;
            
            // Cargar pregunta actual
            const currentQuestion = selectedQuestions[currentQuestionIndex];
            questionText.innerHTML = currentQuestion.question;
            
            // Limpiar opciones anteriores
            optionsContainer.innerHTML = '';
            
            // Crear nuevas opciones
            const optionLetters = ['A', 'B', 'C', 'D'];
            currentQuestion.options.forEach((option, index) => {
                const optionElement = document.createElement('div');
                optionElement.classList.add('option');
                optionElement.innerHTML = `
                    <div class="option-letter">${optionLetters[index]}</div>
                    <div class="option-text">${option}</div>
                `;
                
                optionElement.addEventListener('click', () => selectOption(index));
                
                // Si ya había una respuesta seleccionada para esta pregunta
                if (userAnswers[currentQuestionIndex] === index) {
                    optionElement.classList.add('selected');
                    
                    // Si ya se mostró la respuesta correcta
                    if (userAnswers[currentQuestionIndex] !== null && !gameActive) {
                        if (index === currentQuestion.correct) {
                            optionElement.classList.add('correct');
                        } else {
                            optionElement.classList.add('incorrect');
                        }
                    }
                }
                
                optionsContainer.appendChild(optionElement);
            });
            
            // Limpiar retroalimentación
            feedback.classList.remove('correct', 'incorrect');
            feedback.textContent = '';
            feedback.style.display = 'none';
            
            // Deshabilitar siguiente pregunta hasta que se responda
            nextBtn.disabled = true;
            
            // Si ya había una respuesta para esta pregunta
            if (userAnswers[currentQuestionIndex] !== null) {
                showFeedback();
                nextBtn.disabled = false;
            }
        }

        // Función para seleccionar una opción
        function selectOption(optionIndex) {
            if (!gameActive) return;
            
            // Desmarcar todas las opciones
            document.querySelectorAll('.option').forEach(option => {
                option.classList.remove('selected');
            });
            
            // Marcar la opción seleccionada
            const selectedOption = document.querySelectorAll('.option')[optionIndex];
            selectedOption.classList.add('selected');
            
            // Guardar respuesta del usuario
            userAnswers[currentQuestionIndex] = optionIndex;
            
            // Mostrar retroalimentación
            showFeedback();
            
            // Habilitar siguiente pregunta
            nextBtn.disabled = false;
        }

        // Función para mostrar retroalimentación
        function showFeedback() {
            const currentQuestion = selectedQuestions[currentQuestionIndex];
            const userAnswer = userAnswers[currentQuestionIndex];
            
            // Marcar respuesta correcta e incorrecta
            document.querySelectorAll('.option').forEach((option, index) => {
                if (index === currentQuestion.correct) {
                    option.classList.add('correct');
                } else if (index === userAnswer && index !== currentQuestion.correct) {
                    option.classList.add('incorrect');
                }
            });
            
            // Mostrar mensaje de retroalimentación
            if (userAnswer === currentQuestion.correct) {
                feedback.textContent = `¡Correcto! ${currentQuestion.explanation}`;
                feedback.classList.remove('incorrect');
                feedback.classList.add('correct');
                
                // Incrementar puntuación si es la primera vez que responde correctamente
                if (gameActive) {
                    score += 5;
                    currentScoreDisplay.textContent = score;
                }
            } else {
                feedback.textContent = `Incorrecto. La respuesta correcta es: ${currentQuestion.options[currentQuestion.correct]}. ${currentQuestion.explanation}`;
                feedback.classList.remove('correct');
                feedback.classList.add('incorrect');
            }
            
            feedback.style.display = 'block';
            
            // Detener el juego para esta pregunta
            gameActive = false;
            clearInterval(timer);
        }

        // Función para actualizar el temporizador
        function updateTimer() {
            timeLeft--;
            updateTimerDisplay();
            
            if (timeLeft <= 0) {
                clearInterval(timer);
                
                // Si no se ha respondido, marcar como no respondida
                if (userAnswers[currentQuestionIndex] === null) {
                    userAnswers[currentQuestionIndex] = -1; // -1 significa no respondida
                    showFeedback();
                    nextBtn.disabled = false;
                }
            }
        }

        // Función para actualizar la visualización del temporizador
        function updateTimerDisplay() {
            const minutes = Math.floor(timeLeft / 60);
            const seconds = timeLeft % 60;
            timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
            
            // Cambiar color cuando quede poco tiempo
            if (timeLeft <= 10) {
                timerDisplay.style.color = '#e53935';
            } else {
                timerDisplay.style.color = '#283593';
            }
        }

        // Función para ir a la siguiente pregunta
        function nextQuestion() {
            currentQuestionIndex++;
            
            if (currentQuestionIndex < 20) {
                gameActive = true;
                loadQuestion();
            } else {
                endGame();
            }
        }

        // Función para terminar el juego
        function endGame() {
            clearInterval(timer);
            
            // Cambiar a pantalla de resultados
            gameScreen.classList.remove('active-screen');
            resultsScreen.classList.add('active-screen');
            
            // Calcular resultados
            let correctCount = 0;
            let incorrectCount = 0;
            let unansweredCount = 0;
            
            for (let i = 0; i < 20; i++) {
                if (userAnswers[i] === null || userAnswers[i] === -1) {
                    unansweredCount++;
                } else if (userAnswers[i] === selectedQuestions[i].correct) {
                    correctCount++;
                } else {
                    incorrectCount++;
                }
            }
            
            // Actualizar puntuación final (5 puntos por respuesta correcta)
            const finalScore = correctCount * 5;
            
            // Actualizar elementos de resultados
            finalScoreDisplay.textContent = finalScore;
            totalAnsweredDisplay.textContent = `${20 - unansweredCount}/20`;
            correctAnswersDisplay.textContent = correctCount;
            incorrectAnswersDisplay.textContent = incorrectCount;
            unansweredDisplay.textContent = unansweredCount;
            
            const percentage = ((correctCount / 20) * 100).toFixed(1);
            percentageDisplay.textContent = `${percentage}%`;
        }

        // Función para reiniciar el juego
        function restartGame() {
            startScreen.classList.add('active-screen');
            resultsScreen.classList.remove('active-screen');
            gameScreen.classList.remove('active-screen');
        }

        // Inicializar MathJax para renderizar LaTeX
        MathJax = {
            tex: {
                inlineMath: [['$', '$'], ['\\(', '\\)']]
            },
            startup: {
                pageReady: () => {
                    return MathJax.startup.defaultPageReady();
                }
            }
        };