
const locators = {

    LOGIN: {
        USER: '[data-test=email]',
        PASSWORD: '[data-test=passwd]',
        BTN_LOGIN: '.btn'
    },


    MENU: {
        HOME: '[data-test=menu-home]',
        SETTINGS: '[data-test=menu-settings]',
        ACCOUNT: '[href="/contas"]',
        RESET: '[href="/reset"]',
        TRANSACTION: '[data-test=menu-movimentacao]',
        EXTRACT: '[data-test=menu-extrato]'
    },


    ACCOUNT: {
        NAME: '[data-test=nome]',
        BTN_SAVE: '.btn',
    },


    TRANSACTION: {
        DATA: '[data-test=data-transacao]',
        DESCRIPTION: '[data-test=descricao]',
        VALUE: '[data-test=valor]',
        OWNER: '[data-test=envolvido]',
        ACCOUNT: '[data-test=conta]',
        STATUS: '[data-test=status]',
        BTN_SAVE: '.btn-primary'
    },

    
    EXTRAT: {
        ITEM: 'li.list-group-item',
    },

    MESSAGE: '.toast-message'
}

export default locators; 