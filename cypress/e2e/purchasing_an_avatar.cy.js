describe('Покупка рандомного аватара тренера', function () {
    
    it('1. Покупка аватара для тренера', function () {
        cy.visit('https://pokemonbattle.me/');
        cy.get(':nth-child(1) > .auth__input').type('kikeh39409@oprevolt.com');
        cy.get('#password').type('Тестовый1');
        cy.get('.auth__button').click();
        cy.wait(5000); //если не будет задержки, то выдаст 500-ку
        cy.get('.header__container > .header__id').click();
        cy.wait(5000); //чтобы показать какой аватар(для удобства проверки задания)
        cy.get('.header__btns > [href="/shop"]').click();
        let randomNumber = Math.floor(Math.random()  *  12) + 1; //для того, чтобы был рандомный аватар прописал переменную
        cy.get('.shop__list > li').not('.feature-empty').children('.shop__button').eq(randomNumber).click();
        cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4620869113632996');
        cy.get(':nth-child(1) > .pay_base-input-v2').type('1225');
        cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125');
        cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('German Dolnikov');
        cy.get('.pay-btn').click();
        cy.get('#cardnumber').type('56456');
        cy.get('.payment__submit-button').click();
        cy.get('.payment__adv').click();
        cy.wait(5000); //если не будет задержки, то выдаст 500-ку
        cy.get('.header__container > .header__id').click();
        cy.wait(5000); //чтобы показать какой аватар(для удобства проверки задания)
        cy.get('.header__container > .top_menu_exit').click();// прибераемся за собой
        cy.clearCookies();
        cy.clearLocalStorage();
        cy.end();
        })
})