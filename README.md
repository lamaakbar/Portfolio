# Portfolio - Lama Fathi Akbar

A modern, responsive portfolio website showcasing my work, experience, and skills as a Software Engineering Student.

## Features

- 🎨 Modern and beautiful UI/UX design
- 📱 Fully responsive design (mobile, tablet, desktop)
- ⚡ Built with React and Vite for fast performance
- 🎯 Smooth scrolling navigation
- 🌈 Gradient animations and hover effects
- 📋 Complete sections: About, Experience, Projects, Skills, Education, Certifications, Languages, and References

## Technologies Used

- React 18
- Vite
- CSS3 (Custom properties, Flexbox, Grid)
- Modern JavaScript (ES6+)

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd Portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The production build will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## Deployment

This portfolio can be easily deployed to various platforms:

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Vite and configure the build settings
4. Deploy!

### Netlify

1. Push your code to GitHub
2. Import your repository on [Netlify](https://netlify.com)
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Deploy!

### GitHub Pages

1. Install `gh-pages`: `npm install --save-dev gh-pages`
2. Add to `package.json` scripts:
```json
"deploy": "npm run build && gh-pages -d dist"
```
3. Run: `npm run deploy`

## Project Structure

```
Portfolio/
├── public/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Experience.jsx
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   ├── Education.jsx
│   │   ├── Certifications.jsx
│   │   ├── Languages.jsx
│   │   ├── References.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Customization

To customize the portfolio with your own information:

1. Update personal information in `src/components/Hero.jsx`
2. Modify experience in `src/components/Experience.jsx`
3. Add/edit projects in `src/components/Projects.jsx`
4. Update skills in `src/components/Skills.jsx`
5. Modify other sections as needed
6. Update colors in `src/index.css` (CSS variables)

## License

This project is open source and available under the MIT License.

## Contact

- Email: Lamaf.akbar@gmail.com
- Location: Jeddah, Saudi Arabia
- LinkedIn: [Your LinkedIn Profile]
- GitHub: [Your GitHub Profile]
