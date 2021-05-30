export default function Counter({ $app }: { $app: HTMLDivElement | null }): void {
  const render = (): void => {
    if (!$app) {
      return;
    }
    // eslint-disable-next-line no-param-reassign
    $app.innerHTML = `
       <div class="container">
          <h1>ui counter</h1>
          <div class="counter">
            <a href="#" class="minus-button"><span>-</span></a>
            <input name="count" type="text" class="count-display" value="10">
            <a href="#" class="plus-button"><span>+</span></a>
          </div>
        </div>`;
  };

  const counterEvent = (operator: string): void => {
    const countElement: HTMLInputElement = document.querySelector<HTMLInputElement>('.count-display')!;
    if (operator === '+' && Number(countElement.value) < 12) {
      countElement.value = String(Number(countElement.value) + 1);
    } else if (operator === '-' && Number(countElement.value) > 8) {
      countElement.value = String(Number(countElement.value) - 1);
    }
  };

  const controller = (): void => {
    document.getElementsByClassName('minus-button')[0].addEventListener('click', () => {
      counterEvent('-');
    });
    document.getElementsByClassName('plus-button')[0].addEventListener('click', () => {
      counterEvent('+');
    });
  };

  const init = (): void => {
    render();
    controller();
  };

  init();
}
