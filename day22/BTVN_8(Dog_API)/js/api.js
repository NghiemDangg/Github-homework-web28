const URL = {
  BREED: "https://dog.ceo/api/breeds/list/all",
  SUB_BREED_API: "https://dog.ceo/api/breed/subBreed/list",
  BREED_IMAGE_API: "https://dog.ceo/api/breed/masterBreed/images/random",
};

export const getAllBreeds = () => {
  return axios.get(URL.BREED);
};

export const getSubBreeds = (breed)=>{
    return axios.get(URL.SUB_BREED_API.replace("subBreed",breed));
};

export const getBreedRandomImages = (breed) =>{
    return axios.get(URL.BREED_IMAGE_API.replace("masterBreed",breed));
};