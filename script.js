// Function to add a new experience entry
function addExperience() {
    const container = document.createElement("div");
    container.classList.add("experience-entry");
    container.innerHTML = `
        <input type="text" placeholder="Job Title" class="experience-title">
        <input type="text" placeholder="Company Name" class="experience-company">
        <input type="date" placeholder="Start Date" class="experience-start">
        <input type="date" placeholder="End Date" class="experience-end">
        <textarea placeholder="Job Description" class="experience-description"></textarea>
        <textarea placeholder="Key Achievements" class="experience-achievements"></textarea>
        <input type="text" placeholder="Skills Used" class="experience-skills">
    `;
    document.getElementById("experience-inputs").appendChild(container);
}

// Function to add a new education entry
function addEducation() {
    const container = document.createElement("div");
    container.classList.add("education-entry");
    container.innerHTML = `
        <input type="text" placeholder="Degree Name" class="education-degree">
        <input type="text" placeholder="Institution Name" class="education-institution">
        <input type="date" placeholder="End Date" class="education-end-date">
    `;
    document.getElementById("education-inputs").appendChild(container);
}

// Function to add a new skill entry
function addSkill() {
    const container = document.createElement("div");
    container.classList.add("skill-entry");
    container.innerHTML = `
        <input type="text" placeholder="Skill Name" class="skill-name">
        <select class="skill-level">
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
        </select>
        <input type="text" placeholder="Certification (if applicable)" class="skill-certification">
    `;
    document.getElementById("skills-inputs").appendChild(container);
}

// Function to add a new project entry
function addProject() {
    const container = document.createElement("div");
    container.classList.add("project-entry");
    container.innerHTML = `
        <input type="text" placeholder="Project Title" class="project-title">
        <textarea placeholder="Description" class="project-description"></textarea>
        <input type="text" placeholder="Technologies Used" class="project-technologies">
        <input type="text" placeholder="Role in Project" class="project-role">
        <input type="text" placeholder="Link to Project (if applicable)" class="project-link">
    `;
    document.getElementById("projects-inputs").appendChild(container);
}

// Function to add a new certification entry
function addCertification() {
    const container = document.createElement("div");
    container.classList.add("certification-entry");
    container.innerHTML = `
        <input type="text" placeholder="Certification Name" class="certification-name">
        <input type="text" placeholder="Certifying Organization" class="certification-organization">
        <input type="date" placeholder="Date Obtained" class="certification-date">
    `;
    document.getElementById("certifications-inputs").appendChild(container);
}

// Function to add a new award entry
function addAward() {
    const container = document.createElement("div");
    container.classList.add("award-entry");
    container.innerHTML = `
        <input type="text" placeholder="Award/Honor Name" class="award-name">
        <input type="text" placeholder="Awarding Organization" class="award-organization">
        <input type="date" placeholder="Date Received" class="award-date">
    `;
    document.getElementById("awards-inputs").appendChild(container);
}

// Function to add a new language entry
function addLanguage() {
    const container = document.createElement("div");
    container.classList.add("language-entry");
    container.innerHTML = `
        <input type="text" placeholder="Language Name" class="language-name">
        <select class="language-proficiency">
            <option value="fluent">Fluent</option>
            <option value="conversational">Conversational</option>
            <option value="basic">Basic</option>
        </select>
    `;
    document.getElementById("languages-inputs").appendChild(container);
}

// Function to add a new interest entry
function addInterest() {
    const container = document.createElement("div");
    container.classList.add("interest-entry");
    container.innerHTML = `
        <input type="text" placeholder="Interest" class="interest-name">
    `;
    document.getElementById("interests-inputs").appendChild(container);
}

// Function to generate the resume display
function generateResume() {
    // Info Section
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const address = document.getElementById("address").value;
    const linkedin = document.getElementById("linkedin").value;
    const website = document.getElementById("website").value;
    const summary = document.getElementById("summary").value;

    // Set Name and Summary
    document.getElementById("resume-name").textContent = name;
    document.getElementById("resume-summary").textContent = summary;

    // Experience Section
    const experienceInputs = document.querySelectorAll(".experience-entry");
    const experienceSection = document.createElement("section");
    experienceSection.innerHTML = "<h3>Experience</h3>";
    experienceInputs.forEach(exp => {
        const title = exp.querySelector(".experience-title").value;
        const company = exp.querySelector(".experience-company").value;
        const start = exp.querySelector(".experience-start").value;
        const end = exp.querySelector(".experience-end").value;
        const description = exp.querySelector(".experience-description").value;
        const achievements = exp.querySelector(".experience-achievements").value;
        const skills = exp.querySelector(".experience-skills").value;
        
        const expDiv = document.createElement("div");
        expDiv.innerHTML = `<p><strong>${title}</strong> at ${company} (${start} - ${end})</p><p>${description}</p><p>Achievements: ${achievements}</p><p>Skills Used: ${skills}</p>`;
        experienceSection.appendChild(expDiv);
    });
    document.getElementById("resume-sections").appendChild(experienceSection);

    // Education Section
    const educationInputs = document.querySelectorAll(".education-entry");
    const educationSection = document.createElement("section");
    educationSection.innerHTML = "<h3>Education</h3>";
    educationInputs.forEach(edu => {
        const degree = edu.querySelector(".education-degree").value;
        const institution = edu.querySelector(".education-institution").value;
        const endDate = edu.querySelector(".education-end-date").value;
        
        const eduDiv = document.createElement("div");
        eduDiv.innerHTML = `<p><strong>${degree}</strong> at ${institution} (Graduated: ${endDate})</p>`;
        educationSection.appendChild(eduDiv);
    });
    document.getElementById("resume-sections").appendChild(educationSection);

    // Skills Section
    const skillInputs = document.querySelectorAll(".skill-entry");
    const skillsSection = document.createElement("section");
    skillsSection.innerHTML = "<h3>Skills</h3>";
    skillInputs.forEach(skill => {
        const name = skill.querySelector(".skill-name").value;
        const level = skill.querySelector(".skill-level").value;
        const certification = skill.querySelector(".skill-certification").value;
        
        const skillDiv = document.createElement("div");
        skillDiv.innerHTML = `<p>${name} - Level: ${level} - Certification: ${certification}</p>`;
        skillsSection.appendChild(skillDiv);
    });
    document.getElementById("resume-sections").appendChild(skillsSection);

    // Projects Section
    const projectInputs = document.querySelectorAll(".project-entry");
    const projectsSection = document.createElement("section");
    projectsSection.innerHTML = "<h3>Projects</h3>";
    projectInputs.forEach(project => {
        const title = project.querySelector(".project-title").value;
        const description = project.querySelector(".project-description").value;
        const technologies = project.querySelector(".project-technologies").value;
        const role = project.querySelector(".project-role").value;
        const link = project.querySelector(".project-link").value;

        const projectDiv = document.createElement("div");
        projectDiv.innerHTML = `<p><strong>${title}</strong>: ${description} - Technologies: ${technologies} - Role: ${role} - <a href="${link}">View Project</a></p>`;
        projectsSection.appendChild(projectDiv);
    });
    document.getElementById("resume-sections").appendChild(projectsSection);

    // Certifications Section
    const certificationInputs = document.querySelectorAll(".certification-entry");
    const certificationsSection = document.createElement("section");
    certificationsSection.innerHTML = "<h3>Certifications</h3>";
    certificationInputs.forEach(cert => {
        const name = cert.querySelector(".certification-name").value;
        const organization = cert.querySelector(".certification-organization").value;
        const date = cert.querySelector(".certification-date").value;
        
        const certDiv = document.createElement("div");
        certDiv.innerHTML = `<p>${name} - ${organization} (Obtained: ${date})</p>`;
        certificationsSection.appendChild(certDiv);
    });
    document.getElementById("resume-sections").appendChild(certificationsSection);

    // Awards Section
    const awardInputs = document.querySelectorAll(".award-entry");
    const awardsSection = document.createElement("section");
    awardsSection.innerHTML = "<h3>Awards</h3>";
    awardInputs.forEach(award => {
        const name = award.querySelector(".award-name").value;
        const organization = award.querySelector(".award-organization").value;
        const date = award.querySelector(".award-date").value;
        
        const awardDiv = document.createElement("div");
        awardDiv.innerHTML = `<p>${name} - ${organization} (Received: ${date})</p>`;
        awardsSection.appendChild(awardDiv);
    });
    document.getElementById("resume-sections").appendChild(awardsSection);

    // Languages Section
    const languageInputs = document.querySelectorAll(".language-entry");
    const languagesSection = document.createElement("section");
    languagesSection.innerHTML = "<h3>Languages</h3>";
    languageInputs.forEach(lang => {
        const name = lang.querySelector(".language-name").value;
        const proficiency = lang.querySelector(".language-proficiency").value;
        
        const languageDiv = document.createElement("div");
        languageDiv.innerHTML = `<p>${name} - Proficiency: ${proficiency}</p>`;
        languagesSection.appendChild(languageDiv);
    });
    document.getElementById("resume-sections").appendChild(languagesSection);

    // Interests Section
    const interestInputs = document.querySelectorAll(".interest-entry");
    const interestsSection = document.createElement("section");
    interestsSection.innerHTML = "<h3>Interests</h3>";
    interestInputs.forEach(interest => {
        const name = interest.querySelector(".interest-name").value;

        const interestDiv = document.createElement("div");
        interestDiv.innerHTML = `<p>${name}</p>`;
        interestsSection.appendChild(interestDiv);
    });
    document.getElementById("resume-sections").appendChild(interestsSection);
}
