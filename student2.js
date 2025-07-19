const data = {
  CME: {
    "1st": ["Physics", "Chemistry", "BSE", "Mathematics-1", "C Programming", "Engineering Graphics"],
    "3rd": ["DBMS", "Data Structures", "Operating System", "Mathematics-2", "Digital Electronics"],
    "4th": ["Java", "Web Technology", "Software Engineering", "CNCS", "COMP"],
    "5th": ["Python", "IME", "IOT", "BDCC", "Android Programming"]
  },
  ECE: {
    "1st": ["Physics", "Engineering Graphics", "Chemistry"],
    "3rd": ["Digital Electronics", "Web Technology", "Software Engineering"],
    "4th": ["BDCC", "IME", "Android Programming"],
    "5th": ["Java", "Web Technology", "Software Engineering", "CNCS", "COMP"]
  },
  EEE: {
    "1st": ["Physics", "Engineering Graphics", "Chemistry"],
    "3rd": ["Digital Electronics", "Web Technology", "Software Engineering"],
    "4th": ["BDCC", "IME", "Android Programming"],
    "5th": ["Java", "Web Technology", "Software Engineering", "CNCS", "COMP"]
   },
  ME: {
    "1st": ["Physics", "Engineering Graphics", "Chemistry", "Graphics"],
    "3rd": ["BDCC", "IME", "Android Programming"],
    "4th": ["Digital Electronics", "Web Technology", "Software Engineering"],
    "5th": ["Java", "Web Technology", "Software Engineering", "CNCS", "COMP"]
  },
  CE: {
    "1st": ["Physics", "Engineering Graphics", "Chemistry", "Graphics"],
    "3rd": ["BDCC", "IME", "Android Programming"],
    "4th": ["Digital Electronics", "Web Technology", "Software Engineering"],
    "5th": ["Java", "Web Technology", "Software Engineering", "CNCS", "COMP"]
  }
};

function populateSelect(selectId, options) {
  const select = document.getElementById(selectId);
  select.innerHTML = `<option value="">-- Choose ${selectId.charAt(0).toUpperCase() + selectId.slice(1)} --</option>`;
  options.forEach(opt => {
    const option = document.createElement("option");
    option.value = opt;
    option.textContent = opt;
    select.appendChild(option);
  });
}

function onBranchChange() {
  const branch = document.getElementById("branch").value;
  if (branch && data[branch]) {
    populateSelect("semester", Object.keys(data[branch]));
  } else {
    populateSelect("semester", []);
  }
  populateSelect("subject", []);
}

function onSemesterChange() {
  const branch = document.getElementById("branch").value;
  const semester = document.getElementById("semester").value;
  if (branch && semester && data[branch] && data[branch][semester]) {
    populateSelect("subject", data[branch][semester]);
  } else {
    populateSelect("subject", []);
  }
}

function handleSubmit() {
  const branch = document.getElementById("branch").value;
  const semester = document.getElementById("semester").value;
  const subject = document.getElementById("subject").value;

  if (!branch || !semester || !subject) {
    alert("Please select Branch, Semester, and Subject before submitting.");
    return;
  }

  alert(`You selected:\nBranch: ${branch}\nSemester: ${semester}\nSubject: ${subject}`);
}

document.addEventListener("DOMContentLoaded", () => {
  populateSelect("branch", Object.keys(data));
  populateSelect("semester", []);
  populateSelect("subject", []);
});
