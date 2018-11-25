/**** ВАРИАНТЫ ПОЯВЛЕНИЯ И СКРЫТИЯ ФОРМЫ ****/
//скрытие формы при загрузке страницы
$("#quiz_overlay_id").hide();
$("#quiz_container_id").hide();
//Скрытие формы от кнопки крест:
$("#quiz_button_cross_id").click(quizInVisible);
//Скрытие формы от слоя оверлей:
$("#quiz_overlay_id").click(quizInVisible);
//Появление формы от кнопки меню:
$("#menu-horizontal_button_four_id").click(quizVisible);

/**** ФУНКЦИЯ СКРЫТИЯ ФОРМЫ ****/
function quizInVisible(){
    $("#quiz_container_id").fadeOut(300);
    $("#quiz_overlay_id").fadeOut(300);
}

/**** ФУНКЦИЯ ПОЯВЛЕНИЯ ФОРМЫ ****/
function quizVisible(){
    $("#quiz_overlay_id").fadeIn(300);
    $("#quiz_container_id").fadeIn(300);
}

/**** ЗАПУСК ФУНКЦИИ ПРОВЕРКИ ПОЛЕЙ ФОРМЫ ****/
document.getElementById('quiz_submit_button').addEventListener("click", quizСheck);
// jQuery позволяет делать так
// $('#quiz_submit_button').on("click", quizСheck);

/**** ПРОВЕРКА ПОЛЕЙ ФОРМЫ НА ЗАПОЛНЕНИЕ, ОКРАШИВАНИЕ НЕЗАПОЛНЕННЫХ ПОЛЕЙ ФОРМЫ,
ЗАПУСК РАЗДЕЛА С ДОБАВЛЕННЫМ ФИЛЬМОМ ****/
function quizСheck() {
    var valid = true;
    
    // Условие тоже можно упростить
    // if ($('#quiz_input_url').val() == '')
    
    if (document.quiz_tag_name.quiz_input_url.value == '') {
        var quiz_input_url_one = document.getElementById('quiz_input_url');
        quiz_input_url_one.addEventListener("focus", clearError);
        
        // С помощью jQuery
        // $('#quiz_input_url_one').addClass('quiz_red_border');
        
        quiz_input_url_one.classList.add('quiz_red_border');
        valid = false;
    }

    if (document.quiz_tag_name.quiz_input_title.value == '') {
        var quiz_input_title_one = document.getElementById('quiz_input_title');
        quiz_input_title_one.addEventListener("focus", clearError);
        quiz_input_title_one.classList.add('quiz_red_border');
        valid = false;
    }

    if (document.quiz_tag_name.quiz_textarea_description.value == '') {
        var quiz_textarea_description_one = document.getElementById('quiz_textarea_description');
        quiz_textarea_description_one.addEventListener("focus", clearError);
        quiz_textarea_description_one.classList.add('quiz_red_border');
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
    // $(this).removeClass('quiz_red_border');
    this.classList.remove('quiz_red_border');
}

/**** ФУНКЦИЯ ПЕРЕДАЧИ ДАННЫХ ФОРМЫ РАЗДЕЛУ ФИЛЬМЫ ****/
function quizTransfer() {
    //чтение полей формы:
    var variableUrl = $("#quiz_input_url").val();
    var variableTitle = $("#quiz_input_title").val();
    var variableDescription = $("#quiz_textarea_description").val();
    //создание элементов и присвоение атрибутов:
    var varImage = '<img src="' + variableUrl + '" class="film_image"  />';
    var varTitleP = '<p class="film_title">' + variableTitle + '</p>';
    var varTextP = $('<p>' + variableDescription + '</p>').attr({class: 'film_text'}); // упростить
    //$('.film_box').removeClass('film_box_last');
    //создание блока для фильмов и добавлиние в него атрубутов:
    var newFilmBox = '<div class="film_box"></div>';
    newFilmBox.append(varImage);
    newFilmBox.append(varTitleP);
    newFilmBox.append(varTextP);
    //добавление блока с фильмом в контейнер с фильмами:
    $('#film_container_two_id').append(newFilmBox);
}

// js-ные функции переделать на jQuery