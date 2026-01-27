let currentLang = 'en';

// === GOOGLE ANALYTICS ID ===
const GA_MEASUREMENT_ID = 'G-9YCTHHJSJE';

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

        // About & Contact
        aboutTitle: 'Why Choose Stella Tours?',
        aboutText1: 'We aren\'t a faceless booking engine. We are locals from Burgas who know every hidden beach, every forest path in Strandzha, and the best time to see the sunset over the pier.',
        aboutText2: 'Since 2010, we have helped over 5,000 guests discover the real Bulgaria. No tourist traps. Just authentic memories.',
        contactTitle: 'Let\'s Plan Your Trip',
        contactSub: 'Have questions? We are ready to answer. Call us, text us, or visit our office.',

        // Cookie Banner
        cookieText: 'We use cookies to enhance your experience and analyze our traffic. By clicking "Accept", you consent to our use of cookies.',
        cookieAccept: 'Accept',
        cookieDecline: 'Decline'
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

        // About & Contact
        aboutTitle: 'Защо Stella Tours?',
        aboutText1: 'Ние не сме просто сайт за резервации. Ние сме местни хора от Бургас, които познават всеки скрит плаж и всяка пътека в Странджа.',
        aboutText2: 'От 2010 г. насам помогнахме на над 5,000 гости да открият истинската България. Без "туристически капани". Само истински спомени.',
        contactTitle: 'Планирайте пътуването си',
        contactSub: 'Имате въпроси? Готови сме да отговорим. Обадете се или ни пишете.',

        // Cookie Banner
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

    // About & Contact
    document.querySelector('.lang-about-title').textContent = t.aboutTitle;
    document.querySelector('.lang-about-text1').textContent = t.aboutText1;
    document.querySelector('.lang-about-text2').textContent = t.aboutText2;
    document.querySelector('.lang-contact-title').textContent = t.contactTitle;
    document.querySelector('.lang-contact-sub').textContent = t.contactSub;

    // Cookie Banner
    document.querySelector('.lang-cookie-text').textContent = t.cookieText;
    document.querySelector('.lang-cookie-accept').textContent = t.cookieAccept;
    document.querySelector('.lang-cookie-decline').textContent = t.cookieDecline;
}

// === COOKIE LOGIC ===

function loadGoogleAnalytics() {
    // Determine if script is already present
    if(document.getElementById('ga-script')) return;

    // Create Script Tag
    const script = document.createElement('script');
    script.id = 'ga-script';
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    script.async = true;
    document.head.appendChild(script);

    // Initialize DataLayer
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', GA_MEASUREMENT_ID);
    
    console.log("GA Loaded");
}
// === COOKIE LOGIC (Consent Mode v2) ===

function acceptCookies() {
    localStorage.setItem('cookieConsent', 'accepted');
    document.getElementById('cookie-banner').classList.add('hidden');
    
    // The "Update" command - This tells Google "Go ahead and track"
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
    
    // Optional: Explicitly reaffirm denial (good practice)
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