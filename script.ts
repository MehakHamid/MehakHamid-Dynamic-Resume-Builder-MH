// Handling dynamic fields and generating the resume

// Add skill
document.getElementById("add-skill")?.addEventListener("click", function () {
    const skillsList = document.getElementById("skills-list");
    const newSkill = document.createElement("input");
    newSkill.type = "text";
    newSkill.placeholder = "Skill";
    newSkill.required = true;
    skillsList?.appendChild(newSkill);
});

// Add language
document.getElementById("add-language")?.addEventListener("click", function () {
    const languagesList = document.getElementById("languages-list");
    const newLanguage = document.createElement("input");
    newLanguage.type = "text";
    newLanguage.placeholder = "Language";
    newLanguage.required = true;
    languagesList?.appendChild(newLanguage);
});

// Add education
document.getElementById("add-education")?.addEventListener("click", function () {
    const educationList = document.getElementById("education-list");
    const newDegree = document.createElement("input");
    newDegree.type = "text";
    newDegree.placeholder = "Degree Name";
    newDegree.required = true;

    const newField = document.createElement("input");
    newField.type = "text";
    newField.placeholder = "Field";
    newField.required = true;

    const newCompletionYear = document.createElement("input");
    newCompletionYear.type = "text";
    newCompletionYear.placeholder = "Completion Year";
    newCompletionYear.required = true;

    educationList?.appendChild(newDegree);
    educationList?.appendChild(newField);
    educationList?.appendChild(newCompletionYear);
});

// Show/hide experience details
const experienceSelect = document.getElementById("experience-select");
experienceSelect?.addEventListener("change", function () {
    const experienceValue = (experienceSelect as HTMLSelectElement).value;
    const experienceSection = document.getElementById("experienced-section");
    if (experienceValue === "experienced") {
        experienceSection!.style.display = "block";
    } else {
        experienceSection!.style.display = "none";
    }
});

// Add experience with currently working checkbox logic
document.getElementById("add-experience")?.addEventListener("click", function () {
    const experienceSection = document.getElementById("experienced-section");
    const experienceGroup = document.createElement("div");
    experienceGroup.className = "experience-group";

    const newCompany = document.createElement("input");
    newCompany.type = "text";
    newCompany.className = "company-name";
    newCompany.placeholder = "Company Name";

    const newPosition = document.createElement("input");
    newPosition.type = "text";
    newPosition.className = "position";
    newPosition.placeholder = "Position";

    const newCheckboxLabel = document.createElement("label");
    const newCheckbox = document.createElement("input");
    newCheckbox.type = "checkbox";
    newCheckbox.className = "currently-working";
    newCheckboxLabel.appendChild(newCheckbox);
    newCheckboxLabel.appendChild(document.createTextNode(" Currently Working Here"));

    const newExperienceYears = document.createElement("input");
    newExperienceYears.type = "number";
    newExperienceYears.className = "experience-years";
    newExperienceYears.placeholder = "Experience (Years)";

    newCheckbox.addEventListener("change", function () {
        if (newCheckbox.checked) {
            newExperienceYears.style.display = "none"; // Hide experience years
        } else {
            newExperienceYears.style.display = "inline"; // Show experience years
        }
    });

    experienceGroup.appendChild(newCompany);
    experienceGroup.appendChild(newPosition);
    experienceGroup.appendChild(newCheckboxLabel);
    experienceGroup.appendChild(newExperienceYears);

    experienceSection?.appendChild(experienceGroup);
});

// Add achievement
document.getElementById("add-achievement")?.addEventListener("click", function () {
    const achievementList = document.getElementById("achievement-list");
    const newAchievement = document.createElement("input");
    newAchievement.type = "text";
    newAchievement.placeholder = "Achievement";
    achievementList?.appendChild(newAchievement);
});

// Generate resume
document.getElementById("generate-resume")?.addEventListener("click", function () {
    const resumeWindow = window.open("", "_blank");
    if (resumeWindow) {
        resumeWindow.document.write(`<html><head><title>Generated Resume</title><link rel="stylesheet" href="style.css"></head><body>`);
        const name = (document.getElementById("name") as HTMLInputElement).value;
        resumeWindow.document.write(`<h1>${name}</h1>`);

        // Contact Info
        const email = (document.getElementById("email") as HTMLInputElement).value;
        const contactNumber = (document.getElementById("contact-number") as HTMLInputElement).value;
        const address = (document.getElementById("address") as HTMLInputElement).value;
        resumeWindow.document.write(`<h2>Contact Information</h2><p>Email: ${email}</p><p>Contact Number: ${contactNumber}</p><p>Address: ${address}</p>`);

        // Skills
        const skillsList = document.querySelectorAll("#skills-list input");
        resumeWindow.document.write(`<h2>Skills</h2><ul>`);
        skillsList.forEach((skill) => {
            resumeWindow.document.write(`<li>${(skill as HTMLInputElement).value}</li>`);
        });
        resumeWindow.document.write(`</ul>`);

        // Languages
        const languagesList = document.querySelectorAll("#languages-list input");
        resumeWindow.document.write(`<h2>Languages</h2><ul>`);
        languagesList.forEach((language) => {
            resumeWindow.document.write(`<li>${(language as HTMLInputElement).value}</li>`);
        });
        resumeWindow.document.write(`</ul>`);

        // Education
        const educationList = document.querySelectorAll("#education-list input");
        resumeWindow.document.write(`<h2>Education</h2>`);
        for (let i = 0; i < educationList.length; i += 3) {
            resumeWindow.document.write(`<p><strong>Degree:</strong> ${(educationList[i] as HTMLInputElement).value}</p>`);
            resumeWindow.document.write(`<p><strong>Field:</strong> ${(educationList[i + 1] as HTMLInputElement).value}</p>`);
            resumeWindow.document.write(`<p><strong>Completion Year:</strong> ${(educationList[i + 2] as HTMLInputElement).value}</p>`);
        }

        // Experience
        const experienceValue = (experienceSelect as HTMLSelectElement).value;
        resumeWindow.document.write(`<h2>Experience</h2>`);
        if (experienceValue === "experienced") {
            const companyNames = document.querySelectorAll(".company-name");
            const positions = document.querySelectorAll(".position");
            const experienceYears = document.querySelectorAll(".experience-years");
            const currentlyWorkingList = document.querySelectorAll(".currently-working");

            for (let i = 0; i < companyNames.length; i++) {
                resumeWindow.document.write(`<p><strong>Company:</strong> ${(companyNames[i] as HTMLInputElement).value}</p>`);
                resumeWindow.document.write(`<p><strong>Position:</strong> ${(positions[i] as HTMLInputElement).value}</p>`);

                if ((currentlyWorkingList[i] as HTMLInputElement).checked) {
                    resumeWindow.document.write(`<p><strong>Status:</strong> Currently Working Here</p>`);
                } else {
                    resumeWindow.document.write(`<p><strong>Years of Experience:</strong> ${(experienceYears[i] as HTMLInputElement).value}</p>`);
                }
            }
        } else {
            resumeWindow.document.write(`<p>Fresh</p>`);
        }

        // Achievements
        const achievementsList = document.querySelectorAll("#achievement-list input");
        resumeWindow.document.write(`<h2>Achievements</h2><ul>`);
        achievementsList.forEach((achievement) => {
            resumeWindow.document.write(`<li>${(achievement as HTMLInputElement).value}</li>`);
        });
        resumeWindow.document.write(`</ul>`);

        resumeWindow.document.write(`</body></html>`);
    }
});
