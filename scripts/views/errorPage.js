
const view = (statusInfo) => `
 <div class="spinner__wrapper" style="display: none">
                <div id="spinner"></div>
            </div>
<div class="main__wrapper">
               
            <div class="status">
            <div class="status__title">Ошибка</div>
                <div class="status__element">
                    <div class="status__element-title"></div>
                    <div class="status__element-info">
                        <div class="status__element-info-text">Упсс ошибка... <p>Извините, но возникла ошибка...</p></div>
                       
                        <div class="status__element-info-text link" style="color: #0000CD"><a onclick="location.hash = ''">Вернуться на главную</a></div>
                        <div class="status__element-info-icon"><img src="img/krestik.png" alt=""></div>
                    </div>
                </div>
            </div>
        </div>`
export default view;