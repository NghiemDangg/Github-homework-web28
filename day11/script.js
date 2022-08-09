/**
 * Tìm số lớn nhất trong 3 số
 *
 * @param {number} a Số thứ 1
 * @param {number} b Số thứ 2
 * @param {number} c Số thứ 3
 *
 * @return {number} Số lớn nhất trong 3 số
 */
function maxOfThree(a, b, c) {
  if (a > b && a > c) {
    return a;
  } else if (b > a && b > c) {
    return b;
  } else if (c > a && c > b) {
    return c;
  } else {
    return NaN;
  }
}
console.log("Bai 1:");
console.log(maxOfThree(6, 5, 4));
console.log(maxOfThree(5, 6, 4));
console.log(maxOfThree(4, 5, 6));
console.log(maxOfThree(6, 5, "*"));
/**
 * Tìm mùa tương ứng với tháng
 *
 * - Winter (mùa đông): 12, 1, 2
 * - Spring (mùa xuân): 3, 4, 5
 * - Summer (mùa hạ): 6, 7, 8
 * - Fall (mùa thu): 9, 10, 11
 *
 * @param {number} month Tháng trong năm
 *
 * @return {number} Mùa tương ứng với tháng (Winter | Spring | Summer | Fall)
 */
function findSeason(month) {
  switch (month) {
    case 1:
    case 2:
    case 12:
      console.log("Winter");
      break;
    case 3:
    case 4:
    case 5:
      console.log("Spring");
      break;
    case 6:
    case 7:
    case 8:
      return console.log("Summer");
      break;
    case 9:
    case 10:
    case 11:
      return console.log("Fall");
      break;
    default:
      return console.log("Enter the month");
  }
}
console.log("\nBai 2:");
findSeason(3);
findSeason(12);
findSeason(5);
findSeason(13);
/**
 * Kiểm tra xem một năm có phải năm nhuận hay không
 *
 * Theo lịch Gregory, năm nhuận là năm có số năm chia hết cho `4` và không chia hết cho `100`,
 * tuy nhiên ngoại lệ với các năm chia hết cho `100` vẫn được coi là năm nhuận nếu nó cũng chia hết cho `400`
 *
 * - `2020` là năm nhuận vì chia hết cho `4` nhưng không chia hết cho `100`
 * - `2100` không phải năm nhuận vì chia hết cho `4` nhưng chia hết cho `100`
 * - `2000` là năm nhuận vì chia hết cho `100` nhưng cũng chia hết cho `400`
 *
 * @param {number} year Năm bất kỳ
 *
 * @return {boolean} Năm này có phải năm nhuận hay không
 */
function isLeafYear(year) {
  if (year % 4 == 0 && year % 100 != 0) {
    return true;
  } else if (year % 400 == 0) {
    return true;
  } else {
    return false;
  }
}
console.log("\nBài 3:");
console.log(isLeafYear(2020));
console.log(isLeafYear(1999));
console.log(isLeafYear(2000));
console.log(isLeafYear(19390));
/**
 * Tìm số ngày trong tháng
 *
 * - Các tháng `1`, `3`, `5`, `7`, `8`, `10`, `12` có `31` ngày
 * - Các tháng `4`, `6`, `9`, `11` có `30` ngày
 * - Tháng `2` có `29` ngày nếu là năm nhuận, nếu không là `28` ngày
 *
 * @param {number} month Tháng bất kỳ
 * @param {number} year Năm bất kỳ
 *
 * @return {number} Số ngày trong tháng đó
 */
function findDayOfMonth(month, year) {
  switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      console.log(31);
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      console.log(30);
      break;
    case 2:
      if (year % 4 == 0 && year % 100 != 0) {
        console.log(29);
      } else if (year % 400 == 0) {
        console.log(29);
      } else {
        console.log(28);
      }
      break;
    default:
      console.log("Enter the month");
      break;
  }
}
console.log("\nBài 4:");
findDayOfMonth(2, 2000);
findDayOfMonth(2, 2013);
findDayOfMonth(3, 2014);
findDayOfMonth(11, 2014);
/**
 * Xếp loại sinh viên theo số điểm trung bình
 *
 * @param {number} point Điểm trung bình của sinh viên
 *
 * @return {'A' | 'B' | 'C' | 'D' | 'F'} Xếp hạng tốt nghiệp của sinh viên
 */
function calcGrade(point) {
  if (0 <= point && point <= 4.0) {
    console.log("F");
  } else if (4.0 < point && point <= 5.5) {
    console.log("D");
  } else if (5.5 < point && point <= 7.0) {
    console.log("C");
  } else if (7 < point && point <= 8.5) {
    console.log("B");
  } else if (8.5 < point && point < 10) {
    console.log("A");
  } else {
    return NaN;
  }
}
console.log("\nBài 5:");
calcGrade(-2);
calcGrade(7.2);
calcGrade(3.5);
calcGrade(8.6);
calcGrade(6.0);
calcGrade(4.2);

/**
 * Tính tiền cước taxi cho khách theo số kilomet đã di chuyển
 *
 * - Phí mở cửa cố định là `10.000đ`
 * - Giá cho `30km` đầu tiên là `11.000đ/km`
 * - Từ kilomet thứ `31` giá là `9.500đ/km`
 * - Tổng tiền cước = Phí mở cửa + tổng tiền theo số kilomet đã di chuyển
 *
 * @param {number} km Số kilomet đã di chuyển
 *
 * @return {number} Số tiền phải trả
 */
function calcTaxiFee(km) {
  if (km > 0 && km <= 30.99999) {
    return 10000 + 11000 * km;
  } else if (km >= 31) {
    return 10000 + 9500 * km;
  } else {
    return NaN;
  }
}
console.log("\nBài 6:");

console.log(calcTaxiFee(1));
console.log(calcTaxiFee(2.8));
console.log(calcTaxiFee(31));
console.log(calcTaxiFee(30.99));
console.log(calcTaxiFee(32));
console.log(calcTaxiFee(200));
console.log(calcTaxiFee(0));
/**
 * Tìm nghiệm phương trình bậc 2 ax^2 + bx + c = 0
 *
 * - Nếu phương trình có vô số nghiệm thì trả về `Infinity`
 * - Nếu phương trình vô nghiệm thì trả về `null`
 * - Nếu phương trình có 1 nghiệm thì trả về nghiệm đó
 * - Nếu phương trình có 2 nghiệm thì trả về một *mảng* chứa 2 nghiệm, cú pháp `[x1, x2]`
 *
 * @param {number} a Tham số a
 * @param {number} b Tham số b
 * @param {number} c Tham số c
 *
 * @return {number | [number, number] | null} Nghiệm phương trình
 */
function solveEquation(a, b, c) {
  let delta = Math.pow(b, 2) - 4 * a * c;
  var solution = new Array("x1", "x2");
  if (a == 0) {
    if (b == 0) {
      if (c == 0) {
        return Infinity;
      } else {
        return null;
      }
    } else {
      return -c / b;
    }
  } else {
    if (delta == 0) {
      return -b / (2 * a);
    } else if (delta < 0) {
      return null;
    } else {
      const x1 = (-b - Math.sqrt(delta)) / (2 * a);
      const x2 = (-b + Math.sqrt(delta)) / (2 * a);
      return [x1, x2];
    }
  }
}
console.log("\nBài 7:");

console.log(solveEquation(0, 0, 0));
console.log(solveEquation(0, 0, 3));
console.log(solveEquation(0, 9, 3));
console.log(solveEquation(36, 58, 8));
