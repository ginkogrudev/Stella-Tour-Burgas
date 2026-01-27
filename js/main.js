let currentLang = 'en';

const translations = {
    en: {
        display: 'EN',
        // Nav
        navTours: 'Excursions',
        navAbout: 'Reviews & Story',
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
        cardDesc2: 'Relaxing river cruise followed by a guided historical walk in Old Town Nesebar.',
        cardDesc3: 'Off-road adrenaline in Strandzha mountain with traditional lunch included.',
        btnView: 'View Details',
        
        // Stay With Us
        stayTag: 'Partner Hotels',
        stayTitle: 'Don\'t Just Visit.<br><span class="text-brandGold">Live Here.</span>',
        stayDesc: 'Looking for the perfect base for your adventures? We partner with the top rated apartments and hotels in Burgas and Sozopol.',
        stayBtn: 'Check Availability',
        stayGuarantee: 'Best Rate Guarantee',
        stayPartnerTitle: 'Premium Partners',
        stayPartnerSub: 'Verified Quality',
        stayQuote: '"We booked our apartment through Stella Tours and it was right next to the Sea Garden. Perfect location."',

        // === REVIEWS & COMMUNITY (Squid Section) ===
        aboutHeader: 'Memories Made in Burgas',
        aboutSub: 'Don\'t just take our word for it. See what our adventurers have to say.',
        reviewQuote: '"The Jeep Safari was insane! The squid mascot is funny, but the views of Strandzha were serious beauty. Best day ever."',
        reviewName: 'Elena & Friends',
        
        // Why Us Column
        aboutTag: 'Local Experts since 2010',
        aboutTitle: 'More Than Just a Tour.',
        aboutText1: 'We aren\'t a faceless booking engine. We are locals from Burgas who know every hidden beach, the best spot for mussels, and the secret forest paths in Strandzha.',
        
        // Facebook Box
        fbTitle: 'Have a cool photo or story?',
        fbText: 'Did you snap a great pic of the sunset? Tag us @StellaToursBurgas on Facebook. We feature the best shots (and "Curious Squid" sightings) right here!',
        fbBtn: 'Join the Community',

        // Contact & Cookies
        contactTitle: 'Let\'s Plan Your Trip',
        contactSub: 'Have questions? We are ready to answer. Call us, text us, or visit our office.',
        cookieText: 'We use cookies to enhance your experience and analyze our traffic. By clicking "Accept", you consent to our use of cookies.',
        cookieAccept: 'Accept',
        cookieDecline: 'Decline'
    },
    bg: {
        display: 'BG',
        // Nav
        navTours: 'Екскурзии',
        navAbout: 'Отзиви и История',
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
        cardDesc2: 'Релаксиращ круиз по река Ропотамо, последвана от разходка в стария Несебър.',
        cardDesc3: 'Офроуд адреналин в Странджа планина с включен традиционен обяд.',
        btnView: 'Виж Детайли',

        // Stay With Us
        stayTag: 'Партньорски Хотели',
        stayTitle: 'Не бъди просто гост.<br><span class="text-brandGold">Живей тук.</span>',
        stayDesc: 'Търсите идеалното място за почивка? Работим с най-добрите хотели и апартаменти в Бургас и Созопол.',
        stayBtn: 'Провери Наличности',
        stayGuarantee: 'Гаранция за най-добра цена',
        stayPartnerTitle: 'Премиум Партньори',
        stayPartnerSub: 'Проверено качество',
        stayQuote: '"Запазихме апартамент чрез Stella Tours и беше точно до Морската градина. Перфектна локация."',

        // === REVIEWS & COMMUNITY (Squid Section) ===
        aboutHeader: 'Спомени от Бургас',
        aboutSub: 'Не вярвайте само на думите ни. Вижте какво казват нашите приключенци.',
        reviewQuote: '"Джип сафарито беше лудост! Калмарът е забавен, но гледките в Странджа бяха невероятно красиви. Най-добрият ден!"',
        reviewName: 'Елена и приятели',

        // Why Us Column
        aboutTag: 'Местни експерти от 2010',
        aboutTitle: 'Повече от просто екскурзия.',
        aboutText1: 'Ние не сме безличен сайт за резервации. Ние сме местни хора от Бургас, които познават всеки скрит плаж, най-доброто място за миди и тайните пътеки в Странджа.',

        // Facebook Box
        fbTitle: 'Имаш яка снимка или история?',
        fbText: 'Направи ли страхотна снимка на залеза? Тагни ни @StellaToursBurgas във Facebook. Най-добрите кадри (и снимки с калмара) показваме тук!',
        fbBtn: 'Влез в групата',

        // Contact & Cookies
        contactTitle: 'Планирайте пътуването си',
        contactSub: 'Имате въпроси? Готови сме да отговорим. Обадете се или ни пишете.',
        cookieText: 'Използваме бисквитки, за да подобрим преживяването ви и да анализираме трафика. С натискането на "Приемам", вие се съгласявате с използването на бисквитки.',
        cookieAccept: 'Приемам',
        cookieDecline: 'Отказ'
    }
};

// === FUNCTIONS ===

// 1. Mobile Menu
function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
}

// 2. Language Toggle
function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'bg' : 'en';
    const t = translations[currentLang];

    // Common Elements
    document.getElementById('lang-display').textContent = t.display;
    document.getElementById('lang-display-mobile').textContent = t.display;
    
    // Nav
    document.querySelectorAll('.lang-nav-tours').forEach(el => el.textContent = t.navTours);
    document.querySelectorAll('.lang-nav-about').forEach(el => el.textContent = t.navAbout);
    document.querySelectorAll('.lang-nav-contact').forEach(el => el.textContent = t.navContact);
    document.querySelectorAll('.lang-nav-call').forEach(el => el.textContent = t.navCall);

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

    // Stay With Us
    document.querySelector('.lang-stay-tag').textContent = t.stayTag;
    document.querySelector('.lang-stay-title').innerHTML = t.stayTitle;
    document.querySelector('.lang-stay-desc').textContent = t.stayDesc;
    document.querySelector('.lang-stay-btn').textContent = t.stayBtn;
    document.querySelector('.lang-stay-guarantee').textContent = t.stayGuarantee;
    document.querySelector('.lang-stay-partner-title').textContent = t.stayPartnerTitle;
    document.querySelector('.lang-stay-partner-sub').textContent = t.stayPartnerSub;
    document.querySelector('.lang-stay-quote').textContent = t.stayQuote;

    // === NEW REVIEWS & SQUID SECTION ===
    document.querySelector('.lang-about-header').textContent = t.aboutHeader;
    document.querySelector('.lang-about-sub').textContent = t.aboutSub;
    document.querySelector('.lang-review-quote').textContent = t.reviewQuote;
    document.querySelector('.lang-review-name').textContent = t.reviewName;
    
    document.querySelector('.lang-about-tag').textContent = t.aboutTag;
    document.querySelector('.lang-about-title').textContent = t.aboutTitle;
    document.querySelector('.lang-about-text1').textContent = t.aboutText1;

    document.querySelector('.lang-fb-title').textContent = t.fbTitle;
    document.querySelector('.lang-fb-text').textContent = t.fbText;
    // Note: We use innerHTML here to keep the SVG icon inside the button
    document.querySelector('.lang-fb-btn').innerHTML = '<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>' + t.fbBtn;

    // About & Contact
    document.querySelector('.lang-contact-title').textContent = t.contactTitle;
    document.querySelector('.lang-contact-sub').textContent = t.contactSub;

    // Cookie Banner
    document.querySelector('.lang-cookie-text').textContent = t.cookieText;
    document.querySelector('.lang-cookie-accept').textContent = t.cookieAccept;
    document.querySelector('.lang-cookie-decline').textContent = t.cookieDecline;
}

// === COOKIE LOGIC (Consent Mode v2) ===

function acceptCookies() {
    localStorage.setItem('cookieConsent', 'accepted');
    document.getElementById('cookie-banner').classList.add('hidden');
    
    // The "Update" command - This tells Google "Go ahead and track"
    // IMPORTANT: This works because the script is already loaded in <head> with 'denied' status
    gtag('consent', 'update', {
        'ad_storage': 'granted',
        'ad_user_data': 'granted',        // New v2 required parameter
        'ad_personalization': 'granted',  // New v2 required parameter
        'analytics_storage': 'granted'
    });
    
    console.log("Consent Granted - Google Tags Active");
}

function declineCookies() {
    localStorage.setItem('cookieConsent', 'declined');
    document.getElementById('cookie-banner').classList.add('hidden');
    
    // Optional: Explicitly reaffirm denial
    gtag('consent', 'update', {
        'ad_storage': 'denied',
        'ad_user_data': 'denied',
        'ad_personalization': 'denied',
        'analytics_storage': 'denied'
    });
}

// Check Logic on Load
window.addEventListener('load', () => {
    const consent = localStorage.getItem('cookieConsent');
    
    if (consent === 'accepted') {
        // If they already accepted previously, run the update immediately
        gtag('consent', 'update', {
            'ad_storage': 'granted',
            'ad_user_data': 'granted',
            'ad_personalization': 'granted',
            'analytics_storage': 'granted'
        });
    } else if (consent === 'declined') {
        // Do nothing, default 'denied' from index.html applies
    } else {
        // Show banner if no choice made
        document.getElementById('cookie-banner').classList.remove('hidden');
    }
});