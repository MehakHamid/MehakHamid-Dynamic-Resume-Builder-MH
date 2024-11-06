// Function to add a new experience entry
function addExperience(): void {
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
    document.getElementById("experience-inputs")?.appendChild(container);
}

// Function to add a new education entry
function addEducation(): void {
    const container = document.createElement("div");
    container.classList.add("education-entry");
    container.innerHTML = `
        <input type="text" placeholder="Degree Name" class="education-degree">
        <input type="text" placeholder="Institution Name" class="education-institution">
        <input type="date" placeholder="End Date" class="education-end-date">
    `;
    document.getElementById("education-inputs")?.appendChild(container);
}

// Function to add a new skill entry
function addSkill(): void {
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
    document.getElementById("skills-inputs")?.appendChild(container);
}

// Function to add a new project entry
function addProject(): void {
    const container = document.createElement("div");
    container.classList.add("project-entry");
    container.innerHTML = `
        <input type="text" placeholder="Project Title" class="project-title">
        <textarea placeholder="Description" class="project-description"></textarea>
        <input type="text" placeholder="Technologies Used" class="project-technologies">
        <input type="text" placeholder="Role in Project" class="project-role">
        <input type="text" placeholder="Link to Project (if applicable)" class="project-link">
    `;
    document.getElementById("projects-inputs")?.appendChild(container);
}

// Function to add a new certification entry
function addCertification(): void {
    const container = document.createElement("div");
    container.classList.add("certification-entry");
    container.innerHTML = `
        <input type="text" placeholder="Certification Name" class="certification-name">
        <input type="text" placeholder="Certifying Organization" class="certification-organization">
        <input type="date" placeholder="Date Obtained" class="certification-date">
    `;
    document.getElementById("certifications-inputs")?.appendChild(container);
}

// Function to add a new award entry
function addAward(): void {
    const container = document.createElement("div");
    container.classList.add("award-entry");
    container.innerHTML = `
        <input type="text" placeholder="Award/Honor Name" class="award-name">
        <input type="text" placeholder="Awarding Organization" class="award-organization">
        <input type="date" placeholder="Date Received" class="award-date">
    `;
    document.getElementById("awards-inputs")?.appendChild(container);
}

// Function to add a new language entry
function addLanguage(): void {
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
    document.getElementById("languages-inputs")?.appendChild(container);
}

// Function to add a new interest entry
function addInterest(): void {
    const container = document.createElement("div");
    container.classList.add("interest-entry");
    container.innerHTML = `
        <input type="text" placeholder="Interest" class="interest-name">
    `;
    document.getElementById("interests-inputs")?.appendChild(container);
}

// Function to generate the resume display
function generateResume(): void {
    // Info Section
    const name = (document.getElementById("name") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const phone = (document.getElementById("phone") as HTMLInputElement).value;
    const address = (document.getElementById("address") as HTMLInputElement).value;
    const linkedin = (document.getElementById("linkedin") as HTMLInputElement).value;
    const website = (document.getElementById("website") as HTMLInputElement).value;
    const summary = (document.getElementById("summary") as HTMLTextAreaElement).value;

    // Set Name and Summary
    document.getElementById("resume-name")!.textContent = name;
    document.getElementById("resume-summary")!.textContent = summary;

    // Experience Section
    const experienceInputs = document.querySelectorAll(".experience-entry");
    const experienceSection = document.createElement("section");
    experienceSection.innerHTML = "<h3>Experience</h3>";
    experienceInputs.forEach(exp => {
        const title = (exp.querySelector(".experience-title") as HTMLInputElement).value;
        const company = (exp.querySelector(".experience-company") as HTMLInputElement).value;
        const start = (exp.querySelector(".experience-start") as HTMLInputElement).value;
        const end = (exp.querySelector(".experience-end") as HTMLInputElement).value;
        const description = (exp.querySelector(".experience-description") as HTMLTextAreaElement).value;
        const achievements = (exp.querySelector(".experience-achievements") as HTMLTextAreaElement).value;
        const skills = (exp.querySelector(".experience-skills") as HTMLInputElement).value;
        
        const expDiv = document.createElement("div");
        expDiv.innerHTML = `<p><strong>${title}</strong> at ${company} (${start} - ${end})</p><p>${description}</p><p>Achievements: ${achievements}</p><p>Skills Used: ${skills}</p>`;
        experienceSection.appendChild(expDiv);
    });
    document.getElementById("resume-sections")?.appendChild(experienceSection);

    // Education, Skills, Projects, Certifications, Awards, Languages, and Interests Sections
    // Repeat similar structure as above for each of these sections...

    // Append completed sections to display area
    document.getElementById("resume-sections")!.innerHTML = "";
    document.getElementById("resume-sections")!.appendChild(experienceSection);
    // ... Append other sections similarly
}

// Add Event Listeners for "Add More" Buttons
document.querySelector("#experience-section button")?.addEventListener("click", addExperience);
document.querySelector("#education-section button")?.addEventListener("click", addEducation);
document.querySelector("#skills-section button")?.addEventListener("click", addSkill);
document.querySelector("#projects-section button")?.addEventListener("click", addProject);
document.querySelector("#certifications-section button")?.addEventListener("click", addCertification);
document.querySelector("#awards-section button")?.addEventListener("click", addAward);
document.querySelector("#languages-section button")?.addEventListener("click", addLanguage);
document.querySelector("#interests-section button")?.addEventListener("click", addInterest);
document.getElementById("generate-resume")?.addEventListener("click", generateResume);
