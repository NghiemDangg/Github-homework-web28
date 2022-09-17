
// Nếu import package được cài đặt thông qua nom thig không cần .js
// Nếu import từ file khác thì thêm đuôi .js

export default () => {
    return axios.request({
        url:"/students",
        method: "GET",
    });
};

export const getStudentById = (studentId) =>{
    return axios.request({
        url:"/students/" + studentId,
        method: "GET",
    });
}
export const createStudent = (data) =>{
    return axios.request({
        url:"/students",
        method: "POST",
        data,
    })
}
export const updateStudent = ( studentId,data) =>{
    return axios.request({
        url:"/students/" + studentId,
        method: "PUT",
        data,
    })
}
export const deleteStudent = ( studentId) =>{
    return axios.request({
        url:"/students/" + studentId,
        method: "DELETE",
    })
}