

const errorMessage = document.querySelector('.error_message')
const form = document.querySelector('form')




form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(form);

    const amount = formData.get('amount');
    const term =  parseInt(formData.get('term'));
    const percentage = formData.get('percentage');

    if (amount.trim()=== "") {
        errorMessage.textContent = ('This field is required')
        return;
    }
})

