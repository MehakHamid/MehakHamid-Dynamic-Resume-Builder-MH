function addSkill(): void {
    const skillInput = document.createElement("input");
    skillInput.type = "text";
    skillInput.placeholder = "Enter a skill";
    document.getElementById("skills-inputs")?.appendChild(skillInput);
}

function addLanguage(): void {
    const languageInput = document.createElement("input");
    languageInput.type = "text";
    languageInput.placeholder = "Enter a language";
    document.getElementById("languages-inputs")?.appendChild(languageInput);
}

function addAchievement(): void {
    const achievementInput = document.createElement("input");
    achievementInput.type = "text";
    achievementInput.placeholder = "Enter an achievement";
    document.getElementById("achievements-inputs")?.appendChild(achievementInput);
}

function addEducation(): void {
    const educationInput = document.createElement("input");
    educationInput.type = "text";
    educationInput.placeholder = "Enter education detail";
    document.getElementById("education-inputs")?.appendChild(educationInput);
}

function addProject(): void {
    const projectInput = document.createElement("input");
    projectInput.type = "text";
    projectInput.placeholder = "Enter a project";
    document.getElementById("projects-inputs")?.appendChild(projectInput);
}

function generateResume(): void {
    // Collect user info
    (document.getElementById("resume-name") as HTMLElement).textContent = (document.getElementById("name") as HTMLInputElement).value;
    (document.getElementById("resume-email") as HTMLElement).textContent = "Email: " + (document.getElementById("email") as HTMLInputElement).value;
    (document.getElementById("resume-address") as HTMLElement).textContent = "Address: " + (document.getElementById("address") as HTMLInputElement).value;

    // Collect and display skills
    const skillsList = document.getElementById("resume-skills");
    skillsList!.innerHTML = "";
    Array.from(document.getElementById("skills-inputs")!.children).forEach((input: Element) => {
        const li = document.createElement("li");
        li.textContent = (input as HTMLInputElement).value;
        skillsList?.appendChild(li);
    });

    // Collect and display languages
    const languagesList = document.getElementById("resume-languages");
    languagesList!.innerHTML = "";
    Array.from(document.getElementById("languages-inputs")!.children).forEach((input: Element) => {
        const li = document.createElement("li");
        li.textContent = (input as HTMLInputElement).value;
        languagesList?.appendChild(li);
    });

    // Collect and display achievements
    const achievementsList = document.getElementById("resume-achievements");
    achievementsList!.innerHTML = "";
    Array.from(document.getElementById("achievements-inputs")!.children).forEach((input: Element) => {
        const li = document.createElement("li");
        li.textContent = (input as HTMLInputElement).value;
        achievementsList?.appendChild(li);
    });

    // Collect and display education
    const educationList = document.getElementById("resume-education");
    educationList!.innerHTML = "";
    Array.from(document.getElementById("education-inputs")!.children).forEach((input: Element) => {
        const li = document.createElement("li");
        li.textContent = (input as HTMLInputElement).value;
        educationList?.appendChild(li);
    });

    // Collect and display projects
    const projectsList = document.getElementById("resume-projects");
    projectsList!.innerHTML = "";
    Array.from(document.getElementById("projects-inputs")!.children).forEach((input: Element) => {
        const li = document.createElement("li");
        li.textContent = (input as HTMLInputElement).value;
        projectsList?.appendChild(li);
    });
}
