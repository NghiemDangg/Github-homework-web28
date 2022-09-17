import { getStudentById, updateStudent } from "./api.js";
import { fillEditForm } from "./view.js";
$(function () {
  const $form = $("form");
  const $name = $("#name");
  const $datOfBirth = $("#birthday");
  const $email = $("#email");
  const $phone = $("#phone");

  const url = new URL(location.href);
  const studentId = url.searchParams.get("id");
  getStudentById(studentId).then(({ data }) => {
    fillEditForm(data);

    $form.on("submit", {}, (e) => {
      e.prevenDefault();
      updateStudent(studentId, {
        fullname: $name.val(),
        datOfBirth: $datOfBirth.val(),
        email: $email.val(),
        phone: $phone.val(),
      }).then(() => {
        location.href = "/";
      });
    });
  });
});
