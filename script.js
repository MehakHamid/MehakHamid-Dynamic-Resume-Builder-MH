// Handling dynamic fields and generating the resume
var _a, _b, _c, _d, _e, _f;
// Add skill
(_a = document.getElementById("add-skill")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
    var skillsList = document.getElementById("skills-list");
    var newSkill = document.createElement("input");
    newSkill.type = "text";
    newSkill.placeholder = "Skill";
    newSkill.required = true;
    skillsList === null || skillsList === void 0 ? void 0 : skillsList.appendChild(newSkill);
});
// Add language
(_b = document.getElementById("add-language")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", function () {
    var languagesList = document.getElementById("languages-list");
    var newLanguage = document.createElement("input");
    newLanguage.type = "text";
    newLanguage.placeholder = "Language";
    newLanguage.required = true;
    languagesList === null || languagesList === void 0 ? void 0 : languagesList.appendChild(newLanguage);
});
// Add education
(_c = document.getElementById("add-education")) === null || _c === void 0 ? void 0 : _c.addEventListener("click", function () {
    var educationList = document.getElementById("education-list");
    var newDegree = document.createElement("input");
    newDegree.type = "text";
    newDegree.placeholder = "Degree Name";
    newDegree.required = true;
    var newField = document.createElement("input");
    newField.type = "text";
    newField.placeholder = "Field";
    newField.required = true;
    var newCompletionYear = document.createElement("input");
    newCompletionYear.type = "text";
    newCompletionYear.placeholder = "Completion Year";
    newCompletionYear.required = true;
    educationList === null || educationList === void 0 ? void 0 : educationList.appendChild(newDegree);
    educationList === null || educationList === void 0 ? void 0 : educationList.appendChild(newField);
    educationList === null || educationList === void 0 ? void 0 : educationList.appendChild(newCompletionYear);
});
// Show/hide experience details
var experienceSelect = document.getElementById("experience-select");
experienceSelect === null || experienceSelect === void 0 ? void 0 : experienceSelect.addEventListener("change", function () {
    var experienceValue = experienceSelect.value;
    var experienceSection = document.getElementById("experienced-section");
    if (experienceValue === "experienced") {
        experienceSection.style.display = "block";
    }
    else {
        experienceSection.style.display = "none";
    }
});
// Add experience with currently working checkbox logic
(_d = document.getElementById("add-experience")) === null || _d === void 0 ? void 0 : _d.addEventListener("click", function () {
    var experienceSection = document.getElementById("experienced-section");
    var experienceGroup = document.createElement("div");
    experienceGroup.className = "experience-group";
    var newCompany = document.createElement("input");
    newCompany.type = "text";
    newCompany.className = "company-name";
    newCompany.placeholder = "Company Name";
    var newPosition = document.createElement("input");
    newPosition.type = "text";
    newPosition.className = "position";
    newPosition.placeholder = "Position";
    var newCheckboxLabel = document.createElement("label");
    var newCheckbox = document.createElement("input");
    newCheckbox.type = "checkbox";
    newCheckbox.className = "currently-working";
    newCheckboxLabel.appendChild(newCheckbox);
    newCheckboxLabel.appendChild(document.createTextNode(" Currently Working Here"));
    var newExperienceYears = document.createElement("input");
    newExperienceYears.type = "number";
    newExperienceYears.className = "experience-years";
    newExperienceYears.placeholder = "Experience (Years)";
    newCheckbox.addEventListener("change", function () {
        if (newCheckbox.checked) {
            newExperienceYears.style.display = "none"; // Hide experience years
        }
        else {
            newExperienceYears.style.display = "inline"; // Show experience years
        }
    });
    experienceGroup.appendChild(newCompany);
    experienceGroup.appendChild(newPosition);
    experienceGroup.appendChild(newCheckboxLabel);
    experienceGroup.appendChild(newExperienceYears);
    experienceSection === null || experienceSection === void 0 ? void 0 : experienceSection.appendChild(experienceGroup);
});
// Add achievement
(_e = document.getElementById("add-achievement")) === null || _e === void 0 ? void 0 : _e.addEventListener("click", function () {
    var achievementList = document.getElementById("achievement-list");
    var newAchievement = document.createElement("input");
    newAchievement.type = "text";
    newAchievement.placeholder = "Achievement";
    achievementList === null || achievementList === void 0 ? void 0 : achievementList.appendChild(newAchievement);
});
// Generate resume
(_f = document.getElementById("generate-resume")) === null || _f === void 0 ? void 0 : _f.addEventListener("click", function () {
    var resumeWindow = window.open("", "_blank");
    if (resumeWindow) {
        resumeWindow.document.write("<html><head><title>Generated Resume</title><link rel=\"stylesheet\" href=\"style.css\"></head><body>");
        var name_1 = document.getElementById("name").value;
        resumeWindow.document.write("<h1>".concat(name_1, "</h1>"));
        // Contact Info
        var email = document.getElementById("email").value;
        var contactNumber = document.getElementById("contact-number").value;
        var address = document.getElementById("address").value;
        resumeWindow.document.write("<h2>Contact Information</h2><p>Email: ".concat(email, "</p><p>Contact Number: ").concat(contactNumber, "</p><p>Address: ").concat(address, "</p>"));
        // Skills
        var skillsList = document.querySelectorAll("#skills-list input");
        resumeWindow.document.write("<h2>Skills</h2><ul>");
        skillsList.forEach(function (skill) {
            resumeWindow.document.write("<li>".concat(skill.value, "</li>"));
        });
        resumeWindow.document.write("</ul>");
        // Languages
        var languagesList = document.querySelectorAll("#languages-list input");
        resumeWindow.document.write("<h2>Languages</h2><ul>");
        languagesList.forEach(function (language) {
            resumeWindow.document.write("<li>".concat(language.value, "</li>"));
        });
        resumeWindow.document.write("</ul>");
        // Education
        var educationList = document.querySelectorAll("#education-list input");
        resumeWindow.document.write("<h2>Education</h2>");
        for (var i = 0; i < educationList.length; i += 3) {
            resumeWindow.document.write("<p><strong>Degree:</strong> ".concat(educationList[i].value, "</p>"));
            resumeWindow.document.write("<p><strong>Field:</strong> ".concat(educationList[i + 1].value, "</p>"));
            resumeWindow.document.write("<p><strong>Completion Year:</strong> ".concat(educationList[i + 2].value, "</p>"));
        }
        // Experience
        var experienceValue = experienceSelect.value;
        resumeWindow.document.write("<h2>Experience</h2>");
        if (experienceValue === "experienced") {
            var companyNames = document.querySelectorAll(".company-name");
            var positions = document.querySelectorAll(".position");
            var experienceYears = document.querySelectorAll(".experience-years");
            var currentlyWorkingList = document.querySelectorAll(".currently-working");
            for (var i = 0; i < companyNames.length; i++) {
                resumeWindow.document.write("<p><strong>Company:</strong> ".concat(companyNames[i].value, "</p>"));
                resumeWindow.document.write("<p><strong>Position:</strong> ".concat(positions[i].value, "</p>"));
                if (currentlyWorkingList[i].checked) {
                    resumeWindow.document.write("<p><strong>Status:</strong> Currently Working Here</p>");
                }
                else {
                    resumeWindow.document.write("<p><strong>Years of Experience:</strong> ".concat(experienceYears[i].value, "</p>"));
                }
            }
        }
        else {
            resumeWindow.document.write("<p>Fresh</p>");
        }
        // Achievements
        var achievementsList = document.querySelectorAll("#achievement-list input");
        resumeWindow.document.write("<h2>Achievements</h2><ul>");
        achievementsList.forEach(function (achievement) {
            resumeWindow.document.write("<li>".concat(achievement.value, "</li>"));
        });
        resumeWindow.document.write("</ul>");
        resumeWindow.document.write("</body></html>");
    }
});
