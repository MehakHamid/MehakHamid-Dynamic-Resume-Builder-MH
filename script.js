function addSkill() {
    var skillInput = document.createElement("input");
    skillInput.type = "text";
    skillInput.placeholder = "Enter a skill";
    document.getElementById("skills-inputs")?.appendChild(skillInput);
}

function addLanguage() {
    var languageInput = document.createElement("input");
    languageInput.type = "text";
    languageInput.placeholder = "Enter a language";
    document.getElementById("languages-inputs")?.appendChild(languageInput);
}

function addAchievement() {
    var achievementInput = document.createElement("input");
    achievementInput.type = "text";
    achievementInput.placeholder = "Enter an achievement";
    document.getElementById("achievements-inputs")?.appendChild(achievementInput);
}

function addEducation() {
    var educationInput = document.createElement("input");
    educationInput.type = "text";
    educationInput.placeholder = "Enter education detail";
    document.getElementById("education-inputs")?.appendChild(educationInput);
}

function addProject() {
    var projectInput = document.createElement("input");
    projectInput.type = "text";
    projectInput.placeholder = "Enter a project";
    document.getElementById("projects-inputs")?.appendChild(projectInput);
}

function generateResume() {
    document.getElementById("resume-name").textContent = document.getElementById("name").value;
    document.getElementById("resume-email").textContent = "Email: " + document.getElementById("email").value;
    document.getElementById("resume-address").textContent = "Address: " + document.getElementById("address").value;

    var skillsList = document.getElementById("resume-skills");
    skillsList.innerHTML = "";
    Array.from(document.getElementById("skills-inputs").children).forEach(function (input) {
        var li = document.createElement("li");
        li.textContent = input.value;
        skillsList?.appendChild(li);
    });

    var languagesList = document.getElementById("resume-languages");
    languagesList.innerHTML = "";
    Array.from(document.getElementById("languages-inputs").children).forEach(function (input) {
        var li = document.createElement("li");
        li.textContent = input.value;
        languagesList?.appendChild(li);
    });

    var achievementsList = document.getElementById("resume-achievements");
    achievementsList.innerHTML = "";
    Array.from(document.getElementById("achievements-inputs").children).forEach(function (input) {
        var li = document.createElement("li");
        li.textContent = input.value;
        achievementsList?.appendChild(li);
    });

    var educationList = document.getElementById("resume-education");
    educationList.innerHTML = "";
    Array.from(document.getElementById("education-inputs").children).forEach(function (input) {
        var li = document.createElement("li");
        li.textContent = input.value;
        educationList?.appendChild(li);
    });

    var projectsList = document.getElementById("resume-projects");
    projectsList.innerHTML = "";
    Array.from(document.getElementById("projects-inputs").children).forEach(function (input) {
        var li = document.createElement("li");
        li.textContent = input.value;
        projectsList?.appendChild(li);
    });
}
