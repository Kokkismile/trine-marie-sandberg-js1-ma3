function displaySuccess(message) {
    return `<div class="success">${message}</div>`;
};

function displayError(message = "Unknown error") {
    return `<div class="error">${message}</div>`;
};