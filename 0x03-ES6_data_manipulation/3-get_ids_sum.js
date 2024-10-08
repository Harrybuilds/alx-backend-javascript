export default function getStudentIdsSum(studentlist){
    return studentlist.reduce((acc, curr) => acc + curr.id, 0)
}
