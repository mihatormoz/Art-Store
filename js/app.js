// Импорт значений artArray из админки
const url = 'https://62cd28a1a43bf78008529b98.mockapi.io/api/admin/artStore'
const getData = async (url) => {
    const response = await fetch(url)
    if (!response.ok) {
        throw new Error(`Ошибка по адресу: ${url}; Статус ошибки: ${response.status}`)
    }
    return await response.json()
}
    
// Открыть контакты
const contactBtn = document.querySelector('.contact__btn')
const popContact = document.querySelector('.pop')
const body = document.body

contactBtn.addEventListener('click', () => {
    popContact.classList.add('active')
    body.classList.add('noscroll')
})

// Закрыть контакты
const crossBtn = document.querySelector('.pop__cross')

crossBtn.addEventListener('click', () => {
    popContact.classList.remove('active')
    body.classList.remove('noscroll')
})
// Добавить карточку
const shopCard = document.querySelector('.shop__col')

const artCard = async () => {
    let artC = await getData(url)
    for (const key in artC) {
        shopCard.innerHTML += `
        <div class="card">
            <img src="images\\${artC[key].img}" alt="${artC[key].title}" class="card__img">
            <h2 class="card__title">Название: ${artC[key].title}</h2>
            <p class="card__descr">Описание: ${artC[key].descr}</p>
            <p class="card__size">Размер: ${artC[key].width} X ${artC[key].height}</p>
            <p class="card__price">Цена: ${artC[key].price} руб.</p>
        </div>
    `
    }
}
artCard()