//document.getElementById('button_plus_id').onclick = createGame();
//document.getElementById('button_plus_id').addEventListener("click", createGame);

var VAR_NUMBER_WRITE; //ключ сериализованного объекта в виде номера
var VAR_NUMBER_READ; //ключ сериализованного объекта в виде номера
var BOX_ID; // ID кликнутого блока
var SERIAL_OBJECT; //переменная для хранения объекта
var RETURN_OBJECT = {};  //восстановленный объект
var VAR_GAMBLER_1;
var VAR_GAMBLER_2;
var VAR_STATE;
var VAR_WINNER;
var VAR_STEP = 0;
var VAR_LINE;
var VAR_TIME = '0:0';
var TIMER;
var VAR_REPORT;
var VAR_CELL_1;
var VAR_CELL_2;
var VAR_CELL_3;
var VAR_CELL_4;
var VAR_CELL_5;
var VAR_CELL_6;
var VAR_CELL_7;
var VAR_CELL_8;
var VAR_CELL_9;

/*обработка модального окна выбора игрока*/
function choiceGambler() {
    var theSelect = form_one.select_name;
    document.getElementById("gambler_one_id").innerHTML = theSelect[theSelect.selectedIndex].text;
    VAR_GAMBLER_1 = theSelect[theSelect.selectedIndex].text;
    modalInActive();
}

/*циклический запуск анализа*/
window.onload = function interview() {
    modalActive();
    TIMER = setInterval(function() {
        objectRead();
    },1000);
};

/*подготовка данных и кодирование объекта в localStorage*/
function objectReadyWrite() {
    VAR_NUMBER_WRITE = localStorage.getItem("KEY_GAME_QUANTITY");
    //если KEY_GAME_QUANTITY не установлен, это случай первого запуска, устанавливаем первые значения в 1:
    if (VAR_NUMBER_WRITE == null) {
        localStorage.setItem("KEY_GAME_QUANTITY", 1);
        VAR_NUMBER_WRITE = 1;
    } else
      // в случае повторного запуска (KEY_GAME_QUANTITY имеет значение) инкрементируем значения. Таким образом не обнуляется KEY_GAME_QUANTITY при запуске index.html:
    if (VAR_NUMBER_WRITE != null) {
        VAR_NUMBER_WRITE++;
        localStorage.setItem("KEY_GAME_QUANTITY", VAR_NUMBER_WRITE);
    }
    var SOURSE_OBJECT = {
        KEY_NUMBER: VAR_NUMBER_WRITE,
        KEY_GAMBLER_1: VAR_GAMBLER_1,
        KEY_GAMBLER_2: VAR_GAMBLER_2,
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
    localStorage.setItem(VAR_NUMBER_WRITE, SERIAL_OBJECT); //запись сериализованного объекта в хранилище
}

/* создание объекта Playing и присоединение к игре */
function objectPlayingWrite() {
    VAR_NUMBER_WRITE = BOX_ID;
    RETURN_OBJECT = JSON.parse(localStorage.getItem(BOX_ID)); //чтение объекта по полученному ID
    var SOURSE_OBJECT = {
        KEY_NUMBER: VAR_NUMBER_WRITE,
        KEY_GAMBLER_1: RETURN_OBJECT.KEY_GAMBLER_1, //перезапись игрока-создателя из объекта по полученному ID
        KEY_GAMBLER_2: VAR_GAMBLER_1, //запись вторым игроком текущего-присоединенного игрока
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
    localStorage.setItem(VAR_NUMBER_WRITE, SERIAL_OBJECT); //запись сериализованного объекта в хранилище
}

/*---------Чтение объекта из localStorage и вывод на экран------*/
var str="";
function objectRead() {
    var count = 0;
    clearContaner();
    VAR_NUMBER_READ = localStorage.getItem("KEY_GAME_QUANTITY"); // чтение количества игр
    for (var i=0; i < VAR_NUMBER_READ; i++){
        count++;
        RETURN_OBJECT = JSON.parse(localStorage.getItem(count)); //спарсим его обратно в объект
        str +=
        'KEY_NUMBER: ' + RETURN_OBJECT.KEY_NUMBER + '<br>' +  //номер игры
        'KEY_GAME_QUANTITY: ' + localStorage.getItem("KEY_GAME_QUANTITY")  + '<br>' +
        'VAR_NUMBER_WRITE: ' + VAR_NUMBER_WRITE  + '<br>' +
        'VAR_NUMBER_READ: ' + VAR_NUMBER_READ  + '<br>' +
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
        document.getElementById("out_info1_id").innerHTML = str;
        if (RETURN_OBJECT.KEY_STATE == "READY") {createBoxReady();};
        if (RETURN_OBJECT.KEY_STATE == "PLAYING") {createBoxPlaying();};
        if (RETURN_OBJECT.KEY_STATE == "DONE") {createBoxDone();};
    }
}

/* Создание блока с состоянием Ready */
function createBoxReady() {
    var boxGame = document.createElement("a");
    boxGame.classList.add("list_box_sell_ready");
    boxGame.setAttribute('id', RETURN_OBJECT.KEY_NUMBER);
    boxGame.setAttribute('onClick', 'getIdReady(this)');
    boxGame.setAttribute('href', 'screen/screen.html');
    boxGame.setAttribute('target', '_blank');
    boxGame.innerHTML = RETURN_OBJECT.KEY_GAMBLER_1 +
    "<span class = 'time_game'>" +
    RETURN_OBJECT.KEY_TIME +
    "</span>";
    document.getElementById('list_container_id').appendChild(boxGame);
}

/*Возвращение ID кликнутого блока*/
function getIdReady(element_click) {
    BOX_ID = element_click.id;
    VAR_STATE = "PLAYING";
    VAR_STEP = 0;
    VAR_LINE = 1;
    objectPlayingWrite(); //превращает из ready в playing
    objectRead();
    localStorage.setItem("KEY_GAME_ID", BOX_ID);
    document.getElementById("out_info2_id").innerHTML = 'Полученный ID: ' + element_click.id;    
    document.getElementById("out_info3_id").innerHTML = 'KEY_GAME_ID: ' + localStorage.getItem("KEY_GAME_ID");
}

/* Модификация блока в состояние Playing */
function createBoxPlaying() {
    var boxGame = document.createElement("a");
    boxGame.classList.add("list_box_sell_playing");
    boxGame.setAttribute('id', RETURN_OBJECT.KEY_NUMBER);
    boxGame.setAttribute('onClick', 'getIdPlaying(this)');
    //boxGame.setAttribute('href', 'viewer/viewer.html');
    boxGame.setAttribute('href', 'screen/screen.html');
    boxGame.setAttribute('target', '_blank');
    boxGame.innerHTML = 
        "<span class = 'plaing_gambler_1'>" +
        RETURN_OBJECT.KEY_GAMBLER_1 + 
        "</span>" +
        "<br>" + "<hr class='line_playing'>" +
        "<span class = 'plaing_gambler_2'>" +
        RETURN_OBJECT.KEY_GAMBLER_2 + 
        "</span>" + "<br>" +
        "<span class = 'time_game'>" +
        RETURN_OBJECT.KEY_TIME +
        "</span>";
    document.getElementById('list_container_id').appendChild(boxGame);
}

/* Определение ID кликнутого блока и запись его в KEY_GAME_ID */
function getIdPlaying(element_click) {
    BOX_ID = element_click.id;
    localStorage.setItem("KEY_GAME_ID", BOX_ID);
    objectRead();
    
    if ((VAR_GAMBLER_1 == RETURN_OBJECT.KEY_GAMBLER_1) || (VAR_GAMBLER_1 == RETURN_OBJECT.KEY_GAMBLER_2)) {
        window.open("screen/screen.html");
    }
    else {
        window.open("viewer/viewer.html");
    }

    //window.open("viewer/viewer.html");
    document.getElementById("out_info2_id").innerHTML = 'ID КЛИКНУТОГО БЛОКА: ' + element_click.id;
    document.getElementById("out_info3_id").innerHTML = "KEY_GAME_ID: " + localStorage.getItem("KEY_GAME_ID");
}

/* Модификация блока в состояние Done */
function createBoxDone() {
    var class_choice_gambler_1;
    var class_choice_gambler_2;
    var class_done_gambler_1 = "<span class = 'done_gambler_1'>";
    var class_winner_gambler_1 = "<span class = 'winner_gambler_1'>";
    var class_done_gambler_2 = "<span class = 'done_gambler_2'>";
    var class_winner_gambler_2 = "<span class = 'winner_gambler_2'>";
    var var_daw;
    var var_daw_top = "<img class='daw_top' src = 'index/images/daw.png'>";
    var var_draw_top = "<img class='daw_top' src = 'index/images/draw.png'>";
    var var_daw_bottom = "<img class='daw_bottom' src = 'index/images/daw.png'>";
    var boxGame = document.createElement("a");
    
    if (RETURN_OBJECT.KEY_GAMBLER_1 == RETURN_OBJECT.KEY_WINNER) {
        var_daw = var_daw_top;
        class_choice_gambler_1 = class_winner_gambler_1;
        class_choice_gambler_2 = class_done_gambler_2;
    }
    else {
        var_daw = var_daw_bottom;
        class_choice_gambler_1 = class_done_gambler_1;
        class_choice_gambler_2 = class_winner_gambler_2;
    }
    
    if (RETURN_OBJECT.KEY_WINNER == 'DRAW') {
        var_daw = var_draw_top;
        class_choice_gambler_1 = class_done_gambler_1;
        class_choice_gambler_2 = class_done_gambler_2;
    }

    boxGame.classList.add("list_box_sell_done");
    boxGame.setAttribute('id', RETURN_OBJECT.KEY_NUMBER);
    boxGame.setAttribute('onClick', 'getIdDone(this)');
    boxGame.setAttribute('href', 'viewer/viewer.html');
    boxGame.setAttribute('target', '_blank');
    boxGame.innerHTML =
        var_daw +
        class_choice_gambler_1 +
        RETURN_OBJECT.KEY_GAMBLER_1 +
        "</span>" +
        "<hr class='line_done'>" +
        class_choice_gambler_2 +
        RETURN_OBJECT.KEY_GAMBLER_2 +
        "</span>" + "<br>" +
        "<span class = 'time_game'>" +
        RETURN_OBJECT.KEY_TIME +
        "</span>";
    document.getElementById('list_container_id').appendChild(boxGame);
}

/* Определение ID кликнутого блока и запись его в KEY_GAME_ID */
function getIdDone(element_click) {
    BOX_ID = element_click.id;
    localStorage.setItem("KEY_GAME_ID", BOX_ID);
    document.getElementById("out_info2_id").innerHTML = 'ID КЛИКНУТОГО БЛОКА: ' + element_click.id;
    document.getElementById("out_info3_id").innerHTML = "KEY_GAME_ID: " + localStorage.getItem("KEY_GAME_ID");
}

function modalActive() {
    clearInterval(TIMER);
    document.getElementById('modal_container_id').classList.add('modal_active');
}

function modalInActive() {
    document.getElementById('modal_container_id').classList.remove('modal_active');
}

function createGameReady() {
    VAR_STATE = "READY";
    objectReadyWrite();
    objectRead();
}

/*Очищение LocalStorage и перезагрузка страницы*/
function clearLocalStorage() {
    localStorage.clear();
    clearContaner();
    location.reload();
}

/*Очищение блока с играми*/
function clearContaner() {
    document.getElementById('list_container_id').innerHTML = '';
    str = '';
    document.getElementById("out_info1_id").innerHTML = '';
}