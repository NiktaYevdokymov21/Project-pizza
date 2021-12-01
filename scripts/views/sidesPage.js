
const view = (sides) => ` <div class="spinner__wrapper" style="display: none">
                <div id="spinner"></div>
            </div>
<div class="main__wrapper">
                
        <div class="best__title title"><h2>Курица</h2></div>
        <div class="best__row elements__row ">
            ${sides.filter(side => side.categoryId === 1).map(side => `
            <div class="best__element element element-drink" id=${side.id}>
                <div class="element__logo"><img src=${side.imgLogo} alt="Streeps"></div>
                <div class="element__description element__center-description">
                    <div class="element__title element__drink-title link" onclick="window.location.hash += '/'+${side.id}"><h3>${side.name}</h3></div>
                </div>
                <div class="element__size element__side-size">
                    <div class="size__small size picked-size">Стандарт</div>
                </div>
                <div class="element__buy">
                    <div class="element__price"><span class="price__number">${side.price}</span><span
                            class="price__currency">грн</span></div>
                    <div class="element__cart">В корзину</div>
                </div>
            </div>
            `).join("")}
        </div>
            <div class="best__title title"><h2>Хлебцы</h2></div>
            <div class="best__row elements__row">
                 ${sides.filter(side => side.categoryId === 2).map(side => `
            <div class="best__element element element-drink" id=${side.id} >
                <div class="element__logo"><img src=${side.imgLogo} alt="Streeps"></div>
                <div class="element__description element__center-description">
                    <div class="element__title element__drink-title link" onclick="window.location.hash += '/'+${side.id}"><h3>${side.name}</h3></div>
                </div>
                <div class="element__size element__side-size">
                    <div class="size__small size picked-size">Стандарт</div>
                </div>
                <div class="element__buy">
                    <div class="element__price"><span class="price__number">${side.price}</span><span
                            class="price__currency">грн</span></div>
                    <div class="element__cart">В корзину</div>
                </div>
            </div>
            `).join("")}
        </div>
            <div class="best__title title"><h2>Салат</h2></div>
            <div class="best__row elements__row" >
                  ${sides.filter(side => side.categoryId === 3).map(side => `
            <div class="best__element element element-drink" id=${side.id}>
                <div class="element__logo"><img src=${side.imgLogo} alt="Streeps"></div>
                <div class="element__description element__center-description">
                    <div class="element__title element__drink-title link" onclick="window.location.hash += '/'+${side.id}"><h3>${side.name}</h3></div>
                </div>
                <div class="element__size element__side-size">
                    <div class="size__small size picked-size">Стандарт</div>
                </div>
                <div class="element__buy">
                    <div class="element__price"><span class="price__number">${side.price}</span><span
                            class="price__currency">грн</span></div>
                    <div class="element__cart">В корзину</div>
                </div>
            </div>
            `).join("")}
            </div>
    </div>`
export default view;