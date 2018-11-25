/**** ВАРИАНТЫ ПОЯВЛЕНИЯ И СКРЫТИЯ ФОРМЫ ****/
//скрытие формы при загрузке страницы
$("#quiz_dark_id").hide();
$("#quiz_container_id").hide();
//Скрытие формы от кнопки крест:
$("#quiz_button_cross_id").click(quizInVisible);
//Скрытие формы от слоя оверлей:
$("#quiz_dark_id").click(quizInVisible);
//Появление формы от кнопки меню:
$("#menu_button_four_id").click(quizVisible);

/**** ФУНКЦИЯ СКРЫТИЯ ФОРМЫ ****/
function quizInVisible(){
    $("#quiz_container_id").fadeOut(300);
    $("#quiz_dark_id").fadeOut(300);
}

/**** ФУНКЦИЯ ПОЯВЛЕНИЯ ФОРМЫ ****/
function quizVisible(){
    $("#quiz_dark_id").fadeIn(300);
    $("#quiz_container_id").fadeIn(300);
}

/**** ЗАПУСК ФУНКЦИИ ПРОВЕРКИ ПОЛЕЙ ФОРМЫ ****/
$('#quiz_submit_button').on("click", quizСheck);

/**** ПРОВЕРКА ПОЛЕЙ ФОРМЫ НА ЗАПОЛНЕНИЕ, ОКРАШИВАНИЕ НЕЗАПОЛНЕННЫХ ПОЛЕЙ ФОРМЫ,
ЗАПУСК РАЗДЕЛА С ДОБАВЛЕННЫМ ФИЛЬМОМ ****/
function quizСheck() {
    var valid = true;
    if ($('#quiz_input_url').val() == ''){
        var quiz_input_url_one = $('#quiz_input_url');
        quiz_input_url_one.on("focus", clearError);
        quiz_input_url_one.addClass('quiz_red_border');
        valid = false;
    }

    //if (document.quiz_tag_name.quiz_input_title.value == '')
    if ($('#quiz_input_title').val() == ''){
        var quiz_input_title_one = $('#quiz_input_title');
        quiz_input_title_one.on("focus", clearError);
        quiz_input_title_one.addClass('quiz_red_border');
        valid = false;
    }

    //if (document.quiz_tag_name.quiz_textarea_description.value == '')
    if ($('#quiz_textarea_description').val() == ''){
        var quiz_textarea_description_one = $('#quiz_textarea_description');
        quiz_textarea_description_one.on("focus", clearError);
        quiz_textarea_description_one.addClass('quiz_red_border');
        valid = false;
    }
    //return valid;
    if (valid == true) {
        quizTransfer(); 
        quizInVisible();
    }
}

/**** ФУНКЦИЯ УДАЛЕНИЯ КРАСНОГО БОРДЕРА ПОСЛЕ АКТИВАЦИИ ПОЛЯ ****/
function clearError(event) {
    this.classList.remove('quiz_red_border');
}

/**** ФУНКЦИЯ ПЕРЕДАЧИ ДАННЫХ ФОРМЫ РАЗДЕЛУ ФИЛЬМЫ ****/
function quizTransfer() {
    //чтение полей формы:
    var variableUrl = $("#quiz_input_url").val();
    var variableTitle = $("#quiz_input_title").val();
    var variableDescription = $("#quiz_textarea_description").val();
    //создание элементов и присвоение атрибутов:
    var varImage = $('<img class="film_image">').attr({src: variableUrl});
    var varTitleP = $('<p class="film_title">' + variableTitle + '</p>');
    var varTextP = $('<p class="film_text">' + variableDescription + '</p>');
    //создание блока для фильмов и добавлиние в него атрибутов:
    var newFilmBox = $('<div class="film_box"></div>');
    newFilmBox.append(varImage);
    newFilmBox.append(varTitleP);
    newFilmBox.append(varTextP);
    //добавление блока с фильмом в контейнер с фильмами:
    $('#film_container_two_id').append(newFilmBox);
}