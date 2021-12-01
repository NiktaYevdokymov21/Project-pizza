import {getSum} from "../main.js";


const view = (products) =>`
      
      <div class="spinner__wrapper" style="display: none">
                <div id="spinner"></div>
            </div>
<div class="main__wrapper cart-main__wrapper">
                               
                <div class="order-registration">
                    <div class="order-registration__title cart-title"><h2>Оформление заказа</h2></div>
                    <form class="order__registration-blank">

                        <div class="blank__contacts">
                            <h2 class="blank__par-title">Контакти</h2>
                            <div class="blank__contacts-raw-columns">
                            <input type="text" class="blank__contact blank__input" id="name" placeholder="Имя" required pattern="([A-Za-z]|[А-Яа-я]|[ ]){2,20}">
                            <input type="text" class="blank__contact blank__input" id="number" placeholder="Телефон (пр. 0933477730)"  required pattern="[0]{1}[0-9]{9}">
                            <input type="text" class="blank__contact blank__input" id="email" placeholder="E-mail (example@gmail.com)" required pattern="([A-Za-z]|[0-9]){4,20}[@]{1}[a-z]{3,10}[.]{1}[a-z]{2,5}">
                            </div>
                        </div>
                        <div class="blank__addresses">
                            <h2 class="blank__par-title">Адрес</h2>
                            <div class="blank__addresses-raw-columns">
                            <input type="text" class="blank__address blank__input" id="city" placeholder="Город" required pattern="([A-Za-z]|[А-Яа-я]|[А-Яа-а]|[ ]){4,20}">
                            <input type="text" class="blank__address blank__input" id="street" placeholder="Улица" required pattern="([A-Za-z]|[А-Яа-я]|[1-9]|[ ]){4,20}">
                            <input type="text" class="blank__address blank__input" id="house" placeholder="Дом" required pattern="[1-9]{1,3}">
                            <input type="text" class="blank__address blank__input" id="flat" placeholder="Квартира (необяз.)" pattern="[1-9]{1,4}">
                                <input type="text" class="blank__address blank__input" id="entrance" placeholder="Подъезд (необяз.)" pattern="[1-9]{1,2}">
                            </div>
                        </div>
                        <div class="blank__date-time">
                            <h2 class="blank__par-title">Дата и время</h2>
                            <div class="blank__date-time-raw-columns">
                                <input type="text" class="blank__date-time blank__input" id="date" placeholder="Дата (дд.мм)" id="date" required pattern="[0-9]{2}[.]{1}[0-9]{2}">
                                <input type="text" class="blank__date-time blank__input" id = "time" placeholder="Время (чч:мм)" id="time" required pattern="[0-9]{2}[:]{1}[0-9]{2}">
                            </div>
                        </div>
                        <div class="blank__payment">
                            <h2 class="blank__par-title">Оплата</h2>
                            <select class="blank__payment blank__input" id="payment">
                            <option>Наличные</option>
                            <option>Карта</option>
                            </select>
                        </div>
                        <div class="blank__price"><p id="word-par">Всего</p><p id="price-par">0 грн</p></div>
                        <div class="blank__reg-button"><a href="status.html"><button type="submit" class="order_btn">Заказать</button></a></div>

                    </form>
                </div>
                    
                <div class="order-display">
                    <div class="order-display__title cart-title"><h2>Ваш заказ</h2></div>
                    <div class="order-display__orders">
                        <div class="order-display__order">
                        ${(Object.entries(products).filter(([key]) => key !== "sales" )[0][1].
                                    filter(element => JSON.parse(localStorage.getItem("cart")).ids.
                            includes("pizzas." + element.id)).map(pizza => `
                            <div class="order__main-info">
                            <div class="order__logo"><img src=${pizza.imgLogo} alt=""></div>
                            <div class="order__description">
                                <div class="order__information">
                                <div class="order__name">
                                    <h3>${pizza.name}</h3>
                                </div>
                                <div class="order__ingrid">${pizza.description}</div>
                                <div class="order__size">
                                    Стандарт
                                </div>
                                </div>
                                <div class="order__buy" id=${"pizzas." + pizza.id}>
                                    <div class="order__price">${pizza.price +" " + "грн"}</div>
                                    <div class="order__amount-plus-minus">
                                    <div class="order__amount-minus">-</div>
                                    <div class="order__amount">${JSON.parse(localStorage.getItem("cart")).amount[JSON.parse(localStorage.getItem("cart")).ids.indexOf("pizzas." + pizza.id )]}
                                    </div>
                                    <div class="order__amount-plus">+</div>
                                    </div>
                                </div>
                            </div>
                            </div>
                            `).join(""))}
                             ${(Object.entries(products).filter(([key]) => key !== "sales" )[1][1].
                             filter(element => JSON.parse(localStorage.getItem("cart")).ids.
                            includes("drinks." + element.id)).map(drink => `
                            <div class="order__main-info">
                            <div class="order__logo"><img src=${drink.imgLogo} alt=""></div>
                            <div class="order__description">
                                <div class="order__information">
                                <div class="order__name">
                                    <h3>${drink.name}</h3>
                                </div>
                                <div class="order__ingrid">${drink.description}</div>
                                <div class="order__size">
                                    Стандарт
                                </div>
                                </div>
                                <div class="order__buy" id=${"drinks." + drink.id}>
                                    <div class="order__price">${drink.price +" " + "грн"}</div>
                                    <div class="order__amount-plus-minus">
                                    <div class="order__amount-minus">-</div>
                                    <div class="order__amount">${JSON.parse(localStorage.getItem("cart")).amount[JSON.parse(localStorage.getItem("cart")).ids.indexOf("drinks." + drink.id )]}
                                    </div>
                                    <div class="order__amount-plus">+</div>
                                    </div>
                                </div>
                            </div>
                            </div>
                            `).join(""))}
                             
                              ${(Object.entries(products).filter(([key]) => key !== "sales" )[2][1].
                            filter(element => JSON.parse(localStorage.getItem("cart")).ids.
                            includes("sides." + element.id)).map(side => `
                            <div class="order__main-info">
                            <div class="order__logo"><img src=${side.imgLogo} alt=""></div>
                            <div class="order__description">
                                <div class="order__information">
                                <div class="order__name">
                                    <h3>${side.name}</h3>
                                </div>
                                <div class="order__ingrid">${side.description}</div>
                                <div class="order__size">
                                    Стандарт
                                </div>
                                </div>
                                <div class="order__buy" id=${"sides." + side.id}>
                                    <div class="order__price">${side.price +" " + "грн"}</div>
                                    <div class="order__amount-plus-minus">
                                    <div class="order__amount-minus">-</div>
                                    <div class="order__amount">${JSON.parse(localStorage.getItem("cart")).amount[JSON.parse(localStorage.getItem("cart")).ids.indexOf("sides." + side.id )]}
                                    </div>
                                    <div class="order__amount-plus">+</div>
                                    </div>
                                </div>
                            </div>
                            </div>
                            `).join(""))}
                              
                               ${(Object.entries(products).filter(([key]) => key !== "sales" )[3][1].
                        filter(element => JSON.parse(localStorage.getItem("cart")).ids.
                                includes("deserts." + element.id)).map(desert => `
                            <div class="order__main-info">
                            <div class="order__logo"><img src=${desert.imgLogo} alt=""></div>
                            <div class="order__description">
                                <div class="order__information">
                                <div class="order__name">
                                    <h3>${desert.name}</h3>
                                </div>
                                <div class="order__ingrid">${desert.description}</div>
                                <div class="order__size">
                                    Стандарт
                                </div>
                                </div>
                                <div class="order__buy" id=${"deserts." + desert.id}>
                                    <div class="order__price">${desert.price +" " + "грн"}</div>
                                    <div class="order__amount-plus-minus">
                                    <div class="order__amount-minus">-</div>
                                    <div class="order__amount">${JSON.parse(localStorage.getItem("cart")).amount[JSON.parse(localStorage.getItem("cart")).ids.indexOf("deserts." + desert.id )]}
                                    </div>
                                    <div class="order__amount-plus">+</div>
                                    </div>
                                </div>
                            </div>
                            </div>
                            `).join(""))}
                        
                        </div>
                        <div class="order__all-price"></div>
                    </div>
                </div>
            </div>`

export default view;