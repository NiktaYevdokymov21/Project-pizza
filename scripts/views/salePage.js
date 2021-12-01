
const view = (sale,id) => ` <div class="spinner__wrapper" style="display: none">
                <div id="spinner"></div>
            </div>
<div class="main__wrapper">
                

        <div class="sale-mains__element">
        <div class="sale-main__logo"><img src=${sale[id].imgLogo} alt=""></div>
        <div class="sale-main__description">
            <div class="sale-main__date">${sale[id].date}</div>
            <div class="sale-main__title">${sale[id].name}</div>
            <div class="sale-main__information"><p class="info__par">${sale[id].description}</div>
            <div class="sale-main__buttons">
            </div>
        </div>
    </div>
   
        </div>`

export default view;