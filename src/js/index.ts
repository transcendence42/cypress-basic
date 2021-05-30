import Counter from './modules/Counter.js';

export default function App(): void {
  // eslint-disable-next-line no-new
  new (Counter as any)({
    $app: document.querySelector<HTMLDivElement>('#app'),
  });
}

App();
