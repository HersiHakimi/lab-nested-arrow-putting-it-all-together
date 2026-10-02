function createLoginTracker(userInfo) {
    let attemptCount = 0;

    return (passwordAttempt) => {
        attemptCount += 1;

        // Exceeded 3 attempts → locked
        if (attemptCount > 3) {
            return "Account locked due to too many failed login attempts";
        }

        // Password matches AND attempt is less than 3 → success
        if (passwordAttempt === userInfo.password && attemptCount < 3) {
            return "Login successful";
        }

        // Otherwise → numbered failure
        return `Attempt ${attemptCount}: Login failed`;
    };
}

module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};