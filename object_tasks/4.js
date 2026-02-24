const student1 = {
    fullName: 'Максим',
    experienceInMonths: 12,
    stack: ['HTML', 'CSS', 'JavaScript', 'React'],
}

giveJobToStudent = (student, jobName) => {
    student.job = jobName;
    alert(`Поздравляем! У студента ${student.fullName} появила новая работа! Теперь он ${student.job}`);
    return student;
}

const updatedStudent = giveJobToStudent(student1, 'веб-разработчик');
console.log('updatedStudent', updatedStudent);