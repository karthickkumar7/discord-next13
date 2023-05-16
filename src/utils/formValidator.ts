export function validateLoginForm(email: string, password: string) {
    const isValidEmail = validateEmail(email);
    const isValidPassword = validatePassword(password);

    return isValidEmail && isValidPassword;
}

export function validateRegisterForm(
    username: string,
    email: string,
    password: string,
    confirm: string
) {
    const isValidUsername = validateUsername(username);
    const isValidEmail = validateEmail(email);
    const isValidPassword = validatePassword(password);
    const isPasswordMatch = password === confirm;

    return (
        isValidEmail && isValidUsername && isValidPassword && isPasswordMatch
    );
}

// ----------------------------------------------
function validatePassword(password: string) {
    return password.length > 5 && password.length < 20;
}

function validateUsername(username: string) {
    return username.length > 3 && username.length < 20;
}

function validateEmail(email: string) {
    const emailRegex =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return emailRegex.test(email);
}
