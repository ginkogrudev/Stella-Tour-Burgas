let currentLang = 'en';

const translations = {
    en: {
        display: 'EN',
        navTours: 'Excursions',
        navAbout: 'About Us',
        navContact: 'Contact',
        navCall: 'Call Now',
        heroTitle: 'Your Escape to the Black Sea',
        heroSub: 'Premium excursions starting from Burgas, Sozopol, and Sunny Beach.',
        labelWhere: 'Where to?',
        labelWhen: 'When?',
        labelGuests: 'Guests',
        optAny: 'Any Destination',
        optIsland: 'St. Anastasia Island',
        btnSearch: 'Find Adventure',
        toursHeader: 'Our Exclusive Selection',
        cardDesc1: 'A premium boat journey to the only inhabited island on the Bulgarian Black Sea coast.',
        cardDesc2: 'Relaxing river cruise followed by a guided historical walk in Old Town Sozopol.',
        cardDesc3: 'Off-road adrenaline in Strandzha mountain with traditional lunch included.',
        btnView: 'View Details',
        
        // New Sections
        aboutTitle: 'Why Choose Stella Tours?',
        aboutText1: 'We aren\'t a faceless booking engine. We are locals from Burgas who know every hidden beach, every forest path in Strandzha, and the best time to see the sunset over the pier.',
        aboutText2: 'Since 2010, we have helped over 5,000 guests discover the real Bulgaria. No tourist traps. Just authentic memories.',
        contactTitle: 'Let\'s Plan Your Trip',
        contactSub: 'Have questions? We are ready to answer. Call us, text us, or visit our office.'
    },
    bg: {
        display: 'BG',
        navTours: 'Екскурзии',
        navAbout: 'За Нас',
        navContact: 'Контакт',
        navCall: 'Обади се',
        heroTitle: 'Твоето бягство на Черноморието',
        heroSub: 'Премиум екскурзии с тръгване от Бургас, Созопол и Слънчев Бряг.',
        labelWhere: 'Дестинация?',
        labelWhen: 'Кога?',
        labelGuests: 'Гости',
        optAny: 'Всички Дестинации',
        optIsland: 'Остров Света Анастасия',
        btnSearch: 'Намери Приключение',
        toursHeader: 'Нашите Предложения',
        cardDesc1: 'Разходка с корабче до единствения обитаем остров на българското Черноморие.',
        cardDesc2: 'Релаксиращ круиз по река Ропотамо, последвана от разходка в стария Созопол.',
        cardDesc3: 'Офроуд адреналин в Странджа планина с включен традиционен обяд.',
        btnView: 'Виж Детайли',

        // New Sections
        aboutTitle: 'Защо Stella Tours?',
        aboutText1: 'Ние не сме просто сайт за резервации. Ние сме местни хора от Бургас, които познават всеки скрит плаж и всяка пътека в Странджа.',
        aboutText2: 'От 2010 г. насам помогнахме на над 5,000 гости да открият истинската България. Без "туристически капани". Само истински спомени.',
        contactTitle: 'Планирайте пътуването си',
        contactSub: 'Имате въпроси? Готови сме да отговорим. Обадете се или ни пишете.'
    }
};

function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'bg' : 'en';
    const t = translations[currentLang];

    // Common Elements
    document.getElementById('lang-display').textContent = t.display;
    document.querySelector('.lang-nav-tours').textContent = t.navTours;
    document.querySelector('.lang-nav-about').textContent = t.navAbout;
    document.querySelector('.lang-nav-contact').textContent = t.navContact;
    document.querySelector('.lang-nav-call').textContent = t.navCall;
    document.querySelector('.lang-hero-title').textContent = t.heroTitle;
    document.querySelector('.lang-hero-sub').textContent = t.heroSub;
    document.querySelector('.lang-label-where').textContent = t.labelWhere;
    document.querySelector('.lang-label-when').textContent = t.labelWhen;
    document.querySelector('.lang-label-guests').textContent = t.labelGuests;
    document.querySelector('.lang-opt-any').textContent = t.optAny;
    document.querySelector('.lang-opt-island').textContent = t.optIsland;
    document.querySelector('.lang-btn-search').textContent = t.btnSearch;
    document.querySelector('.lang-tours-header').textContent = t.toursHeader;
    
    // Cards
    document.querySelectorAll('.lang-card-desc1').forEach(el => el.textContent = t.cardDesc1);
    document.querySelectorAll('.lang-card-desc2').forEach(el => el.textContent = t.cardDesc2);
    document.querySelectorAll('.lang-card-desc3').forEach(el => el.textContent = t.cardDesc3);
    document.querySelectorAll('.lang-btn-view').forEach(el => el.textContent = t.btnView);

    // About & Contact
    document.querySelector('.lang-about-title').textContent = t.aboutTitle;
    document.querySelector('.lang-about-text1').textContent = t.aboutText1;
    document.querySelector('.lang-about-text2').textContent = t.aboutText2;
    document.querySelector('.lang-contact-title').textContent = t.contactTitle;
    document.querySelector('.lang-contact-sub').textContent = t.contactSub;
}