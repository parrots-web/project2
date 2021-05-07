/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий. */

'use strict';

document.addEventListener('DOMContentLoaded', () => {

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
            addMovieBtn = addMovie[2],
            checkboxFavorite = document.querySelector('.promo__interactive .add .yes').previousElementSibling;
    
    const sortArr = (arr) => {
        arr.sort();
    };

    const deleteAdv = (arr) => {
        arr.forEach(item => {
            item.remove();
        });
    };

    const makeChanges = () => {
        genre.textContent = "Драма";
        bg.style.backgroundImage = "url('../img/bg.jpg')";
    };

    function createMovieList(films, parent) {
        parent.innerHTML = '';
        sortArr(films);

            films.forEach((film, i) => {
                parent.innerHTML += `
                <li class="promo__interactive-item"> ${i+1}. ${film}
                    <div class="delete"></div>
                </li>
                `;
            });

            document.querySelectorAll('.delete').forEach((btn, i) => {
                btn.addEventListener('click', () => {
                    btn.parentElement.remove();
                    movieDB.movies.splice(i, 1);
                    createMovieList(films, parent);
                });
            });
        }
    
    addMovie.addEventListener('submit', (event) => {
        event.preventDefault();

        let newFilm = addMovieTitle.value;
        const favorite = checkboxFavorite.checked;

        if (newFilm) {

            if (newFilm.length > 21) {
                newFilm = `${newFilm.substring(0, 22)}...`;
            }

            if (favorite) {
                console.log("Добавляем любимый фильм");
            }

            movieDB.movies.push(newFilm);
            sortArr(movieDB.movies);
            createMovieList(movieDB.movies, moviesList);
    
        }

        event.target.reset();
    });

    deleteAdv(advertisementBlockRight);
    makeChanges();
    createMovieList(movieDB.movies, moviesList);

});