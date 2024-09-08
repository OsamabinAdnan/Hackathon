const toggleSkillsButton = document.getElementById('toggle-skills');
let skillsSection = document.getElementById('skills');

toggleSkillsButton?.addEventListener('click', () => {
    if (skillsSection) {
        if (skillsSection.style.display === 'none') {
            skillsSection.style.display = 'block';
            toggleSkillsButton.textContent = 'Hide Skills';
        } else {
            skillsSection.style.display = 'none';
            toggleSkillsButton.textContent = 'Show Skills';
        }
    }
});