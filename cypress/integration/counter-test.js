describe('Counter test case', () => {
  let plusButtonClassName = '.plus-button';
  let minusButtonClassName = '.minus-button';
  const checkCounterButton = (_cy, buttonClassName, expectedResult) => {
    _cy.get(buttonClassName).click().get('.count-display').should('value', expectedResult);
  };
  it('check minus', () => {
    cy.visit('/');
    checkCounterButton(cy, minusButtonClassName, '9');
    checkCounterButton(cy, minusButtonClassName, '8');
  });
  it('check plus', () => {
    cy.reload();
    checkCounterButton(cy, plusButtonClassName, '11');
    checkCounterButton(cy, plusButtonClassName, '12');
  });
  it('check input min', () => {
    cy.reload();
    checkCounterButton(cy, minusButtonClassName, '9');
    checkCounterButton(cy, minusButtonClassName, '8');
    checkCounterButton(cy, minusButtonClassName, '8');
    checkCounterButton(cy, minusButtonClassName, '8');
  });
  it('check input max', () => {
    cy.reload();
    checkCounterButton(cy, plusButtonClassName, '11');
    checkCounterButton(cy, plusButtonClassName, '12');
    checkCounterButton(cy, plusButtonClassName, '12');
    checkCounterButton(cy, plusButtonClassName, '12');
  });
});
