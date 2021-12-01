const view = (sales) => ` <div class="spinner__wrapper" style="display: none">
                <div id="spinner"></div>
            </div>
<div class="main__wrapper">
                

        <div class="sales__list">
            ${sales.map(sale => `
            <div class="sales-main__element">
                <div class="sales-main__logo"><img src=${sale.imgLogo} alt=""></div>
                <div class="sales-main__description">
                    <div class="sales-main__date">${sale.date}</div>
                    <div class="sales-main__title">${sale.name}</div>
                    <div class="sales-main__information">${sale.description}</div>
                    <div class="sales-main__buttons">
                        <a class="sales-main__details link" onclick="window.location.hash += '/'+${sale.id}">Детали</a>
                        <button class="sales-main__activate">Активировать купон</button>
                    </div>
                </div>
            </div>
           `).join("")}
        </div>
        </div>`
export default view;