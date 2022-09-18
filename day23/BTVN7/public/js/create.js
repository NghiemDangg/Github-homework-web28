import { createStudent } from "./api.js";

const $form = $("form");
const $name = $("#name");
const $datOfBirth = $("#birthday");
const $email = $("#email");
const $phone = $("#phone");

$form.on('submit', {}, (e) => {
  e.preventDefault();

  createStudent({
    fullname: $name.val(),
    datOfBirth: $datOfBirth.val(),
    email: $email.val(),
    phone: $phone.val(),
  }).then(() => {
    window.location.href = "/";
  });
});


export const validate = () =>{

};