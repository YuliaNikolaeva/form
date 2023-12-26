'use strict'

const header = document.querySelector('.header');
const coverForm = document.querySelector('.coverForm');
const answerBox = document.querySelector('.answerBox');
const answerBoxBad = document.querySelector('.answerBoxBad');
const form = document.querySelector('.form');
const btn = document.getElementById('btn');
const confCheckBox = document.getElementById('conf');
const coverInpt = document.querySelector('.coverInpt');

const correctPw = '2024';

btn.addEventListener('click', getPw);

function getPw(e) {
    e.preventDefault();
    const pwInptValue = document.getElementById('pw').value;

    header.classList.add("hide");
    coverForm.classList.add("hide");
    const checkboxIsActive = confCheckBox.checked;

    if (pwInptValue === correctPw) {
        answerBox.classList.add("visible");
    } else {
        answerBoxBad.classList.add("visible");
    }
    form.reset();
}