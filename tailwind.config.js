/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}", 
    './**.{html,js}'
  ],
  theme: {
    extend: {
      backgroundColor: {
        'background': '#fafafa'
      },
      colors: {
        'text': '#090608',
        'background': '#fdfcfd',
        'primary': '#f782b9',
        'secondary': '#F3F782',
        'accent': '#82F7C1', 
        'link': '#8682F7',
        'footer': "#282c2f"
       },
       backgroundImage: {
        'hero-1': "./public/img/bg-1.jpg"
       },
       fontFamily: {
        'fredoka': ['Fredoka', 'sans-serif']
      },
       
    },
  },
  plugins: [],
}