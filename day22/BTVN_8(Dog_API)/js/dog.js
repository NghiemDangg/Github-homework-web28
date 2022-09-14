import { e } from "./utils.js";
import { getBreedRandomImages } from "./api.js";

const breedList = document.querySelector("select");
const renderRandomImages = (url) => {};

const randomImage = document.querySelector(".random-image");
// Tạo hàm option tương ứng với breed

export const createOption = (breed /**String*/) => {
  //<option value = 'african'> African</option>
  return e("option", {
    value: breed,
    text: breed.slice(0, 1).toUpperCase() + breed.slice(1),
  });
};

const createSubBreed = (subBreed) =>
  e(
    "li",
    {},
    e(
      "a",
      {
        onclick: () => {
          getBreedRandomImages(breedList.value).then(
            ({ data: { message } }) => {
              randomImage.innerHTML = `<img src = "${message}" />`;
            }
          );
        },
      },
      subBreed
    )
  ); //tạo 1 thẻ li có thẻ con là thẻ a

export const createSubBreedList = (subBreedList) => {
  if (subBreedList.length === 0) {
    return [e("li", {}, "No sub breeds")];
  } else {
    return subBreedList.map(createSubBreed);
  }
};
