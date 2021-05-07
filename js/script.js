/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

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
        moviesList = document.querySelector('.promo__interactive-list');

movieDB.movies.sort();

advertisementBlockRight.forEach(item => {
    item.remove();
});

genre.textContent = "Драма";
bg.style.backgroundImage = "url('../img/bg.jpg')";

moviesList.innerHTML = '';

movieDB.movies.forEach((film, i) => {
    moviesList.innerHTML += `
    <li class="promo__interactive-item"> ${i+1}. ${film}
        <div class="delete"></div>
    </li>
    `;
});

// for (let i = 0; i < moviesList.length; i++) {
//     moviesList[i].textContent = `${i+1}. ${movieDB.movies[i]}`;
// };