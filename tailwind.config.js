/** Unified config — merges every inline tailwind.config found across the site */
module.exports = {
  content: ["./*.html", "./tours/*.html", "./destinations/*.html", "./hotels/*.html", "./consulting/*.html", "./js/*.js"],
  theme: {
    extend: {
      colors: {
        brandBlue: '#003580',
        brandGold: '#dcae1d',
        surface: '#f8fafc',
        warmBg: '#fdfbf7',
        cream: '#fdf8f0',
        darkBg: '#0f172a',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
        playfair: ['"Playfair Display"', 'serif'],
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
};
