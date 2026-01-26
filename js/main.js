let currentLang = 'en';

// Dictionary
const translations = {
    en: {
        display: 'EN',
        navTours: 'Excursions',
        navReviews: 'Reviews',
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
        toursSub: 'Curated experiences for the modern traveler.',
        cardDesc1: 'A premium boat journey to the only inhabited island on the Bulgarian Black Sea coast.',
        cardDesc2: 'Relaxing river cruise followed by a guided historical walk in Old Town Sozopol.',
        cardDesc3: 'Off-road adrenaline in Strandzha mountain with traditional lunch included.',
        btnView: 'View Details'
    },
    bg: {
        display: 'BG',
        navTours: 'Екскурзии',
        navReviews: 'Отзиви',
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
        toursSub: 'Специално подбрани преживявания за теб.',
        cardDesc1: 'Разходка с корабче до единствения обитаем остров на българското Черноморие.',
        cardDesc2: 'Релаксиращ круиз по река Ропотамо, последван от разходка в стария Созопол.',
        cardDesc3: 'Офроуд адреналин в Странджа планина с включен традиционен обяд.',
        btnView: 'Виж Детайли'
    }
};

function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'bg' : 'en';
    const t = translations[currentLang];

    // Update Text Elements
    document.getElementById('lang-display').textContent = t.display;
    
    // Navbar
    document.querySelector('.lang-nav-tours').textContent = t.navTours;
    document.querySelector('.lang-nav-reviews').textContent = t.navReviews;
    document.querySelector('.lang-nav-call').textContent = t.navCall;

    // Hero
    document.querySelector('.lang-hero-title').textContent = t.heroTitle;
    document.querySelector('.lang-hero-sub').textContent = t.heroSub;
    
    // Search Bar
    document.querySelector('.lang-label-where').textContent = t.labelWhere;
    document.querySelector('.lang-label-when').textContent = t.labelWhen;
    document.querySelector('.lang-label-guests').textContent = t.labelGuests;
    document.querySelector('.lang-opt-any').textContent = t.optAny;
    document.querySelector('.lang-opt-island').textContent = t.optIsland;
    document.querySelector('.lang-btn-search').textContent = t.btnSearch;

    // Tours
    document.querySelector('.lang-tours-header').textContent = t.toursHeader;
    document.querySelector('.lang-tours-sub').textContent = t.toursSub;
    
    // Cards
    document.querySelectorAll('.lang-card-desc1').forEach(el => el.textContent = t.cardDesc1);
    document.querySelectorAll('.lang-card-desc2').forEach(el => el.textContent = t.cardDesc2);
    document.querySelectorAll('.lang-card-desc3').forEach(el => el.textContent = t.cardDesc3);
    document.querySelectorAll('.lang-btn-view').forEach(el => el.textContent = t.btnView);
}

// Optional: Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('shadow-md');
    } else {
        navbar.classList.remove('shadow-md');
    }
});