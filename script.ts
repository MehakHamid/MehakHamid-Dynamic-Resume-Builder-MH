function addSkill(): void {
    const skillList = document.getElementById('skills-list');
    const newSkill = document.createElement('li');
    newSkill.innerHTML = `<input type="text" placeholder="Enter a new skill" />`;
    skillList?.appendChild(newSkill);
}

function addLanguage(): void {
    const languageList = document.getElementById('languages-list');
    const newLanguage = document.createElement('li');
    newLanguage.innerHTML = `<input type="text" placeholder="Enter a new language" />`;
    languageList?.appendChild(newLanguage);
}

function addAchievement(): void {
    const achievementList = document.getElementById('achievements-list');
    const newAchievement = document.createElement('li');
    newAchievement.innerHTML = `<input type="text" placeholder="Enter a new achievement" />`;
    achievementList?.appendChild(newAchievement);
}

function addEducation(): void {
    const educationList = document.getElementById('education-list');
    const newEducation = document.createElement('li');
    newEducation.innerHTML = `<input type="text" placeholder="Degree" /> - <input type="text" placeholder="Field of Study" /> (Passing Year: <input type="text" placeholder="Year" />)`;
    educationList?.appendChild(newEducation);
}

function addProject(): void {
    const projectList = document.getElementById('projects-list');
    const newProject = document.createElement('li');
    newProject.innerHTML = `<input type="text" placeholder="Enter a new project" />`;
    projectList?.appendChild(newProject);
}
