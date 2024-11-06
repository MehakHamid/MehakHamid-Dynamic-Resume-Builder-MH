function addSkill() {
    var skillList = document.getElementById('skills-list');
    var newSkill = document.createElement('li');
    newSkill.innerHTML = "<input type=\"text\" placeholder=\"Enter a new skill\" />";
    skillList === null || skillList === void 0 ? void 0 : skillList.appendChild(newSkill);
}

function addLanguage() {
    var languageList = document.getElementById('languages-list');
    var newLanguage = document.createElement('li');
    newLanguage.innerHTML = "<input type=\"text\" placeholder=\"Enter a new language\" />";
    languageList === null || languageList === void 0 ? void 0 : languageList.appendChild(newLanguage);
}

function addAchievement() {
    var achievementList = document.getElementById('achievements-list');
    var newAchievement = document.createElement('li');
    newAchievement.innerHTML = "<input type=\"text\" placeholder=\"Enter a new achievement\" />";
    achievementList === null || achievementList === void 0 ? void 0 : achievementList.appendChild(newAchievement);
}

function addEducation() {
    var educationList = document.getElementById('education-list');
    var newEducation = document.createElement('li');
    newEducation.innerHTML = "<input type=\"text\" placeholder=\"Degree\" /> - <input type=\"text\" placeholder=\"Field of Study\" /> (Passing Year: <input type=\"text\" placeholder=\"Year\" />)";
    educationList === null || educationList === void 0 ? void 0 : educationList.appendChild(newEducation);
}

function addProject() {
    var projectList = document.getElementById('projects-list');
    var newProject = document.createElement('li');
    newProject.innerHTML = "<input type=\"text\" placeholder=\"Enter a new project\" />";
    projectList === null || projectList === void 0 ? void 0 : projectList.appendChild(newProject);
}

        resumeWindow.document.write("</body></html>");
    }
});
