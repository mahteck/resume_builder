window.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('resumeForm');
    var resumeOutput = document.getElementById('resumeOutput');
    // const nameDisplay = document.getElementById('nameDisplay') as HTMLElement;
    // const emailDisplay = document.getElementById('emailDisplay') as HTMLElement;
    // const educationDisplay = document.getElementById('educationDisplay') as HTMLElement;
    // const experienceDisplay = document.getElementById('experienceDisplay') as HTMLElement;
    // const skillsDisplay = document.getElementById('skillsDisplay') as HTMLElement;
    if (form) {
        form.addEventListener('submit', function (event) {
            // Get user input Personal Information
            var name = document.getElementById('name').value;
            var email = document.getElementById('email').value;
            var address = document.getElementById('address').value;
            var cellno = document.getElementById('cellno').value;
            // Get user input Last Education
            var education = document.getElementById('education').value;
            var year = document.getElementById('year').value;
            var from = document.getElementById('from').value;
            // Get user input Work Experience
            var experience = document.getElementById('experience').value;
            var organization = document.getElementById('organization').value;
            var workPeriod = document.getElementById('workPeriod').value;
            var workDescription = document.getElementById('workDescription').value;
            // Get user input Skills
            var skills = document.getElementById('skills').value;
            // Store data in sessionStorage
            sessionStorage.setItem('name', name);
            sessionStorage.setItem('email', email);
            sessionStorage.setItem('address', address);
            sessionStorage.setItem('cellno', cellno);
            sessionStorage.setItem('education', education);
            sessionStorage.setItem('year', year);
            sessionStorage.setItem('from', from);
            sessionStorage.setItem('experience', experience);
            sessionStorage.setItem('organization', organization);
            sessionStorage.setItem('workPeriod', workPeriod);
            sessionStorage.setItem('workDescription', workDescription);
            sessionStorage.setItem('skills', skills);
            // Redirect to resumePreview.html with query params
            //window.location.href = `resumepreview.html?${queryParams.toString()}`;
            window.location.href = 'resumepreview.html';
            // // Set resume data
            // nameDisplay.textContent = name;
            // emailDisplay.textContent = email;
            // educationDisplay.textContent = education;
            // experienceDisplay.textContent = experience;
            // skillsDisplay.textContent = skills.split(',').join(', ');
        });
    }
    else {
        console.error('Form element not found');
    }
    // // Add editing functionality
    // function makeEditable(element: HTMLElement, inputType: string = 'text') {
    //     element.addEventListener('click', () => {
    //         const currentValue = element.textContent || '';
    //         const input = document.createElement('input');
    //         input.type = inputType;
    //         input.value = currentValue;
    //         input.addEventListener('blur', () => {
    //             element.textContent = input.value;
    //         });
    //         input.addEventListener('keypress', (e) => {
    //             if (e.key === 'Enter') {
    //                 element.textContent = input.value;
    //             }
    //         });
    //         element.textContent = '';
    //         element.appendChild(input);
    //         input.focus();
    //     });
    // }
    // // Apply editable functionality to each section
    // makeEditable(nameDisplay);
    // makeEditable(emailDisplay, 'email');
    // makeEditable(educationDisplay);
    // makeEditable(experienceDisplay);
    // makeEditable(skillsDisplay);
});
