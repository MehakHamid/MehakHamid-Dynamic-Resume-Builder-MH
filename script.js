class ResumeBuilder {
    constructor() {
        this.form = document.getElementById('resumeForm');
        this.preview = document.getElementById('resumePreview');
        this.initializeEventListeners();
    }

    initializeEventListeners() {
        // Add section buttons
        document.querySelectorAll('.add-btn').forEach(button => {
            button.addEventListener('click', (e) => {
                const section = e.target.dataset.section;
                if (section) this.addSection(section);
            });
        });

        // Form submission
        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.generateResume();
        });
    }

    addSection(section) {
        const container = document.getElementById(`${section}Container`);
        if (!container) return;

        const sectionItem = document.createElement('div');
        sectionItem.className = 'section-item';

        // Create section-specific fields
        const fields = this.createSectionFields(section);
        sectionItem.innerHTML = fields;

        // Add remove button
        const removeBtn = document.createElement('button');
        removeBtn.className = 'remove-btn';
        removeBtn.textContent = 'Remove';
        removeBtn.onclick = () => sectionItem.remove();
        sectionItem.appendChild(removeBtn);

        container.appendChild(sectionItem);
    }

    createSectionFields(section) {
        switch (section) {
            case 'experience':
                return `
                    <div class="grid-2">
                        <input type="text" placeholder="Job Title" required>
                        <input type="text" placeholder="Company" required>
                        <input type="text" placeholder="Location">
                        <input type="date" placeholder="Start Date">
                        <input type="date" placeholder="End Date">
                    </div>
                    <textarea placeholder="Description"></textarea>
                `;
            case 'education':
                return `
                    <div class="grid-2">
                        <input type="text" placeholder="Degree" required>
                        <input type="text" placeholder="Field of Study" required>
                        <input type="text" placeholder="Institution" required>
                        <input type="date" placeholder="End Date">
                    </div>
                `;
            case 'skills':
                return `
                    <div class="grid-2">
                        <input type="text" placeholder="Skill Name" required>
                        <select required>
                            <option value="beginner">Beginner</option>
                            <option value="intermediate">Intermediate</option>
                            <option value="advanced">Advanced</option>
                        </select>
                    </div>
                `;
            // Add other section templates
            default:
                return '';
        }
    }

    generateResume() {
        const formData = new FormData(this.form);
        const resumeData = {
            personalInfo: this.getPersonalInfo(formData),
            experiences: this.getExperiences(),
            education: this.getEducation(),
            skills: this.getSkills(),
            // Add other sections
        };

        this.updatePreview(resumeData);
    }

    getPersonalInfo(formData) {
        return {
            name: formData.get('name') || '',
            email: formData.get('email') || '',
            phone: formData.get('phone') || '',
            address: formData.get('address') || '',
            linkedin: formData.get('linkedin') || '',
            website: formData.get('website') || '',
            summary: formData.get('summary') || ''
        };
    }

    getExperiences() {
        const experiences = [];
        const experienceItems = document.querySelectorAll('#experienceContainer .section-item');

        experienceItems.forEach(item => {
            const inputs = item.querySelectorAll('input');
            const textarea = item.querySelector('textarea');

            experiences.push({
                jobTitle: inputs[0].value,
                company: inputs[1].value,
                location: inputs[2].value,
                startDate: inputs[3].value,
                endDate: inputs[4].value,
                description: textarea ? [textarea.value] : [],
                achievements: [],
                skillsUsed: []
            });
        });

        return experiences;
    }

    getEducation() {
        const education = [];
        const educationItems = document.querySelectorAll('#educationContainer .section-item');

        educationItems.forEach(item => {
            const inputs = item.querySelectorAll('input');

            education.push({
                degree: inputs[0].value,
                field: inputs[1].value,
                institution: inputs[2].value,
                endDate: inputs[3].value
            });
        });

        return education;
    }

    getSkills() {
        const skills = [];
        const skillItems = document.querySelectorAll('#skillsContainer .section-item');

        skillItems.forEach(item => {
            const input = item.querySelector('input');
            const select = item.querySelector('select');

            if (input && select) {
                skills.push({
                    name: input.value,
                    level: select.value
                });
            }
        });

        return skills;
    }

    updatePreview(data) {
        const previewContent = document.querySelector('.preview-content');
        if (!previewContent) return;

        previewContent.innerHTML = `
            <h1>${data.personalInfo.name}</h1>
            <div class="contact-info">
                ${data.personalInfo.email} | ${data.personalInfo.phone} | ${data.personalInfo.address}
            </div>
            <div class="summary">
                ${data.personalInfo.summary}
            </div>
            <!-- Add other sections -->
        `;
    }
}

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    new ResumeBuilder();
});
