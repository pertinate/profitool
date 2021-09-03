const path = require('path');
/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: true,
    env: {
    },
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    }
};
