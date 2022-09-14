// Hàm tiện ích giúp tạo 1 thẻ bất kì theo tagName truyền vào

import { getAllBreeds } from "./api.js";

export const e = (tagName, attributes, ...children) =>{
    const el = document.createElement(tagName);

    Object.assign(el,attributes); //gán tất cả thuộc tính cho thẻ

    el.append(...children);//thêm phần tử con

    return el;
}