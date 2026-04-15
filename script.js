const allQuestions = [
    // Arifmetik ketma-ketlik (7 ta)
    { q: "2, 5, 10, 17, 26, ?", o: ["35", "37", "39", "40"], a: "37" },
    { q: "1, 1, 2, 3, 5, 8, ?", o: ["11", "12", "13", "15"], a: "13" },
    { q: "3, 6, 12, 24, ?", o: ["36", "42", "48", "60"], a: "48" },
    { q: "100, 81, 64, 49, ?", o: ["36", "30", "40", "25"], a: "36" },
    { q: "8, 27, 64, 125, ?", o: ["150", "196", "216", "256"], a: "216" },
    { q: "5, 11, 23, 47, ?", o: ["90", "93", "95", "99"], a: "95" },
    { q: "1, 4, 9, 16, 25, ?", o: ["32", "36", "40", "42"], a: "36" },

    // Harfiy ketma-ketlik (7 ta)
    { q: "A, C, E, G, ?", o: ["J", "I", "K", "H"], a: "I" },
    { q: "Z, Y, X, W, ?", o: ["U", "V", "T", "S"], a: "V" },
    { q: "A, Z, B, Y, C, ?", o: ["W", "X", "V", "U"], a: "X" },
    { q: "B, E, H, K, ?", o: ["M", "N", "O", "L"], a: "N" },
    { q: "D, Sh, Ch, P, J, Sh, ?", o: ["Y", "Ya", "B", "P"], a: "Y" },
    { q: "B, I, U, T, B, ?", o: ["E", "O", "Y", "S"], a: "O" },
    { q: "Q, B, Y, ?", o: ["K", "Q", "P", "M"], a: "K" },

    // So'z mantiqlari (7 ta)
    { q: "Kitob : O'qish = Qalam : ?", o: ["Chizish", "Yozish", "O'chirish", "Qog'oz"], a: "Yozish" },
    { q: "Sovuq : Muz = Issiq : ?", o: ["Quyosh", "Olov", "Issiqlik", "Qaynoq"], a: "Olov" },
    { q: "Qush : Osmon = Baliq : ?", o: ["Havo", "Suv", "Dengiz", "Okean"], a: "Suv" },
    { q: "Soat : Vaqt = Termometr : ?", o: ["Daraja", "Issiq", "Harorat", "Sovuq"], a: "Harorat" },
    { q: "Shifokor : Kasal = O'qituvchi : ?", o: ["Maktab", "Kitob", "O'quvchi", "Dars"], a: "O'quvchi" },
    { q: "Osmon : Moviy = Maysa : ?", o: ["Yashil", "Sariq", "Qizil", "Jigarrang"], a: "Yashil" },
    { q: "Ko'z : Ko'rish = Quloq : ?", o: ["Gapirish", "Eshitish", "Hissiyot", "Sezish"], a: "Eshitish" },

    // Shaklli/Abstrakt mantiq (7 ta)
    { q: "Agar 'A = 1', 'B = 2' bo'lsa, 'CAB' ning yig'indisi nechaga teng?", o: ["5", "6", "7", "8"], a: "6" },
    { q: "🔴🔵🔴🔵🔴?", o: ["🔴", "🔵", "🟡", "🟢"], a: "🔵" },
    { q: "🔺 = 3, ⬛ = 4, ⬟ = 5, ⬡ = ?", o: ["5", "6", "7", "8"], a: "6" },
    { q: "Mantiqni toping: 111=3, 222=6, 333=9, 444=?", o: ["10", "11", "12", "13"], a: "12" },
    { q: "Soat 06:00 da soat va minut millari orasidagi burchak necha gradus?", o: ["90", "180", "270", "360"], a: "180" },
    { q: "⚪⚫⚪⚫⚪?", o: ["⚫", "⚪", "🔘", "🔴"], a: "⚫" },
    { q: "Ertadan keyingi kun chorshanba bo'lsa, kechadan oldingi kun nima bo'lgan?", o: ["Juma", "Shanba", "Yakshanba", "Dushanba"], a: "Shanba" },

    // Qatorga mos kelmaydigan (5 ta)
    { q: "Qaysi biri qatorga mos kelmaydi? Olma, Nok, Banan, Sabzi", o: ["Olma", "Nok", "Banan", "Sabzi"], a: "Sabzi" },
    { q: "Qaysi biri qatorga mos kelmaydi? Kvadrat, Uchburchak, Aylana, Kub", o: ["Kvadrat", "Uchburchak", "Aylana", "Kub"], a: "Kub" },
    { q: "Qaysi biri qatorga mos kelmaydi? Toshkent, Samarqand, Buxoro, Qozog'iston", o: ["Toshkent", "Samarqand", "Buxoro", "Qozog'iston"], a: "Qozog'iston" },
    { q: "Qaysi biri ortiqcha? 2, 4, 6, 9", o: ["2", "4", "6", "9"], a: "9" },
    { q: "Qaysi biri ortiqcha? Mashina, Avtobus, Kema, Poyezd", o: ["Mashina", "Avtobus", "Kema", "Poyezd"], a: "Kema" },

    // Matematik topishmoqlar (7 ta)
    { q: "Qalam va o'chirg'ich birgalikda 110 so'm turadi. Qalam o'chirg'ichdan 100 so'm qimmat. O'chirg'ich necha so'm turadi?", o: ["5", "10", "15", "20"], a: "5" },
    { q: "5 stolda 5 ta olma bor edi. Siz 3 tasini oldingiz. Sizda nechta olma bor?", o: ["2", "3", "5", "8"], a: "3" },
    { q: "Uchta mushuk uchta sichqonni ushlash uchun uch daqiqa vaqt sarflaydi. 100 ta sichqonni 100 daqiqada ushlash uchun nechta mushuk kerak?", o: ["3", "10", "33", "100"], a: "3" },
    { q: "G'ishtning og'irligi 1 kg va yana yarim g'ishtga teng. G'ishtning umumiy og'irligi qancha?", o: ["1.5 kg", "2 kg", "2.5 kg", "3 kg"], a: "2 kg" },
    { q: "2 ta ot va 2 ta itda jami nechta oyoq bor?", o: ["12", "14", "16", "18"], a: "16" },
    { q: "8 ta '8' raqami yordamida qanday qilib 1000 ni hosil qilish mumkin?", o: ["888+88+8+8+8", "888+88+88+8", "Boshqa", "Mumkin emas"], a: "888+88+8+8+8" },
    { q: "Otasi va o'g'lining yoshlari yig'indisi 66 yosh. Otasining yoshi o'g'lining yoshi teskari yozilganiga teng. Ular necha yoshda bo'lishi mumkin?", o: ["51 va 15", "60 va 06", "42 va 24", "Barchasi to'g'ri"], a: "Barchasi to'g'ri" }
];

let testQuestions = [];
let currentIndex = 0;
let correctAnswers = 0;

const appDiv = document.getElementById('app');

function init() {
    renderStartScreen();
}

function shuffleArray(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

function startTest() {
    // Random 15 ta savolni tanlash
    const shuffled = shuffleArray(allQuestions);
    testQuestions = shuffled.slice(0, 15);
    
    // Har bir savolning variantlarini ham aralashtiramiz
    testQuestions = testQuestions.map(obj => {
        return {
            ...obj,
            o: shuffleArray(obj.o)
        }
    });

    currentIndex = 0;
    correctAnswers = 0;
    renderQuestionScreen();
}

function renderStartScreen() {
    appDiv.innerHTML = `
        <div class="text-center fade-in">
            <h1 class="mb-4 text-primary fw-bold">IQ Test</h1>
            <p class="text-muted mb-4 fs-5">
                Ushbu test mantiqiy va arifmetik fikrlash qobiliyatingizni sinovdan o'tkazadi.<br>
                Test 15 ta tasodifiy savoldan iborat. O'z bilimingizni sinashga tayyormisiz?
            </p>
            <button class="btn btn-primary btn-lg px-5 py-3 rounded-pill fw-bold shadow" onclick="startTest()">
                Testni boshlash
            </button>
        </div>
    `;
}

function renderQuestionScreen() {
    if (currentIndex >= testQuestions.length) {
        return renderResultScreen();
    }

    const currentQ = testQuestions[currentIndex];
    const progressPercent = ((currentIndex) / testQuestions.length) * 100;

    appDiv.innerHTML = `
        <div class="fade-in">
            <div class="d-flex justify-content-between align-items-center mb-3">
                <span class="text-muted fw-bold">Savol: ${currentIndex + 1} / ${testQuestions.length}</span>
            </div>
            <div class="progress mb-4">
                <div class="progress-bar" role="progressbar" style="width: ${progressPercent}%;" aria-valuenow="${progressPercent}" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            
            <h3 class="question-text">${currentQ.q}</h3>
            
            <div class="options-container mt-4">
                ${currentQ.o.map((opt, idx) => `
                    <button class="option-btn" onclick="selectOption(this, '${opt}')">
                        ${String.fromCharCode(65 + idx)}. ${opt}
                    </button>
                `).join('')}
            </div>

            <div class="text-end mt-4">
                <button class="btn btn-secondary px-4 disabled" id="nextBtn" onclick="nextQuestion()">Keyingisi</button>
            </div>
        </div>
    `;
}

let selectedAnswer = null;

window.selectOption = function(btnElement, answer) {
    // Agar oldindan tanlangan bo'lsa, uni olib tashlaymiz
    const allBtns = document.querySelectorAll('.option-btn');
    allBtns.forEach(btn => btn.classList.remove('selected'));
    
    // Yangisini belgilaymiz
    btnElement.classList.add('selected');
    selectedAnswer = answer;

    const nextBtn = document.getElementById('nextBtn');
    nextBtn.classList.remove('disabled', 'btn-secondary');
    nextBtn.classList.add('btn-primary');

    // Avtomatik o'tish uchun kichik kutish (UX uchun)
    setTimeout(() => {
        nextQuestion();
    }, 500);
}

window.nextQuestion = function() {
    if (!selectedAnswer) return;

    if (selectedAnswer === testQuestions[currentIndex].a) {
        correctAnswers++;
    }

    selectedAnswer = null;
    currentIndex++;
    renderQuestionScreen();
}

function renderResultScreen() {
    const totalScore = Math.round((correctAnswers * 100) / testQuestions.length);
    let levelText = "";
    let badgeClass = "";

    if (totalScore <= 45) {
        levelText = "Past";
        badgeClass = "level-past";
    } else if (totalScore <= 75) {
        levelText = "O'rta";
        badgeClass = "level-orta";
    } else {
        levelText = "Yuqori";
        badgeClass = "level-yuqori";
    }

    appDiv.innerHTML = `
        <div class="text-center fade-in">
            <h2 class="mb-3 text-secondary">Natijangiz</h2>
            <div class="result-score mb-2">${totalScore} IQ ball</div>
            
            <div class="mb-4">
                <span class="level-badge ${badgeClass}">${levelText} daraja</span>
            </div>

            <p class="fs-5 mb-4 text-muted">
                To'g'ri javoblar: <strong>${correctAnswers}</strong> / ${testQuestions.length}
            </p>

            <button class="btn btn-primary btn-lg px-5 py-2 rounded-pill fw-bold shadow" onclick="startTest()">
                Qayta urinish
            </button>
        </div>
    `;
}

// Initialize application
document.addEventListener("DOMContentLoaded", init);
