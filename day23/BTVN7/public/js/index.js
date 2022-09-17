import getStudents from "./api.js";
import {renderTable} from "./view.js";
$(function() {
    getStudents().then(({data}) =>{
        renderTable(data);
    });
});