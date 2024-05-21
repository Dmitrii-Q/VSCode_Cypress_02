import seats from '../fixtures/seats'

describe('reservation seats', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('check for seven days', () => {
    cy.get('.page-nav__day').should('have.length', 7)
    
  })

  it('reservation one', () => {
    cy.get('.page-nav__day').eq(6).click()
    //cy.get(':nth-child(1) > .movie-seances__hall > .movie-seances__list > .movie-seances__time-block > .movie-seances__time').click()
    cy.get('.movie').first().contains('13:00').click()
    cy.get('.buying-scheme__wrapper > :nth-child(1) > :nth-child(1)').click()
    cy.get('.acceptin-button').click()
    cy.contains('Вы выбрали билеты:').should('be.visible')
    
  })

  it('reservation two', () => {
    cy.get('.page-nav__day').eq(6).click()
    cy.get('.movie').first().contains('13:00').click()
    cy.get('.buying-scheme__wrapper > :nth-child(1) > :nth-child(1)').click()
    cy.get('.buying-scheme__wrapper > :nth-child(1) > :nth-child(2)').click()
    cy.get('.acceptin-button').click()
    cy.contains('Вы выбрали билеты:').should('be.visible')
    
  })


  seats.forEach((test) => {
    it(test.name, () => {
      cy.get('.page-nav__day').eq(6).click()
      cy.get('.movie').first().contains('13:00').click()

      test.data.forEach((seat) => {
        cy.get(`.buying-scheme__wrapper > :nth-child(${seat.row}) > :nth-child(${seat.seat})`).click()
      });

      cy.get('.acceptin-button').click()
      cy.contains('Вы выбрали билеты:').should('be.visible')
    });
  });
});