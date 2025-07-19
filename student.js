const subjects = {
  "1st": ["Physics","Chemistry","BSE", "Mathematics-1", "C Programming","Engineering Graphics"],
  "3rd": ["DBMS", "Data Structures","operating system", "Mathematics-2"," Digital Electronics  "],
  "4th": ["Java", "Web technology", "Software Engineering","CNCS ","COMP  "],
  "5th": ["phython","IME","IOT","BDCC","Andriod programming"]
};

function loadSubjects() {
  const semester = document.getElementById("semester").value;
  const subjectSelect = document.getElementById("subject");

  // Clear old subjects
  subjectSelect.innerHTML = "<option value=''>-- Choose Subject --</option>";

  // Add new subjects
  if (subjects[semester]) {
    subjects[semester].forEach(sub => {
      const option = document.createElement("option");
      option.value = sub.toLowerCase().replace(/\s+/g, "_");
      option.textContent = sub;
      subjectSelect.appendChild(option);
    });
  }
}
