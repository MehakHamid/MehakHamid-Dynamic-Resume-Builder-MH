// Add event listeners for "Add More" buttons and the "Generate Resume" button
document.getElementById("generate-resume").addEventListener("click", generateResume);

// For dynamically adding new skills, experience, education, etc.
document.getElementById("add-skill").addEventListener("click", addSkill);
document.getElementById("add-experience").addEventListener("click", addExperience);
document.getElementById("add-education").addEventListener("click", addEducation);
document.getElementById("add-language").addEventListener("click", addLanguage);
document.getElementById("add-interest").addEventListener("click", addInterest);
document.getElementById("add-award").addEventListener("click", addAward);

function addSkill() {
    const skillContainer = document.getElementById("skills-container");
    const skillHTML = `
        <div class="skill-entry">
            <input type="text" class="skill-name" placeholder="Skill Name" required>
            <input type="text" class="skill-level" placeholder="Skill Level (e.g., Beginner, Intermediate, Advanced)" required>
        </div>
    `;
    skillContainer.insertAdjacentHTML("beforeend", skillHTML);
}

function addExperience() {
    const experienceContainer = document.getElementById("experience-container");
    const experienceHTML = `
        <div class="experience-entry">
            <input type="text" class="job-title" placeholder="Job Title" required>
            <input type="text" class="company-name" placeholder="Company Name" required>
            <input type="date" class="start-date" placeholder="Start Date" required>
            <input type="date" class="end-date" placeholder="End Date">
            <textarea class="job-description" placeholder="Job Description" required></textarea>
        </div>
    `;
    experienceContainer.insertAdjacentHTML("beforeend", experienceHTML);
}

function addEducation() {
    const educationContainer = document.getElementById("education-container");
    const educationHTML = `
        <div class="education-entry">
            <input type="text" class="degree-name" placeholder="Degree Name" required>
            <input type="text" class="institution-name" placeholder="Institution Name" required>
            <input type="date" class="end-date" placeholder="Graduation Year" required>
        </div>
    `;
    educationContainer.insertAdjacentHTML("beforeend", educationHTML);
}

function addLanguage() {
    const languageContainer = document.getElementById("language-container");
    const languageHTML = `
        <div class="language-entry">
            <input type="text" class="language-name" placeholder="Language Name" required>
            <input type="text" class="language-proficiency" placeholder="Proficiency Level (e.g., Fluent, Conversational)" required>
        </div>
    `;
    languageContainer.insertAdjacentHTML("beforeend", languageHTML);
}

function addInterest() {
    const interestContainer = document.getElementById("interest-container");
    const interestHTML = `
        <div class="interest-entry">
            <input type="text" class="interest-name" placeholder="Interest Name" required>
        </div>
    `;
    interestContainer.insertAdjacentHTML("beforeend", interestHTML);
}

function addAward() {
    const awardContainer = document.getElementById("award-container");
    const awardHTML = `
        <div class="award-entry">
            <input type="text" class="award-name" placeholder="Award/Honor Name" required>
            <input type="text" class="award-organization" placeholder="Awarding Organization" required>
            <input type="date" class="award-date" placeholder="Date Received" required>
        </div>
    `;
    awardContainer.insertAdjacentHTML("beforeend", awardHTML);
}

function generateResume() {
    // Clear previous resume content
    const resumeContainer = document.getElementById("resume-container");
    resumeContainer.innerHTML = "";

    const name = document.getElementById("name").value;
    const summary = document.getElementById("summary").value;

    // Check if Name and Summary are filled
    if (name && summary) {
        const resumeName = document.createElement("h1");
        resumeName.textContent = name;
        resumeContainer.appendChild(resumeName);

        const resumeSummary = document.createElement("p");
        resumeSummary.textContent = summary;
        resumeContainer.appendChild(resumeSummary);
    }

    // Create left and right sections for resume
    const leftSection = document.createElement("div");
    const rightSection = document.createElement("div");
    leftSection.classList.add("left-column");
    rightSection.classList.add("right-column");

    // Info Section
    const infoSection = document.createElement("section");
    if (document.getElementById("email").value || document.getElementById("phone").value || document.getElementById("address").value) {
        infoSection.innerHTML = `<h3>Personal Information</h3>`;
        if (document.getElementById("email").value) infoSection.innerHTML += `<p><strong>Email:</strong> ${document.getElementById("email").value}</p>`;
        if (document.getElementById("phone").value) infoSection.innerHTML += `<p><strong>Phone:</strong> ${document.getElementById("phone").value}</p>`;
        if (document.getElementById("address").value) infoSection.innerHTML += `<p><strong>Address:</strong> ${document.getElementById("address").value}</p>`;
        leftSection.appendChild(infoSection);
    }

    // Skills Section
    const skillsSection = document.createElement("section");
    const skillInputs = document.querySelectorAll(".skill-entry");
    if (skillInputs.length > 0) {
        skillsSection.innerHTML = "<h3>Skills</h3>";
        skillInputs.forEach(skill => {
            const skillName = skill.querySelector(".skill-name").value;
            const skillLevel = skill.querySelector(".skill-level").value;
            if (skillName && skillLevel) {
                skillsSection.innerHTML += `<p>${skillName} - Level: ${skillLevel}</p>`;
            }
        });
        leftSection.appendChild(skillsSection);
    }

    // Languages Section
    const languageInputs = document.querySelectorAll(".language-entry");
    const languagesSection = document.createElement("section");
    if (languageInputs.length > 0) {
        languagesSection.innerHTML = "<h3>Languages</h3>";
        languageInputs.forEach(lang => {
            const langName = lang.querySelector(".language-name").value;
            const proficiency = lang.querySelector(".language-proficiency").value;
            if (langName && proficiency) {
                languagesSection.innerHTML += `<p>${langName} - Proficiency: ${proficiency}</p>`;
            }
        });
        leftSection.appendChild(languagesSection);
    }

    // Interests Section
    const interestInputs = document.querySelectorAll(".interest-entry");
    const interestsSection = document.createElement("section");
    if (interestInputs.length > 0) {
        interestsSection.innerHTML = "<h3>Interests</h3>";
        interestInputs.forEach(interest => {
            const interestName = interest.querySelector(".interest-name").value;
            if (interestName) {
                interestsSection.innerHTML += `<p>${interestName}</p>`;
            }
        });
        leftSection.appendChild(interestsSection);
    }

    // Awards Section
    const awardInputs = document.querySelectorAll(".award-entry");
    const awardsSection = document.createElement("section");
    if (awardInputs.length > 0) {
        awardsSection.innerHTML = "<h3>Awards</h3>";
        awardInputs.forEach(award => {
            const awardName = award.querySelector(".award-name").value;
            const organization = award.querySelector(".award-organization").value;
            const date = award.querySelector(".award-date").value;
            if (awardName && organization && date) {
                awardsSection.innerHTML += `<p>${awardName} - ${organization} (Received: ${date})</p>`;
            }
        });
        leftSection.appendChild(awardsSection);
    }

    // Education Section
    const educationInputs = document.querySelectorAll(".education-entry");
    const educationSection = document.createElement("section");
    if (educationInputs.length > 0) {
        educationSection.innerHTML = "<h3>Education</h3>";
        educationInputs.forEach(edu => {
            const degreeName = edu.querySelector(".degree-name").value;
            const institutionName = edu.querySelector(".institution-name").value;
            const endDate = edu.querySelector(".end-date").value;
            if (degreeName && institutionName && endDate) {
                educationSection.innerHTML += `<p>${degreeName} - ${institutionName} (Graduated: ${endDate})</p>`;
            }
        });
        rightSection.appendChild(educationSection);
    }

    // Experience Section
    const experienceInputs = document.querySelectorAll(".experience-entry");
    const experienceSection = document.createElement("section");
    if (experienceInputs.length > 0) {
        experienceSection.innerHTML = "<h3>Experience</h3>";
        experienceInputs.forEach(exp => {
            const jobTitle = exp.querySelector(".job-title").value;
            const companyName = exp.querySelector(".company-name").value;
            const startDate = exp.querySelector(".start-date").value;
            const endDate = exp.querySelector(".end-date").value;
            const jobDescription = exp.querySelector(".job-description").value;
            if (jobTitle && companyName && jobDescription) {
                experienceSection.innerHTML += `<p>${jobTitle} at ${companyName} (${startDate} - ${endDate})</p><p>${jobDescription}</p>`;
            }
        });
        rightSection.appendChild(experienceSection);
    }

    // Certifications Section
    const certificationInputs = document.querySelectorAll(".certification-entry");
    const certificationSection = document.createElement("section");
    if (certificationInputs.length > 0) {
        certificationSection.innerHTML = "<h3>Certifications</h3>";
        certificationInputs.forEach(cert => {
            const certName = cert.querySelector(".certification-name").value;
            const certOrganization = cert.querySelector(".certification-organization").value;
            const certDate = cert.querySelector(".certification-date").value;
            if (certName && certOrganization && certDate) {
                certificationSection.innerHTML += `<p>${certName} - ${certOrganization} (Obtained: ${certDate})</p>`;
            }
        });
        rightSection.appendChild(certificationSection);
    }

    // Append sections to resume
    resumeContainer.appendChild(leftSection);
    resumeContainer.appendChild(rightSection);
}
