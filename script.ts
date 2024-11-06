interface PersonalInfo {
    name: string;
    email: string;
    phone: string;
    address: string;
    linkedin: string;
    website: string;
    summary: string;
}

interface Experience {
    jobTitle: string;
    company: string;
    location: string;
    startDate: string;
    endDate: string;
    description: string[];
    achievements: string[];
    skillsUsed: string[];
}

interface Education {
    degree: string;
    field: string;
    institution: string;
    endDate: string;
}

interface Skill {
    name: string;
    level: 'beginner' | 'intermediate' | 'advanced';
    certification?: string;
}

interface Project {
    title: string;
    description: string;
    technologies: string[];
    role: string;
    link?: string;
}

interface Certification {
    name: string;
    organization: string;
    dateObtained: string;
}

interface Award {
    name: string;
    organization: string;
    dateReceived: string;
}

interface Language {
    name: string;
    proficiency: 'basic' | 'conversational' | 'fluent';
}

interface Interest {
    name: string;
}

class ResumeBuilder {
    private form: HTMLFormElement;
    private preview: HTMLDivElement;

    constructor() {
        this.form = document.getElementById('resumeForm') as HTMLFormElement;
        this.preview = document.getElementById('resumePreview') as HTMLDivElement;
        this.initializeEventListeners();
    }

    private initializeEventListeners(): void {
        // Add section buttons
        document.querySelectorAll('.add-btn').forEach(button => {
            button.addEventListener('click', (e) => {
                const section = (e.target as HTMLElement).dataset.section;
                if (section) this.addSection(section);
            });
        });

        // Form submission
        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.generateResume();
        });
    }

    private addSection(section: string): void {
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

    private createSectionFields(section: string): string {
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

    private generateResume(): void {
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

    private getPersonalInfo(formData: FormData): PersonalInfo {
        return {
            name: formData.get('name') as string || '',
            email: formData.get('email') as string || '',
            phone: formData.get('phone') as string || '',
            address: formData.get('address') as string || '',
            linkedin: formData.get('linkedin') as string || '',
            website: formData.get('website') as string || '',
            summary: formData.get('summary') as string || ''
        };
    }

    private getExperiences(): Experience[] {
        const experiences: Experience[] = [];
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

    private getEducation(): Education[] {
        const education: Education[] = [];
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

    private getSkills(): Skill[] {
        const skills: Skill[] = [];
        const skillItems = document.querySelectorAll('#skillsContainer .section-item');
        
        skillItems.forEach(item => {
            const input = item.querySelector('input');
            const select = item.querySelector('select');
            
            if (input && select) {
                skills.push({
                    name: input.value,
                    level: select.value as 'beginner' | 'intermediate' | 'advanced'
                });
            }
        });

        return skills;
    }

    private updatePreview(data: any): void {
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
