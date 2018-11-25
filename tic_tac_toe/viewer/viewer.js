var BOX_ID; //ключ сериализованного объекта в виде номера
var BOX_ID; // ID кликнутого блока
var SERIAL_OBJECT; //переменная для хранения объекта
var RETURN_OBJECT = {};  //восстановленный объект
var temp_idER = 0;
var TIMER;

/*переменные для записи в объект*/
var VAR_GAMBLER_1;
var VAR_GAMBLER_2;
var VAR_STATE;
var VAR_WINNER;
var VAR_STEP;
var VAR_LINE;
var VAR_TIME = '0:0';
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
var CROSS = '<img src="images/big_cross.png">';
var NIL = '<img src="images/big_null.png">';
var READ_STR_1="";

/*запуск анализа*/
window.onload = function interview() {
    //считываем ID выбранного блока в разные переменные при загрузке в первый раз:
    BOX_ID = localStorage.getItem("KEY_GAME_ID");
    objectRead();
    document.getElementById('gambler_one_text_id').innerHTML = RETURN_OBJECT.KEY_GAMBLER_1; //отображение игрока 1
    document.getElementById('gambler_two_text_id').innerHTML = RETURN_OBJECT.KEY_GAMBLER_2; //отображение игрока 1
    document.getElementById('gambler_line_right_id').classList.remove('active'); //снять подчеркивание
    document.getElementById('gambler_line_left_id').classList.add('active'); //установить подчеркивание
    TIMER = setInterval(function() {
        objectRead();
        outData();
    },200);

};

function objectRead() {
    var temp_id = BOX_ID;
    RETURN_OBJECT = JSON.parse(localStorage.getItem(temp_id)); //парсим (восстанавливаем) его обратно в объект
    READ_STR_1 =
        'KEY_NUMBER: ' + RETURN_OBJECT.KEY_NUMBER + '<br>' +  //номер игры
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
        'KEY_CELL_9: ' + RETURN_OBJECT.KEY_CELL_9 + '<br>';
    document.getElementById("out_info1_id").innerHTML = READ_STR_1;
    
    READ_STR_2 =
        'Номер игры: ' + RETURN_OBJECT.KEY_NUMBER + '<br>' +  //номер игры
        'Состояние игры: ' + RETURN_OBJECT.KEY_STATE + '<br>' +
        'Победитель: ' + RETURN_OBJECT.KEY_WINNER + '<br>';
    document.getElementById("info_field_id").innerHTML = READ_STR_2;
}

/* Вывод подчеркиваний, крестиков-ноликов, времени*/
function outData() {
    if ((RETURN_OBJECT.KEY_STATE == 'PLAYING') && (!(RETURN_OBJECT.KEY_STEP%2))) { // не четные
        document.getElementById('gambler_line_right_id').classList.remove('active'); //снять подчеркивание
        document.getElementById('gambler_line_left_id').classList.add('active'); //установить подчеркивание
    } else if ((RETURN_OBJECT.KEY_STATE == 'PLAYING') && (RETURN_OBJECT.KEY_STEP%2)) { //четный
        document.getElementById('gambler_line_left_id').classList.remove('active'); 
        document.getElementById('gambler_line_right_id').classList.add('active'); // подчеркнут правый
    }
    
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
    document.getElementById('stopwatch_id').innerHTML = RETURN_OBJECT.KEY_TIME;
}