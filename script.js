function updateDateTime() {
    const date = new Date();
    const currentDateTime = date.toLocaleString();
    document.querySelector('#currentDateTime').textContent = currentDateTime;
}
setInterval(updateDateTime, 1000)