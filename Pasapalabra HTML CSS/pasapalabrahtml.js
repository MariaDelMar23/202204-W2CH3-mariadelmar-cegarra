let questions = [

    { letter: "a", answer: ["abducir", "abandonar", "aceituna"], status: 0, question: ["CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien", "CON LA A. Dejar solo, sin atención, sin cuidados a una persona, un animal o una cosa", "CON LA A. Fruto del olivo"] },

    { letter: "b", answer: ["bingo", "baño", "boya"], status: 0, question: ["CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso", "CON LA B. Habitación de una casa o de un edificio destinada al aseo", "CON LA B. Objeto que flota en la superficie del mar y está sujeto al fondo"] },

    { letter: "c", answer: ["churumbel", "cana", "clima"], status: 0, question: ["CON LA C. Niño, crío, bebé", "CON LA C. Pelo que se vuelve blanco cuando las personas se hacen mayores", "CON LA C. Condiciones del tiempo que hay en una región"] },

    { letter: "d", answer: ["diarrea", "debate", "descanso"], status: 0, question: ["CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida", "CON LA D. Discusión o intercambio de opiniones entre varias personas sobre un tema", "CON LA D. Pausa en el trabajo o en otra actividad"] },

    { letter: "e", answer: ["ectoplasma", "entrar", "escalera"], status: 0, question: ["CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación", "CON LA E. Pasar de fuera adentro", "CON LA E. Construcción que sirve para subir y bajar de un piso a otro"] },

    { letter: "f", answer: ["facil", "fachada", "frenar"], status: 0, question: ["CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad", "CON LA F. Parte exterior de un edificio", "CON LA F. Detener el movimiento, por ejemplo, de un coche o de los patines"] },

    { letter: "g", answer: ["galaxia", "gente", "globo"], status: 0, question: ["CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas", "CON LA G. Grupo de personas", "CON LA G. Juguete o adorno de goma que se llena de aire o de gas"] },

    { letter: "h", answer: ["harakiri", "hervir", "hilo"], status: 0, question: ["CON LA H. Suicidio ritual japonés por desentrañamiento", "CON LA H. Cocer, cocinar un alimento dentro de agua muy caliente", "CON LA H. Fibra muy larga y fina que sirve para coser"] },

    { letter: "i", answer: ["iglesia", "impune", "influir"], status: 0, question: ["CON LA I. Templo cristiano", "CON LA I. Que queda sin castigo", "CON LA I. Ejercer autoridad sobre una persona para que cambie de opinión"] },

    { letter: "j", answer: ["jabali", "jarabe", "joroba"], status: 0, question: ["CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba", "CON LA J. Medicina con aspecto líquido espeso y casi siempre de sabor dulce", "CON LA J. Abultamiento o curvatura que una persona tiene en la espalda"] },

    { letter: "k", answer: ["kamikaze", "karate", "kebab"], status: 0, question: ["CON LA K. Persona que se juega la vida realizando una acción temeraria", "CON LA K. Arte marcial japonés que consiste en dar golpes secos", "CON LA K. Pieza de carne prensada, normalmente de cordero, que se asa en una vara o palo que gira"] },

    { letter: "l", answer: ["licantropo", "laca", "lienzo"], status: 0, question: ["CON LA L. Hombre lobo", "CON LA L. Sustancia que se pone en el pelo y sirve para mantener el peinado más tiempo", "CON LA L. Tela fuerte que los pintores la utilizan en general para pintar cuadros"] },

    { letter: "m", answer: ["misantropo", "marea", "moho"], status: 0, question: ["CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas", "CON LA M. Movimiento de subida y bajada del agua del mar por la influencia de la Luna y el Sol", "CON LA M. Hongo que crece en los alimentos y otras materias orgánicas cuando están húmedas"] },

    { letter: "n", answer: ["necedad", "neceser", "novela"], status: 0, question: ["CON LA N. Demostración de poca inteligencia", "CON LA N. Bolsa pequeña para guardar utensilios de aseo personal", "CON LA N. Obra literaria más larga que un cuento"] },

    { letter: "ñ", answer: ["señal", "ñora", "ñu"], status: 0, question: ["CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo.", "CON LA Ñ. Pimiento pequeño, redondo y de color rojo", "CON LA Ñ. Mamífero rumiante africano de la familia de los antílopes, cuya cabeza recuerda la de un toro"] },

    { letter: "o", answer: ["orco", "oreja", "ovillo"], status: 0, question: ["CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien", "CON LA O. Estructura externa del oído", "CON LA O. Bola hecha con lana o hilo"] },

    { letter: "p", answer: ["protoss", "paella", "partitura"], status: 0, question: ["CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft", "CON LA P. Plato de comida típico de la Comunidad Valenciana", "CON LA P. Documento que indica al músico cómo debe interpretar una pieza musical"] },

    { letter: "q", answer: ["queso", "quemar", "querer"], status: 0, question: ["CON LA Q. Producto obtenido por la maduración de la cuajada de la leche", "CON LA Q. Destruir algo o a alguien con fuego", "CON LA Q. Sentir afecto hacia una persona, animal o cosa"] },

    { letter: "r", answer: ["raton", "racimo", "relato"], status: 0, question: ["CON LA R. Roedor", "CON LA R. Conjunto de frutas que cuelgan de un solo tallo", "CON LA R. Cuento o narración de carácter literario y breve"] },

    { letter: "s", answer: ["stackoverflow", "sonrisa", "sumiller"], status: 0, question: ["CON LA S. Comunidad salvadora de todo desarrollador informático", "CON LA S. Gesto de la cara que muestra alegría o felicidad", "CON LA S. Persona experta en vinos"] },

    { letter: "t", answer: ["terminator", "tejer", "tesoro"], status: 0, question: ["CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984", "CON LA T. Entrelazar hilos para hacer telas o prendas de vestir", "CON LA T. Cantidad de dinero y objetos valiosos que están escondidos"] },

    { letter: "u", answer: ["unamuno", "ukelele", "uva"], status: 0, question: ["CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914", "CON LA U. Instrumento musical de cuerda, parecido a la guitarra, pero más pequeño y con 4 cuerdas", "CON LA U. Fruto verde o morado que crece en racimos"] },

    { letter: "v", answer: ["vikingos", "vacuna", "valle"], status: 0, question: ["CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa", "CON LA V. Líquido que los médicos inyectan a una persona o a un animal para evitar enfermedades", "CON LA V. Terreno llano que hay entre las montañas"] },

    { letter: "w", answer: ["sandwich", "web", "walkman"], status: 0, question: ["CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso", "CON LA W. Red informática en la que hay mucha información repartida en páginas y sitios", "CON LA W. Reproductor de audio estéreo portátil lanzado al mercado por la compañía japonesa Sony que tuvo un gran éxito en los años 80"] },

    { letter: "x", answer: ["botox", "xenofobia", "toxina"], status: 0, question: ["CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética", "CON LA X. Fobia a lo extranjero o a los extranjeros", "CONTIENE LA X. Veneno producido por organismos vivos"] },

    { letter: "y", answer: ["peyote", "yuca", "yegua"], status: 0, question: ["CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos", "CON LA Y. Tubérculo que se cultiva a lo largo de América latina, cilíndrico y alargado, de piel aspera marrón e interior blanco", "CON LA Y. Hembra del caballo"] },

    { letter: "z", answer: ["zen", "zorro", "zapato"], status: 0, question: ["CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional", "CON LA Z. Mamífero cánido de hocico alargado y orejas empinadas, pelaje de color pardo rojizo y muy espeso, especialmente en la cola, de punta blanca", "CON LA Z. Calzado que no pasa del tobillo, con la parte inferior de suela y lo demás de piel"] }];


let players = [
    { name: 'Quelaag la Bruja del caos', points: 12 },
    { name: 'Sif el Gran lobo gris', points: 4 },
    { name: 'Gwyndolin el Sol Oscuro', points: 22 },
    { name: 'Ornstein el Asesino de dragones', points: 15 },
    { name: 'Smough el Verdugo', points: 18 },
    { name: 'Priscilla la Mestiza', points: 8 },
    { name: 'Seath el Descamado', points: 23 }];


let answerTurn = '';
let questionsTurn = [];
let i = 0;
let answeredQuestions = 0;
let points = 0;
let timeCountdown = 150;
let name = '';
let ranking = '';
let downloadTimer
let rankingHeader;
let audio
let audio2


function load() {
    rankingHeader = document.getElementById('TableRanking').innerHTML;
    audio = new Audio('winner.mp3');
    audio2 = new Audio('loser.mp3');
    var input = document.getElementById("answer");
    input.addEventListener("keyup", function (event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            document.getElementById("send").click();
        }
    });
    var input2 = document.getElementById("name");
    input2.addEventListener("keyup", function (event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            document.getElementById("play").click();
        }
    });
}

window.onload = load;


function play() {
    name = document.getElementById(`name`).value
    if (name != '') {
        document.getElementById('Menu').style.display = "none";
        document.getElementById('gameButtons').style.display = "block";
        document.getElementById('Rosco').style.display = "block";
        initializeCountdown()
        selectQuestions()
        showQuestion()
        document.getElementById(`points`).textContent = points;
    }

}

function selectQuestions() {
    if (questionsTurn.length === 0) {
        questions.forEach(question => {
            questionNumber = Math.floor(Math.random() * (3));
            questionsTurn.push({ letter: question.letter, answer: question.answer[questionNumber], status: 0, question: question.question[questionNumber] });
        });
    }

}

function showQuestion() {
    if (answeredQuestions === questionsTurn.length) {
        players = players.filter(obj => obj.name !== name);
        players.push({ name: name, points: points })
        endGame()
    }
    else {
        if (i === questionsTurn.length) {
            i = 0
        }
        if (questionsTurn[i].status === 0) {
            document.getElementById(`letter${i}`).style.backgroundColor = "#7257AD";
        }
        if (questionsTurn[i].status === 0) {
            let questionSplitted = questionsTurn[i].question.split(". ")
            let letterQuestion = questionSplitted[0];
            let defQuestion = questionSplitted[1];
            document.getElementById('letterQuestion').textContent = letterQuestion;
            document.getElementById('defQuestion').textContent = defQuestion;
        }
        else {
            while (questionsTurn[i].status != 0) {
                i++
                if (i === questionsTurn.length) {
                    i = 0;
                }
            }
            showQuestion()
        }
    }
}

function getAnswer() {
    answerTurn = document.getElementById('answer').value;
    if (answerTurn != '') {
        if (answerTurn.toLowerCase() === questionsTurn[i].answer) {
            questionsTurn[i].status = 1
            points++;
            document.getElementById(`letter${i}`).style.backgroundColor = "green";
            document.getElementById('points').textContent = points;
            answeredQuestions++;
            i++;
        }
        else if (answerTurn.toLowerCase() != questionsTurn[i].answer) {
            questionsTurn[i].status = 2
            document.getElementById(`letter${i}`).style.backgroundColor = "#C70039";
            answeredQuestions++;
            i++;
        }

        showQuestion();
        document.getElementById('answer').value = '';
    }
    else {
        document.getElementById(`letter${i}`).style.backgroundColor = "blue";
        i++;
        showQuestion();
    }
}


function pasapalabra() {
    document.getElementById(`letter${i}`).style.backgroundColor = "blue";
    i++;
    showQuestion();
    document.getElementById('answer').value = '';
}

function endGame() {
    document.getElementById('gameButtons').style.display = "none"
    document.getElementById('endButtons').style.display = "block"
    clearInterval(downloadTimer)
    if (points === questionsTurn.length) {
        audio.play();
        document.getElementById('letterQuestion').textContent = `FIN DE PARTIDA!`
        document.getElementById('defQuestion').textContent = `Enhorabuena! Has acertado todas las preguntas!`
    }

    else {
        audio2.play();
        document.getElementById('letterQuestion').textContent = `FIN DE PARTIDA!`
        document.getElementById('defQuestion').textContent = `Has conseguido un total de ${points} aciertos.`
    }

}

function initializeCountdown() {
    downloadTimer = setInterval(function () {
        if (timeCountdown <= 0) {
            document.getElementById('gameButtons').style.display = "none"
            document.getElementById('endButtons').style.display = "block"
            document.getElementById('letterQuestion').textContent = `FIN DE PARTIDA!`
            document.getElementById('defQuestion').textContent = `Se ha acabado el tiempo! Has conseguido un total de ${points} aciertos.`
            clearInterval(downloadTimer);
            document.getElementById("CountDown").textContent = 0;
        } else {
            document.getElementById("CountDown").textContent = timeCountdown;
        }
        timeCountdown -= 1;
    }, 1000);
}

function reset() {
    document.getElementById('Rosco').style.display = "none";
    document.getElementById('endButtons').style.display = "none";
    document.getElementById('ShowRanking').style.display = "none";
    document.getElementById('Menu').style.display = "block";
    name = ''
    answerTurn = '';
    questionsTurn = [];
    i = 0;
    answeredQuestions = 0;
    points = 0
    timeCountdown = 150;
    ranking = '';
    document.getElementById('answer').value = '';
    document.getElementById('name').value = '';
    for (letter = 0; letter < questions.length; letter++) {
        document.getElementById(`letter${letter}`).style.backgroundColor = "blue";
    }
}

function showRanking() {
    let ranking = '';
    players.sort(compare);
    players.forEach(player => {
        ranking += "<tr><td>" + player.name + '</td><td>' + player.points + '</td></tr>';
    });
    document.getElementById('TableRanking').innerHTML = rankingHeader + ranking;
    document.getElementById('Rosco').style.display = "none";
    document.getElementById('Menu').style.display = "none";
    document.getElementById('ShowRanking').style.display = "block";
}


function compare(a, b) {
    if (a.points > b.points) {
        return -1;
    }
    if (a.points < b.points) {
        return 1;
    }
    return 0;
}