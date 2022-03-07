const tailwindcss = require('tailwindcss')
const autoprefixer = require('autoprefixer')
const cssnano = require('cssnano')

const mode = process.env.NODE_ENV
const dev = mode === 'development'

const config = {
    plugins: [
        tailwindcss(), // First load TailwindCSS
        autoprefixer(), // ... then run autoprefixer
        !dev && // Optimize the code for production
        cssnano({
            preset: 'default',
        }),
    ],
}

module.exports = config
