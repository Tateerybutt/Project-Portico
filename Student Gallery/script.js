document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search');
    const studentList = document.getElementById('student-list');

    // Sample student data
    const students = [
        { name: 'Abdullah Imran', rollNumber: 1, image: 'images/1.jpg' },
        { name: 'Moiz Butt', rollNumber: 2, image: 'images/2.jpg' },
        { name: 'Ashir Ali', rollNumber: 3, image: 'images/3.jpg' },
        { name: 'Ihtisham Raza', rollNumber: 4, image: 'images/4.jpg' },
        { name: 'Aliyan Butt', rollNumber: 5, image: 'images/5.jpg' },
        { name: 'M.Abu Bakar', rollNumber: 6, image: 'images/6.jpg' },
        { name: 'M.Umar Naqvi', rollNumber: 7, image: 'images/7.jpg' },
        { name: 'Arman Ali Butt', rollNumber: 8, image: 'images/8.jpg' },
        { name: 'M.Abdullah', rollNumber: 9, image: 'images/9.jpg' },
        { name: 'Saim Khaliq', rollNumber: 10, image: 'images/10.jpg' },
        { name: 'Ahmed Shahzad', rollNumber: 11, image: 'images/11.jpg' },
        { name: 'Syed Kamran Ali', rollNumber: 12, image: 'images/12.jpg' },
        { name: 'Syed Aoun Abbas', rollNumber: 13, image: 'images/13.jpg' },
        { name: 'Hussnain Ali', rollNumber: 14, image: 'images/14.jpg' },
        { name: 'M.Amnoon', rollNumber: 15, image: 'images/15.jpg' },
        { name: 'Hammad Hassan', rollNumber: 16, image: 'images/16.jpg' },
        { name: 'Movadat Ali', rollNumber: 17, image: 'images/17.jpg' },
        { name: 'Faraz Baig', rollNumber: 18, image: 'images/18.jpg' },
        { name: 'Haseeb Ullah', rollNumber: 19, image: 'images/19.jpg' },
        { name: 'Ali Haider', rollNumber: 20, image: 'images/20.jpg' },
        { name: 'Tahir Asghar', rollNumber: 21, image: 'images/21.jpg' },
        { name: 'Fasih Ahmed', rollNumber: 22, image: 'images/22.jpg' },
        { name: 'Abdul Rehman', rollNumber: 23, image: 'images/23.jpg' },
        { name: 'Jaffar Hussain', rollNumber: 24, image: 'images/24.jpg' },
        { name: 'M.Taha', rollNumber: 25, image: 'images/25.jpg' },
        { name: 'Abdul Ahad', rollNumber: 26, image: 'images/26.jpg' },
        { name: 'Hassan Shahzad', rollNumber: 27, image: 'images/27.jpg' },
        { name: 'Haider Ali', rollNumber: 28, image: 'images/28.jpg' },
        { name: 'Luqman Butt', rollNumber: 29, image: 'images/29.jpg' },
        { name: 'Usman Fazal', rollNumber: 30, image: 'images/30.jpg' },
        { name: 'Umair Liaqat', rollNumber: 31, image: 'images/31.jpg' },
        { name: 'M.Faizan', rollNumber: 32, image: 'images/32.jpg' },
        { name: 'Shahmeer Atif', rollNumber: 33, image: 'images/33.jpg' },
        { name: 'Nouman Ali', rollNumber: 34, image: 'images/34.jpg' },
        { name: 'M.Ammar Arif', rollNumber: 35, image: 'images/35.jpg' },
        { name: 'Usman Farooq', rollNumber: 36, image: 'images/36.jpg' },
        { name: 'M.Ahmed', rollNumber: 37, image: 'images/37.jpg' },
    ];

    // Function to display students
    const displayStudents = (students) => {
        studentList.innerHTML = '';
        students.forEach(student => {
            const studentItem = document.createElement('div');
            studentItem.className = 'student-item';
            studentItem.innerHTML = `
                <img src="${student.image}" alt="Student Image">
                <h3>${student.name}</h3>
                <p>Roll Number: ${student.rollNumber}</p>
            `;
            studentItem.addEventListener('click', () => showStudentDetails(student));
            studentList.appendChild(studentItem);
        });
    };

    // Initial display of students
    displayStudents(students);

    // Function to filter students
    const filterStudents = (searchString) => {
        const filteredStudents = students.filter(student =>
            student.name.toLowerCase().includes(searchString.toLowerCase()) ||
            student.rollNumber.toString().toLowerCase().includes(searchString.toLowerCase())
        );
        displayStudents(filteredStudents);
    };

    // Bind filterStudents function to input event
    searchInput.addEventListener('input', () => {
        const searchString = searchInput.value.trim();
        filterStudents(searchString);
    });

    // Function to show student details in modal
    const showStudentDetails = (student) => {
        document.getElementById('modalImage').src = student.image;
        document.getElementById('modalName').textContent = student.name;
        document.getElementById('modalRollNumber').textContent = student.rollNumber;
        $('#studentModal').modal('show');
    };
});