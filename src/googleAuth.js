// Import environment variables for Google OAuth
const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;

// Export the credentials for use in other files
module.exports = {
    GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET
};
