
const view = (deserts) => ` <div class="spinner__wrapper" style="display: none">
                <div id="spinner"></div>
            </div>
<div class="main__wrapper">
                

            <div class="best__title title"><h2>Десерты</h2></div>
            <div class="best__row elements__row">
                ${deserts.map( desert => `
                <div class="best__element element element-drink" id=${desert.id}>
                    <div class="element__logo"><img src=${desert.imgLogo} alt="Maffin"></div>
                    <div class="element__description element__center-description">
                        <div class="element__title link" onclick="window.location.hash += '/'+${desert.id}" ><h3>${desert.name}</h3></div>
                    </div>
                    <div class="element__size element__side-size">
                        <div class="size__small size picked-size">Стандарт</div>
                    </div>
                    <div class="element__buy">
                        <div class="element__price"><span class="price__number">${desert.price}</span><span
                                class="price__currency">грн</span></div>
                        <div class="element__cart">В корзину</div>
                    </div>
                </div>
                        `).join("")}
            </div>
        </div>`
export default view;