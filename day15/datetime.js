/**
 * Trả về chuỗi đại diện cho ngày hôm nay theo định dạng VN
 *
 * Ví dụ: 01/10/2022 (lưu ý, ngày tháng đầy đủ 2 chữ số)
 *
 * @returns {string} Chuỗi ngày tháng
 */
function currentDate() {
  let now = new Date();
  return now.toLocaleDateString("vi-VN");
  // return now.getDate() + "/" + (now.getMonth() + 1) + "/" + now.getFullYear();
}
console.log(currentDate());
/**
 * Trả về chuỗi đại diện cho thời gian hiện tại
 *
 * Ví dụ: 10:30:59 (lưu ý, giờ, phút, giây đầy đủ 2 chữ số)
 *
 * @returns {string} Chuỗi thời gian
 */
function currentTime() {
  let now = new Date();
  return now.toLocaleTimeString("vi-VN");
  // return now.getHours() + ":" + now.getMinutes() + ":" + now.getMilliseconds();
}
console.log(currentTime());

/**
 * Tìm thứ trong tuần tương ứng với ngày hiện tại
 *
 * Ví dụ: T2, T3, ..., CN
 *
 * @returns {string} Thứ tương ứng
 */
function todayWeekday() {
  let date = new Date();
  return date.toLocaleDateString("vi-VN", {
    weekday: "long",
  });
}
console.log(todayWeekday());
/**
 * Tìm ngày cuối cùng của tháng
 *
 * @param {Date} date - Ngày bất kỳ
 *
 * @returns {Date} Ngày cuối tháng
 */
function getLastDayOfMonth(year, month, date) {
  let d = new Date(year, month + 1, date).getDate();
  return d;
}

// console.log(getLastDayOfMonth(2014, 2, 02));
getLastDayOfMonth(2014,0,8);
/**zz
 * Tính số ngày đến tết dương lịch năm sau
 *
 * @returns {number} Số ngày cho đến tết dương lịch năm sau
 */
function getDaysToNextYear() {
  let curentDate = new Date();
  let lunarDate = new Date("01/22/2023");
  let timeDiff = Math.abs(lunarDate.getTime() - curentDate.getTime());
  let time = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
  return time;
}
console.log(getDaysToNextYear());
/**
 * Tính số ngày cho đến sinh nhật tiếp theo
 *
 * @param {number} month Tháng sinh
 * @param {number} day Ngày sinh
 *
 * @return {number} Số ngày cho đến sinh nhật tiếp theo
 */
function getDaysToNextBirthday(month, day) {
  let curentDate = new Date();
  let nextBDay = new Date("04/14/2023");
  let timeDiff = Math.abs(nextBDay.getTime() - curentDate.getTime());
  let time = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
  return time;
}
console.log(getDaysToNextBirthday(14, 04));

/**
 * @typedef {Object} user
 * @property {string} fullname - Họ tên
 * @property {string} dateOfBirth - Ngày sinh
 */

/**
 * Kiểm tra xem ai có sinh nhật vào hôm nay
 *
 * @param {user[]} users Danh sách người dùng
 *
 * @return {user[]} Danh sách người có sinh nhật vào hôm nay
 */
function todayBirthday(users) {
  let day = new Date().toLocaleDateString("vi-VN");
}

const users = [
  { name: "Đăng", DOB: "14/04/2001" },
  { name: "Ba", DOB: "20/02/1992" },
  { name: "Cường", DOB: "22/09/1995" },
  { name: "Hà", DOB: "28/01/2001" },
  { name: "Đạt", DOB: "02/09/2008" },
  { name: "Phi", DOB: "12/07/2004" },
  { name: "Thiên", DOB: "22/08/1999" },
  { name: "Tùng", DOB: "28/09/2000" },
  { name: "Tường", DOB: "22/08/1999" },
  { name: "Trường", DOB: "13/04/2004" },
];

// console.log(todayBirthday(users));
let day = new Date().toLocaleDateString("vi-VN");
console.log(typeof day);
console.log(day.split("/"));
