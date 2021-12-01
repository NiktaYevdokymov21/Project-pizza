

const view = (products) =>
    `          <div class="spinner__wrapper" style="display: none">
                <div id="spinner"></div>
            </div>
           <div class="main__wrapper">
                          
                    <div class="best__title title"><h2>Пицца: Лучшая Цена</h2></div>
                    <div class="best__row elements__row">
                        ${products.filter((product) => product.categoryId === 1).map((rowProduct) => `<div class="best__element element" id=${rowProduct.id}>
                            <div class="element__logo"><img src=${rowProduct.imgLogo} alt="Paperoni"></div>
                            <div class="element__description">
                                <div class="element__title link" onclick="window.location.hash += '/'+${rowProduct.id}"><h3>${rowProduct.name}</h3></div>
                                <div class="element__information">${rowProduct.description}</div>
                            </div>
                            <div class="element__size element__side-size">
                                 <div class="size__small size picked-size">Стандарт</div>
                            </div>
                            <div class="element__buy">
                                <div class="element__price"><span class="price__number">${rowProduct.price}</span><span
                                        class="price__currency">грн</span></div>
                                <div class="element__cart">
                                В корзину</div>
                            </div>
                        </div>`).join("")}
                    </div>
                    <div class="classic__title title"><h2>Пицца: Классические </h2></div>
                    <div class="classic__row elements__row">
                    ${products.filter((product) => product.categoryId === 2).map((rowProduct) => `<div class="best__element element" id=${rowProduct.id}>
                            <div class="element__logo"><img src=${rowProduct.imgLogo} alt="Paperoni"></div>
                            <div class="element__description">
                                <div class="element__title link" onclick="window.location.hash += '/'+${rowProduct.id}"><h3>${rowProduct.name}</h3></div>
                                <div class="element__information">${rowProduct.description}</div>
                            </div>
                            <div class="element__size element__side-size">
                                 <div class="size__small size picked-size">Стандарт</div>
                            </div>
                            <div class="element__buy">
                                <div class="element__price"><span class="price__number">${rowProduct.price}</span><span
                                        class="price__currency">грн</span></div>
                                <div class="element__cart">
                                В корзину</div>
                            </div>
                        </div>`).join("")}
                       
                    </div>
                    <div class="firm__title title"><h2>Пицца: Фирменные </h2></div>
                    <div class="firm__row elements__row">
                          ${products.filter(product => product.categoryId === 3).map(rowProduct => `
                        <div class="best__element element" id=${rowProduct.id}>
                            <div class="element__logo"><img src=${rowProduct.imgLogo} alt="Paperoni"></div>
                            <div class="element__description">
                                <div class="element__title link" onclick="window.location.hash += '/'+${rowProduct.id}"><h3>${rowProduct.name}</h3></div>
                                <div class="element__information">${rowProduct.description}</div>
                            </div>
                            <div class="element__size element__side-size">
                                 <div class="size__small size picked-size">Стандарт</div>
                            </div>
                            <div class="element__buy">
                                <div class="element__price"><span class="price__number">${rowProduct.price}</span><span
                                        class="price__currency">грн</span></div>
                                <div class="element__cart">
                                В корзину</div>
                            </div>
                        </div>
                        `).join("")}
                    </div>
            </div>
        `;

export default view;