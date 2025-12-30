// ===== Lista de Canciones =====
const SONGS = [
    { title: "Campanilleros", artist: "Raya Real" },
    { title: "Navidad, Navidad", artist: "Luis Miguel" },
    { title: "Fun Fun Fun", artist: "Los Infantiles" },
    { title: "Santa Claus Llegó a La Ciudad", artist: "Luis Miguel" },
    { title: "Campanitas Del Lugar", artist: "Canciones De Navidad" },
    { title: "Jingle Bell Rock", artist: "Glee Cast" },
    { title: "Dime, Niño ¿de Quién Eres?", artist: "Manolo Escobar" },
    { title: "Palillos y Panderos", artist: "Niña Pastori" },
    { title: "Pastores venid", artist: "Raphael" },
    { title: "La Marimorena", artist: "Raya Real" },
    { title: "All I Want for Christmas Is You", artist: "Mariah Carey" },
    { title: "Snowman", artist: "Sia" },
    { title: "Va a Nevar", artist: "Luis Miguel" },
    { title: "Llegó La Navidad", artist: "Luis Miguel" },
    { title: "Noche De Paz", artist: "Luis Miguel" },
    { title: "La Virgen Gitana", artist: "Raya Real" },
    { title: "Carita Divina", artist: "Raya Real" },
    { title: "Ya Vienen los Reyes Magos", artist: "Coro Juvenil de Campanilleros" },
    { title: "Fuera Las Penas, Viva La Alegría", artist: "Raya Real" },
    { title: "Ay! Del Chiquirritín", artist: "Manolo Escobar" },
    { title: "A Belén Pastores - Popurrí", artist: "Isabel Pantoja" },
    { title: "El Burrito Sabanero", artist: "David Bisbal" },
    { title: "Ya Viene la Vieja", artist: "Coro Infantil Los Campanilleros" },
    { title: "Nuestra Navidad en Canal Sur", artist: "Varios Artistas" },
    { title: "Hecho Con Tus Sueños 2012", artist: "Maldita Nerea" },
    { title: "Al Niño Dios", artist: "Carlos Baute" },
    { title: "Last Christmas", artist: "Ariana Grande" },
    { title: "Santa Tell Me", artist: "Ariana Grande" },
    { title: "Merry Christmas", artist: "Ed Sheeran, Elton John" },
    { title: "Rockin' Around The Christmas Tree", artist: "Brenda Lee" },
    { title: "Todo Es Posible En Navidad", artist: "David Bisbal" },
    { title: "Adeste Fideles", artist: "Public Domain, Il Divo" },
    { title: "Frente a La Chimenea", artist: "Luis Miguel" },
    { title: "Little Drummer Boy", artist: "GENTRI" },
    { title: "Krampus Karol Of The Bells", artist: "Douglas Pipes, Brea Olinda" },
    { title: "Winter Wonderland / Here Comes Santa", artist: "Snoop Dogg, Anna Kendrick" },
    { title: "Joy To The World", artist: "Glee Cast" },
    { title: "Feliz Navidad", artist: "Glee Cast" },
    { title: "Sleigh Ride", artist: "Vindaloo Singh" },
    { title: "A Belén Yo Voy", artist: "TWICE" },
    { title: "Cosas De La Navidad", artist: "Raul Charlo" },
    { title: "Feliz Navidad", artist: "José Feliciano" },
    { title: "Campana Sobre Campana", artist: "La Oreja de Van Gogh" },
    { title: "Canción para la Navidad", artist: "José Luis Perales" },
    { title: "¡Ay! del Chiquirritin", artist: "Parchis" },
    { title: "Mis Deseos / Feliz Navidad", artist: "Michael Bublé, Thalia" },
    { title: "El Burrito De Belén", artist: "Juanes" },
    { title: "Blanca Navidad", artist: "Luis Miguel" },
    { title: "Los Peces en el Río", artist: "Manolo Escobar" },
    { title: "Adeste fideles", artist: "Laura Pausini, Patrick Williams" },
    { title: "El Burrito Sabanero", artist: "Elvis Crespo" },
    { title: "El Tamborilero", artist: "Raphael" },
    { title: "Ya Es Navidad Popurrí", artist: "Raya Real" },
    { title: "Feliz Navidad", artist: "Gwen Stefani, Mon Laferte" },
    { title: "Ya Vienen Los Reyes Magos", artist: "Burbujitas" },
    { title: "Hacia Belen va Una Burra", artist: "Villancicos" },
    { title: "Arre Borriquito", artist: "Parchis" },
    { title: "Aires De Navidad", artist: "Willie Colón" },
    { title: "Rodolfo el reno", artist: "Pica-Pica" },
    { title: "Ande La Marimorena", artist: "Manolo Escobar" },
    { title: "Fum Fum Fum", artist: "Manolo Escobar" },
    { title: "Campanas de Belén", artist: "Raya Real" },
    { title: "Dime Niño ¿De Quién Eres?", artist: "Varios Artistas" },
    { title: "Jingle Bells", artist: "Raya Real" },
    { title: "Catatumba", artist: "Varios Artistas" },
    { title: "En el Portal de Belen", artist: "Burbujitas" },
    { title: "Alegria Alegria", artist: "Burbujitas" },
    { title: "Amigos del Mundo (Happy Christmas)", artist: "Pedrito Fernández, Ricky Martin" },
    { title: "La Virgen Va Caminando", artist: "Varios Artistas" },
    { title: "Canta Rie Bebe", artist: "Los Rumberos" },
    { title: "Los Campanilleros", artist: "Los Cantaseries" },
    { title: "Será Navidad", artist: "Blas Cantó" },
    { title: "En Navidad - En directo", artist: "Rosana" },
    { title: "Esta noche es Nochebuena", artist: "Los Chunguitos" },
    { title: "A Belén Pastores", artist: "Coro Infantil Monte Mijedo" },
    { title: "Noche de Luz", artist: "Niña Pastori" },
    { title: "Esta Noche Es de Alegría", artist: "Coro Infantil De Navidad" },
    { title: "Para Pedir y Dar Posada", artist: "Coro Niños De Belen" },
    { title: "A la huella, a la huella", artist: "Raphael" },
    { title: "Navidad", artist: "Antonio Machín" },
    { title: "Mi Canción de Navidad", artist: "Marisol" },
    { title: "Hemos olvidado", artist: "Dyango" },
    { title: "Balada de navidad", artist: "Duo Dinamico" },
    { title: "La primera Navidad", artist: "Waldo De Los Ríos" },
    { title: "Una Pandereta Suena", artist: "Maria Dolores Pradera" },
    { title: "Campanas de Navidad", artist: "José Guardiola" },
    { title: "La Nana de los Pájaros", artist: "Colegio SJE" }
];

// ===== Estado del Juego =====
let gameState = {
    currentCard: [],      // Array de 15 canciones en la papeleta actual
    markedCells: [],      // Array de índices marcados (0-14)
    lineAnnounced: false, // Si ya se anunció línea
    bingoAnnounced: false,// Si ya se anunció bingo
    isLocked: false,      // Si las casillas están bloqueadas
    pendingUnmarkIndex: null // Índice pendiente de desmarcar
};

// ===== Elementos del DOM =====
const elements = {
    startScreen: document.getElementById('start-screen'),
    gameScreen: document.getElementById('game-screen'),
    bingoGrid: document.getElementById('bingo-grid'),
    generateBtn: document.getElementById('generate-btn'),
    newGameBtn: document.getElementById('new-game-btn'),
    lineModal: document.getElementById('line-modal'),
    bingoModal: document.getElementById('bingo-modal'),
    confirmModal: document.getElementById('confirm-modal'),
    lineAcceptBtn: document.getElementById('line-accept-btn'),
    bingoReviewBtn: document.getElementById('bingo-review-btn'),
    confirmYesBtn: document.getElementById('confirm-yes-btn'),
    confirmNoBtn: document.getElementById('confirm-no-btn'),
    timestamp: document.getElementById('timestamp')
};

// ===== Funciones del Juego =====

/**
 * Baraja un array usando el algoritmo Fisher-Yates
 */
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

/**
 * Genera una nueva papeleta con 15 canciones aleatorias
 */
function generateCard() {
    const shuffled = shuffleArray(SONGS);
    return shuffled.slice(0, 15);
}

/**
 * Renderiza la papeleta en el grid
 */
function renderCard() {
    elements.bingoGrid.innerHTML = '';

    gameState.currentCard.forEach((song, index) => {
        const cell = document.createElement('div');
        cell.className = 'bingo-cell';
        cell.dataset.index = index;

        // Verificar si está marcada
        if (gameState.markedCells.includes(index)) {
            cell.classList.add('marked');
        }

        // Verificar si está bloqueada
        if (gameState.isLocked) {
            cell.classList.add('locked');
        }

        cell.innerHTML = `
            <div class="song-title">${song.title}</div>
            <div class="song-artist">${song.artist}</div>
        `;

        cell.addEventListener('click', () => handleCellClick(index));
        elements.bingoGrid.appendChild(cell);
    });
}

/**
 * Maneja el clic en una celda
 */
function handleCellClick(index) {
    // No hacer nada si está bloqueado o ya hay un modal visible
    if (gameState.isLocked) return;
    if (!elements.lineModal.classList.contains('hidden') ||
        !elements.bingoModal.classList.contains('hidden') ||
        !elements.confirmModal.classList.contains('hidden')) return;

    const markedIndex = gameState.markedCells.indexOf(index);

    if (markedIndex === -1) {
        // Marcar celda (sin confirmación)
        gameState.markedCells.push(index);
        const cell = elements.bingoGrid.querySelector(`[data-index="${index}"]`);
        cell.classList.add('marked');
        checkLineAndBingo();
    } else {
        // Preguntar antes de desmarcar
        gameState.pendingUnmarkIndex = index;
        showConfirmModal();
    }
}

/**
 * Muestra el modal de confirmación para desmarcar
 */
function showConfirmModal() {
    elements.confirmModal.classList.remove('hidden');
}

/**
 * Cierra el modal de confirmación sin desmarcar
 */
function closeConfirmModal() {
    elements.confirmModal.classList.add('hidden');
    gameState.pendingUnmarkIndex = null;
}

/**
 * Confirma el desmarcado de la celda
 */
function confirmUnmark() {
    const index = gameState.pendingUnmarkIndex;
    if (index !== null) {
        const markedIndex = gameState.markedCells.indexOf(index);
        if (markedIndex !== -1) {
            gameState.markedCells.splice(markedIndex, 1);
            const cell = elements.bingoGrid.querySelector(`[data-index="${index}"]`);
            cell.classList.remove('marked');
        }
    }
    closeConfirmModal();
}

/**
 * Verifica si hay línea o bingo
 */
function checkLineAndBingo() {
    // Definir las filas (índices)
    const rows = [
        [0, 1, 2, 3, 4],     // Fila 1
        [5, 6, 7, 8, 9],     // Fila 2
        [10, 11, 12, 13, 14] // Fila 3
    ];

    // Verificar línea (solo si no se ha anunciado aún)
    if (!gameState.lineAnnounced) {
        for (const row of rows) {
            const isLineComplete = row.every(idx => gameState.markedCells.includes(idx));
            if (isLineComplete) {
                gameState.lineAnnounced = true;
                showLineModal();
                return; // Salir para no verificar bingo todavía
            }
        }
    }

    // Verificar bingo (todas las 15 marcadas)
    if (!gameState.bingoAnnounced && gameState.markedCells.length === 15) {
        gameState.bingoAnnounced = true;
        showBingoModal();
    }
}

/**
 * Muestra el modal de línea
 */
function showLineModal() {
    elements.lineModal.classList.remove('hidden');
}

/**
 * Muestra el modal de bingo
 */
function showBingoModal() {
    elements.bingoModal.classList.remove('hidden');
}

/**
 * Cierra el modal de línea
 */
function closeLineModal() {
    elements.lineModal.classList.add('hidden');
}

/**
 * Cierra el modal de bingo - permite seguir jugando para corregir errores
 */
function closeBingoModal() {
    elements.bingoModal.classList.add('hidden');

    // NO bloquear casillas - permitir corregir errores
    // Mostrar botón de nueva partida
    elements.newGameBtn.classList.remove('hidden');
}

/**
 * Inicia una nueva partida recargando la página
 */
function startNewGame() {
    location.reload();
}

/**
 * Actualiza el timestamp con la hora actual
 */
function updateTimestamp() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    elements.timestamp.textContent = `Esta papeleta fue generada a las ${hours}:${minutes}:${seconds}`;
}

function generateFirstCard() {
    gameState.currentCard = generateCard();

    // Activar modo juego (ocultar logo y copyright)
    document.body.classList.add('game-active');

    // Cambiar de pantalla
    elements.startScreen.classList.add('hidden');
    elements.gameScreen.classList.remove('hidden');

    // Renderizar
    renderCard();

    // Actualizar timestamp
    updateTimestamp();
}

// ===== Event Listeners =====
elements.generateBtn.addEventListener('click', generateFirstCard);
elements.newGameBtn.addEventListener('click', startNewGame);
elements.lineAcceptBtn.addEventListener('click', closeLineModal);
elements.bingoReviewBtn.addEventListener('click', closeBingoModal);
elements.confirmYesBtn.addEventListener('click', confirmUnmark);
elements.confirmNoBtn.addEventListener('click', closeConfirmModal);

// Prevenir zoom en móviles con doble tap
document.addEventListener('touchend', (e) => {
    const now = Date.now();
    if (now - lastTouchEnd <= 300) {
        e.preventDefault();
    }
    lastTouchEnd = now;
}, { passive: false });

let lastTouchEnd = 0;
