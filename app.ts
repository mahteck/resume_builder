window.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('resumeForm') as HTMLFormElement | null;
    const resumeOutput = document.getElementById('resumeOutput') as HTMLElement;

    // const nameDisplay = document.getElementById('nameDisplay') as HTMLElement;
    // const emailDisplay = document.getElementById('emailDisplay') as HTMLElement;
    // const educationDisplay = document.getElementById('educationDisplay') as HTMLElement;
    // const experienceDisplay = document.getElementById('experienceDisplay') as HTMLElement;
    // const skillsDisplay = document.getElementById('skillsDisplay') as HTMLElement;
    
    if (form) {

        form.addEventListener('submit', (event) => {

            // Get user input Personal Information
            const name = (document.getElementById('name') as HTMLInputElement).value;
            const email = (document.getElementById('email') as HTMLInputElement).value;
            const address = (document.getElementById('address') as HTMLInputElement).value;
            const cellno = (document.getElementById('cellno') as HTMLInputElement).value;

            // Get user input Last Education
            const education = (document.getElementById('education') as HTMLInputElement).value;
            const year = (document.getElementById('year') as HTMLInputElement).value;
            const from = (document.getElementById('from') as HTMLInputElement).value;
            
            // Get user input Work Experience
            const experience = (document.getElementById('experience') as HTMLInputElement).value;
            const organization = (document.getElementById('organization') as HTMLInputElement).value;
            const workPeriod = (document.getElementById('workPeriod') as HTMLInputElement).value;
            const workDescription = (document.getElementById('workDescription') as HTMLInputElement).value;

            // Get user input Skills
            const skills = (document.getElementById('skills') as HTMLInputElement).value;

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
    } else {
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
