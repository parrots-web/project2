/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий. */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const   advertisementBlockRight = document.querySelectorAll('.promo__adv img'),
        bg = document.querySelector('.promo__bg'), 
        genre = bg.querySelector('.promo__genre'),
        moviesList = document.querySelector('.promo__interactive-list'),
        addMovie = document.querySelector('.promo__interactive .add'),
        addMovieTitle = addMovie[0],
        addToFavorites = addMovie[1],
        addMovieBtn = addMovie[2],
        deleteMovieBtn = document.querySelectorAll('.promo__interactive-item'),
        checkboxFavorite = document.querySelector('.promo__interactive .add .yes').previousElementSibling;

function showMovies() {
    movieDB.movies.sort();
    moviesList.innerHTML = '';
    movieDB.movies.forEach((film, i) => {
        moviesList.innerHTML += `
        <li class="promo__interactive-item"> ${i+1}. ${film}
            <div class="delete"></div>
        </li>
        `;
    });
};

showMovies();

function checkboxVerify(item) {
    if (item == true) {
        console.log('Добавляем любимый фильм');
    }
}

addMovieBtn.addEventListener('click', function(event) {
    event.preventDefault();
    if (addMovieTitle.value != '' && addMovieTitle.value != null && addMovieTitle.value.length < 22) {
        movieDB.movies.push(addMovieTitle.value);
        checkboxVerify(checkboxFavorite.checked);
        console.log(movieDB.movies);
        addMovieTitle.value = '';
        showMovies();
    } else if (addMovieTitle.value != '' && addMovieTitle.value != null && addMovieTitle.value.length > 21) {
        movieDB.movies.push(`${addMovieTitle.value.slice(0, 21)}...`);
        checkboxVerify(checkboxFavorite.checked);
        console.log(movieDB.movies);
        addMovieTitle.value = '';
        showMovies();
    }
});

advertisementBlockRight.forEach(item => {
    item.remove();
});

genre.textContent = "Драма";
bg.style.backgroundImage = "url('../img/bg.jpg')";