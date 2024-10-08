import getListStudents from "./0-get_list_students.js";

export default function getStudentsByLocation(studentsarr, city){
    return studentsarr.filter((student) => {
	return student.location === city
    });
}

const students = getListStudents();
console.log(getStudentsByLocation(students, 'San Francisco'));
