// Preencha este arquivo com qualquer código que você necessite para realizar a
// coleta, desde a biblioteca analytics.js, gtag.js ou o snippet do Google Tag 
// Manager. No último caso, não é necessário implementar a tag <noscript>.
// O ambiente dispõe da jQuery 3.5.1, então caso deseje, poderá utilizá-la
// para fazer a sua coleta.
// Caso tenha alguma dúvida sobre o case, não hesite em entrar em contato.
// Ação do botão entre em contato
function tagMenuEntreEmContato() {
    ga('send', 'event', {
        eventCategory: 'menu',
        eventAction: 'entre_em_contato',
        eventLabel: 'link_externo',
        transport: 'beacon'
    });
}


// Ação do botão entre em download PDF
function tagMenuDonwloadPdf() {
    ga('send', 'event', {
        eventCategory: 'menu',
        eventAction: 'download_pdf',
        eventLabel: 'download_pdf',
        transport: 'beacon'
    });
}

function tagCardElement(element) {
    let nameOfCard = element.getAttribute('data-name');
    ga('send', 'event', {
        eventCategory: 'analise',
        eventAction: 'ver_mais',
        eventLabel: nameOfCard,
    });
    
}

function tagFormAbout(element) {
    let idOfInput = element.id;
    ga('send', 'event', {
        eventCategory: 'contato',
        eventAction: idOfInput,
        eventLabel: 'preencheu',
    });
}

function tagFormSubmit() {
    ga('send', 'event', {
        eventCategory: 'contato',
        eventAction: 'enviado',
        eventLabel: 'enviado',
    });
}


