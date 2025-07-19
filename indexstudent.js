const examBtn = document.getElementById('examBtn');
    const marksBtn = document.getElementById('marksBtn');
    const iframe = document.getElementById('resultFrame');

    examBtn.addEventListener('click', () => {
      iframe.style.display = 'block';
      iframe.src = 'student.html';  // loads exam page with its own CSS
    });

    marksBtn.addEventListener('click', () => {
      iframe.style.display = 'block';
      iframe.src = '';  // loads previous marks page with its own CSS
    });