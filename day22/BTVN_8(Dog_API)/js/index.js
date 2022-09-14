import * as api from "./api.js";
import * as dog from "./dog.js";

const breedList = document.querySelector("select");
const button = document.querySelector("button");
const subBreedList = document.querySelector(".sub-breeds-list");

api.getAllBreeds().then(({ data: { message } }) => {
  //{african: [], hound: []}
  //chuyển đổi các dữ liệu trong message thành các option và render vào breedList
  //Object.keys(obj); [key1,key2]
  breedList.append(...Object.keys(message).map(dog.createOption));
});

//Gán sự kiện cho btn
//Khi mà click thì gọi api sub breed

button.addEventListener("click", () => {
  api.getSubBreeds(breedList.value)
  .then(({data: {message}})=>  dog.createSubBreedList(message))
  .then((subBreeds)  =>{
    subBreedList.innerHTML = "";
    subBreedList.append(...subBreeds);
  });
});
