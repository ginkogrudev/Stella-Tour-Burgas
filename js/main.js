let currentLang = 'en';

const translations = {
    en: {
        display: 'EN',
        // Nav
        navTours: 'Excursions',
        navAbout: 'About Us',
        navContact: 'Contact',
        navCall: 'Call Now',
        
        // Hero
        heroTitle: 'Your Escape to the Black Sea',
        heroSub: 'Premium excursions starting from Burgas, Sozopol, and Sunny Beach.',
        labelWhere: 'Where to?',
        labelWhen: 'When?',
        labelGuests: 'Guests',
        optAny: 'Any Destination',
        optIsland: 'St. Anastasia Island',
        btnSearch: 'Find Adventure',
        
        // Tours
        toursHeader: 'Our Exclusive Selection',
        cardDesc1: 'A premium boat journey to the only inhabited island on the Bulgarian Black Sea coast.',
        cardDesc2: 'Relaxing river cruise followed by a guided historical walk in Old Town Sozopol.',
        cardDesc3: 'Off-road adrenaline in Strandzha mountain with traditional lunch included.',
        btnView: 'View Details',
        
        // "Stay With Us" Section (NEW)
        stayTag: 'Partner Hotels',
        stayTitle: 'Don\'t Just Visit.<br><span class="text-brandGold">Live Here.</span>',
        stayDesc: 'Looking for the perfect base for your adventures? We partner with the top rated apartments and hotels in Burgas and Sozopol.',
        stayBtn: 'Check Availability',
        stayGuarantee: 'Best Rate Guarantee',
        stayPartnerTitle: 'Premium Partners',
        stayPartnerSub: 'Verified Quality',
        stayQuote: '"We booked our apartment through Stella Tours and it was right next to the Sea Garden. Perfect location."',

        // About & Contact
        contactTitle: 'Let\'s Plan Your Trip',
        contactSub: 'Have questions? We are ready to answer. Call us, text us, or visit our office.'
    },
    bg: {
        display: 'BG',
        // Nav
        navTours: 'Екскурзии',
        navAbout: 'За Нас',
        navContact: 'Контакт',
        navCall: 'Обади се',
        
        // Hero
        heroTitle: 'Твоето бягство на Черноморието',
        heroSub: 'Премиум екскурзии с тръгване от Бургас, Созопол и Слънчев Бряг.',
        labelWhere: 'Дестинация?',
        labelWhen: 'Кога?',
        labelGuests: 'Гости',
        optAny: 'Всички Дестинации',
        optIsland: 'Остров Света Анастасия',
        btnSearch: 'Намери Приключение',
        
        // Tours
        toursHeader: 'Нашите Предложения',
        cardDesc1: 'Разходка с корабче до единствения обитаем остров на българското Черноморие.',
        cardDesc2: 'Релаксиращ круиз по река Ропотамо, последвана от разходка в стария Созопол.',
        cardDesc3: 'Офроуд адреналин в Странджа планина с включен традиционен обяд.',
        btnView: 'Виж Детайли',

        // "Stay With Us" Section (NEW)
        stayTag: 'Партньорски Хотели',
        stayTitle: 'Не бъди просто гост.<br><span class="text-brandGold">Живей тук.</span>',
        stayDesc: 'Търсите идеалното място за почивка? Работим с най-добрите хотели и апартаменти в Бургас и Созопол.',
        stayBtn: 'Провери Наличности',
        stayGuarantee: 'Гаранция за най-добра цена',
        stayPartnerTitle: 'Премиум Партньори',
        stayPartnerSub: 'Проверено качество',
        stayQuote: '"Запазихме апартамент чрез Stella Tours и беше точно до Морската градина. Перфектна локация."',

        // About & Contact
        contactTitle: 'Планирайте пътуването си',
        contactSub: 'Имате въпроси? Готови сме да отговорим. Обадете се или ни пишете.'
    }
};

function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'bg' : 'en';
    const t = translations[currentLang];

    // Common Elements
    document.getElementById('lang-display').textContent = t.display;
    
    // Nav
    document.querySelector('.lang-nav-tours').textContent = t.navTours;
    document.querySelector('.lang-nav-about').textContent = t.navAbout;
    document.querySelector('.lang-nav-contact').textContent = t.navContact;
    document.querySelector('.lang-nav-call').textContent = t.navCall;

    // Hero
    document.querySelector('.lang-hero-title').textContent = t.heroTitle;
    document.querySelector('.lang-hero-sub').textContent = t.heroSub;
    document.querySelector('.lang-label-where').textContent = t.labelWhere;
    document.querySelector('.lang-label-when').textContent = t.labelWhen;
    document.querySelector('.lang-label-guests').textContent = t.labelGuests;
    document.querySelector('.lang-opt-any').textContent = t.optAny;
    document.querySelector('.lang-opt-island').textContent = t.optIsland;
    document.querySelector('.lang-btn-search').textContent = t.btnSearch;
    
    // Tours
    document.querySelector('.lang-tours-header').textContent = t.toursHeader;
    document.querySelectorAll('.lang-card-desc1').forEach(el => el.textContent = t.cardDesc1);
    document.querySelectorAll('.lang-card-desc2').forEach(el => el.textContent = t.cardDesc2);
    document.querySelectorAll('.lang-card-desc3').forEach(el => el.textContent = t.cardDesc3);
    document.querySelectorAll('.lang-btn-view').forEach(el => el.textContent = t.btnView);

    // Stay With Us (NEW)
    document.querySelector('.lang-stay-tag').textContent = t.stayTag;
    document.querySelector('.lang-stay-title').innerHTML = t.stayTitle; // Note: innerHTML for the span
    document.querySelector('.lang-stay-desc').textContent = t.stayDesc;
    document.querySelector('.lang-stay-btn').textContent = t.stayBtn;
    document.querySelector('.lang-stay-guarantee').textContent = t.stayGuarantee;
    document.querySelector('.lang-stay-partner-title').textContent = t.stayPartnerTitle;
    document.querySelector('.lang-stay-partner-sub').textContent = t.stayPartnerSub;
    document.querySelector('.lang-stay-quote').textContent = t.stayQuote;

    // Contact
    document.querySelector('.lang-contact-title').textContent = t.contactTitle;
    document.querySelector('.lang-contact-sub').textContent = t.contactSub;
}