export default function Counter({ $app }) {
    const render = () => {
        if (!$app) {
            return;
        }
        $app.innerHTML = `
       <div class="container">
          <h1>ui counter</h1>
          <div class="counter">
            <a href="#" class="minus-button"><span>-</span></a>
            <input name="count" type="text" class="count-display" value="10" max="12" min="8">
            <a href="#" class="plus-button"><span>+</span></a>
          </div>
        </div>`;
    };
    const counterEvent = (operator) => {
        const countElement = document.querySelector(".count-display");
        if (operator === '+') {
            countElement.value = String(Number(countElement.value) + 1);
        }
        else if (operator === '-') {
            countElement.value = String(Number(countElement.value) - 1);
        }
    };
    const controller = () => {
        document.getElementsByClassName('minus-button')[0].addEventListener('click', () => { counterEvent('-'); });
        document.getElementsByClassName('plus-button')[0].addEventListener('click', () => { counterEvent('+'); });
    };
    const init = () => {
        render();
        controller();
    };
    init();
}
