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
            // Get user input Second Last Education
            var education1 = document.getElementById('education1').value;
            var year1 = document.getElementById('year1').value;
            var from1 = document.getElementById('from1').value;
            // Get user input Third Last Education
            var education2 = document.getElementById('education2').value;
            var year2 = document.getElementById('year2').value;
            var from2 = document.getElementById('from2').value;
            // Get user input Work Experience
            var experience = document.getElementById('experience').value;
            var organization = document.getElementById('organization').value;
            var workPeriod = document.getElementById('workPeriod').value;
            var workDescription = document.getElementById('workDescription').value;
            // Get user input Work Experience
            var experience1 = document.getElementById('experience1').value;
            var organization1 = document.getElementById('organization1').value;
            var workPeriod1 = document.getElementById('workPeriod1').value;
            var workDescription1 = document.getElementById('workDescription1').value;
            // Get user input Work Experience
            var experience2 = document.getElementById('experience2').value;
            var organization2 = document.getElementById('organization2').value;
            var workPeriod2 = document.getElementById('workPeriod2').value;
            var workDescription2 = document.getElementById('workDescription2').value;
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
            sessionStorage.setItem('education1', education1);
            sessionStorage.setItem('year1', year1);
            sessionStorage.setItem('from1', from1);
            sessionStorage.setItem('education2', education2);
            sessionStorage.setItem('year2', year2);
            sessionStorage.setItem('from2', from2);
            sessionStorage.setItem('experience', experience);
            sessionStorage.setItem('organization', organization);
            sessionStorage.setItem('workPeriod', workPeriod);
            sessionStorage.setItem('workDescription', workDescription);
            sessionStorage.setItem('experience1', experience1);
            sessionStorage.setItem('organization1', organization1);
            sessionStorage.setItem('workPeriod1', workPeriod1);
            sessionStorage.setItem('workDescription1', workDescription1);
            sessionStorage.setItem('experience2', experience2);
            sessionStorage.setItem('organization2', organization2);
            sessionStorage.setItem('workPeriod2', workPeriod2);
            sessionStorage.setItem('workDescription2', workDescription2);
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
