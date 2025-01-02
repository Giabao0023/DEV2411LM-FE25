let students = [
    { studentId: "SV002", studentName: "Nguyễn Văn B", age: 21, sex: false, birthDate: "2001-09-09", birthPlace: "ĐN", address: "1, Ngô Quyền" },
    { studentId: "SV003", studentName: "Nguyễn Văn C", age: 19, sex: true, birthDate: "2003-07-07", birthPlace: "HCM", address: "1, Lý Tự Trọng" },
    { studentId: "SV004", studentName: "Nguyễn Văn D", age: 29, sex: false, birthDate: "1995-07-07", birthPlace: "HCM", address: "1, Lý Tự Trọng" }
];

function renderTable() {
    const tableBody = document.getElementById('studentTable');
    tableBody.innerHTML = '';
    students.forEach((student, index) => {
        const row = `<tr>
            <td>${index + 1}</td>
            <td>${student.studentId}</td>
            <td>${student.studentName}</td>
            <td>${student.age}</td>
            <td>${student.sex ? "Nam" : "Nữ"}</td>
            <td>
                <button onclick="editStudent(${index})">Sửa</button>
                <button onclick="deleteStudent(${index})">Xóa</button>
            </td>
        </tr>`;
        tableBody.innerHTML += row;
    });
}

function showForm() {
    document.getElementById('studentId').value = '';
    document.getElementById('studentName').value = '';
    document.getElementById('age').value = '';
    document.getElementById('sex').value = 'true';
    document.getElementById('birthDate').value = '';
    document.getElementById('birthPlace').value = '';
    document.getElementById('address').value = '';
}

function clearForm() {
    document.querySelector('form').reset();
}

function saveStudent(event) {
    event.preventDefault();
    const studentId = document.getElementById('studentId').value || `SV00${students.length + 2}`;
    const studentName = document.getElementById('studentName').value;
    const age = document.getElementById('age').value;
    const sex = document.getElementById('sex').value === "true";
    const birthDate = document.getElementById('birthDate').value;
    const birthPlace = document.getElementById('birthPlace').value;
    const address = document.getElementById('address').value;

    const existingIndex = students.findIndex(student => student.studentId === studentId);
    if (existingIndex !== -1) {
        students[existingIndex] = { studentId, studentName, age, sex, birthDate, birthPlace, address };
    } else {
        students.push({ studentId, studentName, age, sex, birthDate, birthPlace, address });
    }

    renderTable();
    clearForm();
}

function editStudent(index) {
    const student = students[index];
    document.getElementById('studentId').value = student.studentId;
    document.getElementById('studentName').value = student.studentName;
    document.getElementById('age').value = student.age;
    document.getElementById('sex').value = student.sex;
    document.getElementById('birthDate').value = student.birthDate;
    document.getElementById('birthPlace').value = student.birthPlace;
    document.getElementById('address').value = student.address;
}

function deleteStudent(index) {
    students.splice(index, 1);
    renderTable();
}

function searchStudent() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const filtered = students.filter(student => student.studentName.toLowerCase().includes(query));
    students = filtered.length ? filtered : students;
    renderTable();
}

renderTable();
