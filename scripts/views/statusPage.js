
const view = (statusInfo) => `
 <div class="spinner__wrapper" style="display: none">
                <div id="spinner"></div>
            </div>
<div class="main__wrapper">
               
            <div class="status">
            <div class="status__title">Cтатус заказа</div>
                <div class="status__element">
                    <div class="status__element-title">Заказ №${location.hash.split("/")[1]}</div>
                    <div class="status__element-info">
                        <div class="status__element-info-text">Спасибо за заказ, Чепаратор. Заказ успешно обработан. Дожидайтесь доставки! :)</div>
                        <div class="status__element-info-icon"><img src="img/galochka.png" alt=""></div>
                    </div>
                </div>
            </div>
        </div>`
export default view;