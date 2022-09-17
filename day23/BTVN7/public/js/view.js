import { deleteStudent } from "./api.js";

const $tbody = $("tbody");
/**
 *
 * @param {any[]} students
 */
export const renderTable = (students) => {
  $tbody.html(""); //xoá html cũ
  students.forEach(({ id, fullname, dateOfBirth, email, phone }) => {
    const $tr = $(`<tr>
        <td>${fullname}</td>
        <td>${dateOfBirth}</td>
        <td>${email}</td>
        <td>${phone}</td>
        <td>
            <a href="/edit.html?id=${id}" class="text-info"><i class="fa fa-edit"></i> Chỉnh sửa</a>
            |
            <a class="text-danger">
            <i class="fa fa-trash-alt"></i> Xóa
            </a>
        </td>
    </tr>`);
    $tr.find(".text-danger").on("click", { id, fullname }, (e) => {
      if (confirm(`Bạn có chắc muốn xoá: ${fullname} ?`)) {
        deleteStudent(id).then(() => {
          $tr.remove();
        });
      }
    });

    $tbody.append($tr);
  });
};

const $name = $("#name");
const $datOfBirth = $("#birthday");
const $email = $("#email");
const $phone = $("#phone");

export const fillEditForm = ({ fullname, email, phone, dateOfBirth }) => {
  $name.val(fullname);
  $datOfBirth.val(dateOfBirth);
  $email.val(email);
  $phone.val(phone);
};


