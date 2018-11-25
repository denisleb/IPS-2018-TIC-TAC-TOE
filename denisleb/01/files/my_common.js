/**** ФУНКЦИЯ ВЫЧИСЛЕНИЯ ШИРИНЫ ОКНА БРАУЗЕРА ****/
$(window).resize(function(){$("#write_width").text($(window).width());});
// вызов события resize
$(window).resize();


/***** ОБРАБОТКА СОБЫТИЙ ДЛЯ КНОПКИ ГАМБУРГЕР *****/
$(document).ready(function(){$(".button_hamburger").click(function(){
        $("#button_hamburger_id").removeClass("active");
        $("#menu_dark_id").addClass("active");
        $("#button_cross_id").addClass("active");
        $("#menu_container_id").addClass("active");
    });
});

/***** ОБРАБОТКА СОБЫТИЙ ДЛЯ КНОПКИ КРЕСТ *****/
$(document).ready(function(){$(".button_cross").click(function(){
        $("#button_cross_id").removeClass("active");
        $("#menu_dark_id").removeClass("active");
        $("#menu_container_id").removeClass("active");
        $("#button_hamburger_id").addClass("active");
    });
});

/***** ОБРАБОТКА СОБЫТИЙ БЕЛОГО ПОЛЯ ОВЕРЛЕЙ *****/
$(document).ready(function(){$(".menu_dark").click(function(){
        $("#menu_dark_id").removeClass("active");
        $("#menu_container_id").removeClass("active");
        $("#button_cross_id").removeClass("active");
        $("#button_hamburger_id").addClass("active");
    });
});

/************************ПОЯВЛЕНИЕ БЛОКА ФИЛЬМОВ****************************/
//прослушивание кнопки изапуск функции
$('#film_button_container_id').on('click', buttonInvisibleFilmVisible);

//функция появления блока с фильмами:
function setFilmVisible() {$('#film_container_two_id').addClass('film_visible');}

/***** ФУНКЦИЯ СКРЫТИЯ КНОПКИ И ПОЯВЛЕНИЯ БЛОКА ФИЛЬМОВ *****/
function buttonInvisibleFilmVisible() {
    $('#film_button_container_id').addClass('film_invisible'); //скрытие кнопки
    $('#film_container_two_id').removeClass('film_invisible'); //появление блока фильмов
    setTimeout(setFilmVisible, 0); //разделение удаления и добавления класса
}