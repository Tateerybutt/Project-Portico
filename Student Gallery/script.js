document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search');
    const studentList = document.getElementById('student-list');

    // Sample student data
    const students = [
        { name: 'Abdullah Imran', rollNumber: 1, image: 'images/' }
    ];

    // Function to display students
    const displayStudents = (students) => {
        studentList.innerHTML = '';
        students.forEach(student => {
            const studentItem = document.createElement('div');
            studentItem.className = 'student-item';
            studentItem.innerHTML = `
                <div>
                    <img src="${student.image}" alt="Student Image" width="50" height="50">
                </div>
                <div>
                    <strong>Name:</strong> ${student.name}
                </div>
                <div>
                    <strong>Roll Number:</strong> ${student.rollNumber}
                </div>
            `;
            studentList.appendChild(studentItem);
        });
    };

    // Initial display of students
    displayStudents(students);

    // Function to filter students
    const filterStudents = (searchString) => {
        const filteredStudents = students.filter(student =>
            student.name.toLowerCase().includes(searchString.toLowerCase()) ||
            student.rollNumber.toLowerCase().includes(searchString.toLowerCase())
        );
        displayStudents(filteredStudents);
    };

    // Bind filterStudents function to input event
    searchInput.addEventListener('input', () => {
        const searchString = searchInput.value.trim();
        filterStudents(searchString);
    });
});