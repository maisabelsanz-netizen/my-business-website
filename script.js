const colorBtn = document.getElementById('togglebtn');
const hero = document.querySelector('.hero')
const toggleForm = document.querySelector('.formBtn');
const user_form = document.getElementById('user_form');
const form = document.getElementById('formInfo');

colorBtn.addEventListener('click', () => {
    hero.classList.toggle('active');
});

toggleForm.addEventListener('click', () => {
    user_form.classList.toggle('active');
});

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    form.reset();
    console.log(data);
});    