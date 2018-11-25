var VAR_NUMBER_READ; //ключ сериализованного объекта в виде номера
var BOX_ID; // ID кликнутого блока
var SERIAL_OBJECT; //переменная для хранения объекта
var RETURN_OBJECT = {};  //восстановленный объект
var VAR_GAMBLER_1;
var VAR_GAMBLER_2;
var VAR_STATE;
var VAR_WINNER;
var VAR_STEP;
var VAR_LINE;
var VAR_TIME = '0:0';
var VAR_CELL_1;
var VAR_CELL_2;
var VAR_CELL_3;
var VAR_CELL_4;
var VAR_CELL_5;
var VAR_CELL_6;
var VAR_CELL_7;
var VAR_CELL_8;
var VAR_CELL_9;
var READ_STR = "";
var READ_STR_2 = "";
var CROSS = '<img src="images/big_cross.png">';
var NIL = '<img src="images/big_null.png">';
var TIMER;

/* запуск анализа */
window.onload = function interview() {
    BOX_ID = localStorage.getItem("KEY_GAME_ID");
    objectRead();
    document.getElementById('gambler_one_text_id').innerHTML = RETURN_OBJECT.KEY_GAMBLER_1; //отображение игрока 1
    document.getElementById('gambler_two_text_id').innerHTML = RETURN_OBJECT.KEY_GAMBLER_2; //отображение игрока 2
    document.getElementById('gambler_line_right_id').classList.remove('active'); //снять подчеркивание
    document.getElementById('gambler_line_left_id').classList.add('active'); //установить подчеркивание
    TIMER = setInterval(function() {
        objectRead();
    },200);
};
 
function objectRead() {
    RETURN_OBJECT = JSON.parse(localStorage.getItem(BOX_ID)); //читаем объект из хранилища - парсим
    READ_STR =
        'KEY_NUMBER: ' + RETURN_OBJECT.KEY_NUMBER + '<br>' + //номер игры
        'KEY_GAME_QUANTITY: ' + localStorage.getItem("KEY_GAME_QUANTITY")  + '<br>' +
        'KEY_GAME_ID: ' + localStorage.getItem("KEY_GAME_ID")  + '<br>' +
        'KEY_GAMBLER_1: ' + RETURN_OBJECT.KEY_GAMBLER_1 + '<br>' +
        'KEY_GAMBLER_2: ' + RETURN_OBJECT.KEY_GAMBLER_2 + '<br>' +
        'KEY_STATE: ' + RETURN_OBJECT.KEY_STATE + '<br>' +
        'KEY_WINNER: ' + RETURN_OBJECT.KEY_WINNER + '<br>' +
        'KEY_STEP: ' + RETURN_OBJECT.KEY_STEP + '<br>' +
        'KEY_LINE: ' + RETURN_OBJECT.KEY_LINE + '<br>' +
        'KEY_TIME: ' + RETURN_OBJECT.KEY_TIME + '<br>' +
        'KEY_CELL_1: ' + RETURN_OBJECT.KEY_CELL_1 + '<br>' +
        'KEY_CELL_2: ' + RETURN_OBJECT.KEY_CELL_2 + '<br>' +
        'KEY_CELL_3: ' + RETURN_OBJECT.KEY_CELL_3 + '<br>' +
        'KEY_CELL_4: ' + RETURN_OBJECT.KEY_CELL_4 + '<br>' +
        'KEY_CELL_5: ' + RETURN_OBJECT.KEY_CELL_5 + '<br>' +
        'KEY_CELL_6: ' + RETURN_OBJECT.KEY_CELL_6 + '<br>' +
        'KEY_CELL_7: ' + RETURN_OBJECT.KEY_CELL_7 + '<br>' +
        'KEY_CELL_8: ' + RETURN_OBJECT.KEY_CELL_8 + '<br>' +
        'KEY_CELL_9: ' + RETURN_OBJECT.KEY_CELL_9 + '<br><br>';
    document.getElementById("out_info1_id").innerHTML = READ_STR;
    
    READ_STR_2 =
        'Номер игры: ' + RETURN_OBJECT.KEY_NUMBER + '<br>' +  //номер игры
        'Состояние игры: ' + RETURN_OBJECT.KEY_STATE + '<br>' +
        'Победитель: ' + RETURN_OBJECT.KEY_WINNER + '<br>';
    document.getElementById("info_field_id").innerHTML = READ_STR_2;

    if (RETURN_OBJECT.KEY_CELL_1 == 1) {document.getElementById('cell1').innerHTML = CROSS;}
    if (RETURN_OBJECT.KEY_CELL_1 == 0) {document.getElementById('cell1').innerHTML = NIL;}
    if (RETURN_OBJECT.KEY_CELL_2 == 1) {document.getElementById('cell2').innerHTML = CROSS;}
    if (RETURN_OBJECT.KEY_CELL_2 == 0) {document.getElementById('cell2').innerHTML = NIL;}
    if (RETURN_OBJECT.KEY_CELL_3 == 1) {document.getElementById('cell3').innerHTML = CROSS;}
    if (RETURN_OBJECT.KEY_CELL_3 == 0) {document.getElementById('cell3').innerHTML = NIL;}
    if (RETURN_OBJECT.KEY_CELL_4 == 1) {document.getElementById('cell4').innerHTML = CROSS;}
    if (RETURN_OBJECT.KEY_CELL_4 == 0) {document.getElementById('cell4').innerHTML = NIL;}
    if (RETURN_OBJECT.KEY_CELL_5 == 1) {document.getElementById('cell5').innerHTML = CROSS;}
    if (RETURN_OBJECT.KEY_CELL_5 == 0) {document.getElementById('cell5').innerHTML = NIL;}
    if (RETURN_OBJECT.KEY_CELL_6 == 1) {document.getElementById('cell6').innerHTML = CROSS;}
    if (RETURN_OBJECT.KEY_CELL_6 == 0) {document.getElementById('cell6').innerHTML = NIL;}
    if (RETURN_OBJECT.KEY_CELL_7 == 1) {document.getElementById('cell7').innerHTML = CROSS;}
    if (RETURN_OBJECT.KEY_CELL_7 == 0) {document.getElementById('cell7').innerHTML = NIL;}
    if (RETURN_OBJECT.KEY_CELL_8 == 1) {document.getElementById('cell8').innerHTML = CROSS;}
    if (RETURN_OBJECT.KEY_CELL_8 == 0) {document.getElementById('cell8').innerHTML = NIL;}
    if (RETURN_OBJECT.KEY_CELL_9 == 1) {document.getElementById('cell9').innerHTML = CROSS;}
    if (RETURN_OBJECT.KEY_CELL_9 == 0) {document.getElementById('cell9').innerHTML = NIL;}

    if ((RETURN_OBJECT.KEY_STATE == 'PLAYING') && (!(RETURN_OBJECT.KEY_STEP%2))) { // не четные
        document.getElementById('gambler_line_right_id').classList.remove('active'); //снять подчеркивание
        document.getElementById('gambler_line_left_id').classList.add('active'); //установить подчеркивание
    } else if ((RETURN_OBJECT.KEY_STATE == 'PLAYING') && (RETURN_OBJECT.KEY_STEP%2)) { //четный
        document.getElementById('gambler_line_left_id').classList.remove('active'); 
        document.getElementById('gambler_line_right_id').classList.add('active'); // подчеркнут правый
    }

    document.getElementById('stopwatch_id').innerHTML = RETURN_OBJECT.KEY_TIME;
    VAR_STATE = RETURN_OBJECT.KEY_STATE;
    VAR_STEP = RETURN_OBJECT.KEY_STEP;
    VAR_CELL_1 = RETURN_OBJECT.KEY_CELL_1;
    VAR_CELL_2 = RETURN_OBJECT.KEY_CELL_2;
    VAR_CELL_3 = RETURN_OBJECT.KEY_CELL_3;
    VAR_CELL_4 = RETURN_OBJECT.KEY_CELL_4;
    VAR_CELL_5 = RETURN_OBJECT.KEY_CELL_5;
    VAR_CELL_6 = RETURN_OBJECT.KEY_CELL_6;
    VAR_CELL_7 = RETURN_OBJECT.KEY_CELL_7;
    VAR_CELL_8 = RETURN_OBJECT.KEY_CELL_8;
    VAR_CELL_9 = RETURN_OBJECT.KEY_CELL_9;
}

function objectModifyWrite() {
    RETURN_OBJECT = JSON.parse(localStorage.getItem(BOX_ID)); //чтение объекта по полученному ID
    var SOURSE_OBJECT = {
        KEY_NUMBER: BOX_ID,
        KEY_GAMBLER_1: RETURN_OBJECT.KEY_GAMBLER_1, //перезапись игрока из объекта по полученному ID
        KEY_GAMBLER_2: RETURN_OBJECT.KEY_GAMBLER_2,
        KEY_STATE: VAR_STATE,
        KEY_WINNER: VAR_WINNER,
        KEY_STEP: VAR_STEP,
        KEY_LINE: VAR_LINE,
        KEY_TIME: VAR_TIME,
        KEY_CELL_1: VAR_CELL_1,
        KEY_CELL_2: VAR_CELL_2,
        KEY_CELL_3: VAR_CELL_3,
        KEY_CELL_4: VAR_CELL_4,
        KEY_CELL_5: VAR_CELL_5,
        KEY_CELL_6: VAR_CELL_6,
        KEY_CELL_7: VAR_CELL_7,
        KEY_CELL_8: VAR_CELL_8,
        KEY_CELL_9: VAR_CELL_9
    };
    SERIAL_OBJECT = JSON.stringify(SOURSE_OBJECT); //сериализуем
    localStorage.setItem(BOX_ID, SERIAL_OBJECT); //запись сериализованного объекта в хранилище
}

/* Процесс игры - подготовка данных для хранилища */
// Получаем событие клика и передаем направо функции:
document.getElementById('game_field').onclick = function() {
    var blocks = document.getElementsByClassName('game_square'); // Возвращает массив входящих элементов
    if ((RETURN_OBJECT.KEY_STATE == 'PLAYING') && (!(RETURN_OBJECT.KEY_STEP%2))) { // не четные
        // проверка состояния игры и запись 1 в соотвествующую переменную:
        if (blocks[0] == event.target && RETURN_OBJECT.KEY_CELL_1 == 2) {VAR_CELL_1 = 1;}
        if (blocks[0] == event.target) {VAR_CELL_1 = 1;}
        if (blocks[1] == event.target) {VAR_CELL_2 = 1;}
        if (blocks[2] == event.target) {VAR_CELL_3 = 1;}
        if (blocks[3] == event.target) {VAR_CELL_4 = 1;}
        if (blocks[4] == event.target) {VAR_CELL_5 = 1;}
        if (blocks[5] == event.target) {VAR_CELL_6 = 1;}
        if (blocks[6] == event.target) {VAR_CELL_7 = 1;}
        if (blocks[7] == event.target) {VAR_CELL_8 = 1;}
        if (blocks[8] == event.target) {VAR_CELL_9 = 1;}
        
        VAR_STEP++;
        objectModifyWrite();
        objectRead();

        if (RETURN_OBJECT.KEY_STEP == 1) { startClock(); } //запуск секундомера
        if (RETURN_OBJECT.KEY_STEP == 9) { stopClock(); }  //остановка секундомера
        
        // проверка выстраивания крестиков в линию
        if (RETURN_OBJECT.KEY_CELL_1 == 1 && RETURN_OBJECT.KEY_CELL_2 == 1 && RETURN_OBJECT.KEY_CELL_3 == 1) {
            winnerGambler1();
        } else if (RETURN_OBJECT.KEY_CELL_4 == 1 && RETURN_OBJECT.KEY_CELL_5 == 1 && RETURN_OBJECT.KEY_CELL_6 == 1) {
            winnerGambler1();
        } else if (RETURN_OBJECT.KEY_CELL_7 == 1 && RETURN_OBJECT.KEY_CELL_8 == 1 && RETURN_OBJECT.KEY_CELL_9 == 1) {
            winnerGambler1();
        } else if (RETURN_OBJECT.KEY_CELL_1 == 1 && RETURN_OBJECT.KEY_CELL_4 == 1 && RETURN_OBJECT.KEY_CELL_7 == 1) {
            winnerGambler1();
        } else if (RETURN_OBJECT.KEY_CELL_2 == 1 && RETURN_OBJECT.KEY_CELL_5 == 1 && RETURN_OBJECT.KEY_CELL_8 == 1) {
            winnerGambler1();
        } else if (RETURN_OBJECT.KEY_CELL_3 == 1 && RETURN_OBJECT.KEY_CELL_6 == 1 && RETURN_OBJECT.KEY_CELL_9 == 1) {
            winnerGambler1();
        } else if (RETURN_OBJECT.KEY_CELL_1 == 1 && RETURN_OBJECT.KEY_CELL_5 == 1 && RETURN_OBJECT.KEY_CELL_9 == 1) {
            winnerGambler1();
        } else if (RETURN_OBJECT.KEY_CELL_3 == 1 && RETURN_OBJECT.KEY_CELL_5 == 1 && RETURN_OBJECT.KEY_CELL_7 == 1) {
            winnerGambler1();
        } else if (RETURN_OBJECT.KEY_STEP == 9) {
            winnerDraw();
        }
    } else if ((RETURN_OBJECT.KEY_STATE == 'PLAYING') && (RETURN_OBJECT.KEY_STEP%2)) { //четный
        // если счетчик четный записать в переменную 0
        if (blocks[0] == event.target && RETURN_OBJECT.KEY_CELL_1 == 2) {VAR_CELL_1 = 0;}
        if (blocks[0] == event.target) {VAR_CELL_1 = 0;}
        if (blocks[1] == event.target) {VAR_CELL_2 = 0;}
        if (blocks[2] == event.target) {VAR_CELL_3 = 0;}
        if (blocks[3] == event.target) {VAR_CELL_4 = 0;}
        if (blocks[4] == event.target) {VAR_CELL_5 = 0;}
        if (blocks[5] == event.target) {VAR_CELL_6 = 0;}
        if (blocks[6] == event.target) {VAR_CELL_7 = 0;}
        if (blocks[7] == event.target) {VAR_CELL_8 = 0;}
        if (blocks[8] == event.target) {VAR_CELL_9 = 0;}

        VAR_STEP++;
        objectModifyWrite();
        objectRead();

        // проверка выстраивания ноликов в линию
        if (RETURN_OBJECT.KEY_CELL_1 == 0 && RETURN_OBJECT.KEY_CELL_2 == 0 && RETURN_OBJECT.KEY_CELL_3 == 0) {
            winnerGambler1();
        } else if (RETURN_OBJECT.KEY_CELL_4 == 0 && RETURN_OBJECT.KEY_CELL_5 == 0 && RETURN_OBJECT.KEY_CELL_6 == 0) {
            winnerGambler2();
        } else if (RETURN_OBJECT.KEY_CELL_7 == 0 && RETURN_OBJECT.KEY_CELL_8 == 0 && RETURN_OBJECT.KEY_CELL_9 == 0) {
            winnerGambler2();
        } else if (RETURN_OBJECT.KEY_CELL_1 == 0 && RETURN_OBJECT.KEY_CELL_4 == 0 && RETURN_OBJECT.KEY_CELL_7 == 0) {
            winnerGambler2();
        } else if (RETURN_OBJECT.KEY_CELL_2 == 0 && RETURN_OBJECT.KEY_CELL_5 == 0 && RETURN_OBJECT.KEY_CELL_8 == 0) {
            winnerGambler2();
        } else if (RETURN_OBJECT.KEY_CELL_3 == 0 && RETURN_OBJECT.KEY_CELL_6 == 0 && RETURN_OBJECT.KEY_CELL_9 == 0) {
            winnerGambler2();
        } else if (RETURN_OBJECT.KEY_CELL_1 == 0 && RETURN_OBJECT.KEY_CELL_5 == 0 && RETURN_OBJECT.KEY_CELL_9 == 0) {
            winnerGambler2();
        } else if (RETURN_OBJECT.KEY_CELL_3 == 0 && RETURN_OBJECT.KEY_CELL_5 == 0 && RETURN_OBJECT.KEY_CELL_7 == 0) {
            winnerGambler2();
        } else if (VAR_STEP == 9) {
            winnerDraw();
        }
    }
}

function winnerGambler1() { // конец игры, победитель с крестиками
    stopClock();
    VAR_WINNER = RETURN_OBJECT.KEY_GAMBLER_1;
    VAR_STATE = "DONE";
    objectModifyWrite();
}

function winnerGambler2() { // конец игры, победитель с ноликами
    stopClock();
    VAR_WINNER = RETURN_OBJECT.KEY_GAMBLER_2;
    VAR_STATE = "DONE";
    objectModifyWrite();
}

function winnerDraw() { // конец игры, ничья
    stopClock();
    VAR_WINNER = "DRAW";
    VAR_STATE = "DONE";
    objectModifyWrite();
}

function surrender() { // конец игры, по нажатию кнопки surrender
    stopClock();
    if (!(RETURN_OBJECT.KEY_STEP%2)) {
        VAR_WINNER = RETURN_OBJECT.KEY_GAMBLER_2;
        VAR_STATE = "DONE";
        objectModifyWrite();
    }
    if (RETURN_OBJECT.KEY_STEP%2) {
        VAR_WINNER = RETURN_OBJECT.KEY_GAMBLER_1;
        VAR_STATE = "DONE";
        objectModifyWrite();
    }
}

var TIME;
function startClock() {
    min = 0;
    sec = 0;
    TIME = setInterval(
        function () {
            sec++;
            if (sec == 0) {sec = '0' + sec;}
            if (sec == 60) {sec = 0; min++;}
            //if (sec < 10) {sec = '0' + sec;}
            //if (min < 10) {min = '0' + min;}
            VAR_TIME = min + ':' + sec;
            if (VAR_TIME == '5:0'){VAR_STATE = "DONE"; stopClock();} // лимит времени игры 5 минут
            objectModifyWrite();
            document.getElementById('stopwatch_id').innerHTML = VAR_TIME;
        },
        1000
    );
}
/* остановка секундомера */
function stopClock() {
    clearInterval(TIME);
}