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
        'secondary': '#fcf683',
        'accent': '#44f8c2', 
        'link': '#2200CC',
        'footer': "#282c2f"
       },
       backgroundImage: {
        'hero-1': "./public/img/bg-1.jpg"
       }
       
    },
  },
  plugins: [],
}