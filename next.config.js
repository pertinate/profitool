const path = require('path');
/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: true,
    env: {
        NEXT_SB_URL: process.env.NEXT_SB_URL,
        NEXT_SB_ANON_KEY: process.env.NEXT_SB_ANON_KEY
    },
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    }
};
