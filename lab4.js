// ===================================
// LAB 4: DARK MODE 
// ===================================

// INSTRUCTIONS:
// 1. Select the necessary DOM elements
// 2. Add an event listener to the toggle button
// 3. Implement the toggleDarkMode function
// 4. Update the icon when switching modes
// 5. BONUS: Save the preference to localStorage

// ===================================
// STEP 1: Select DOM Elements
// ===================================
// select the theme toggle button (id: 'themeToggle')
const themeToggleBtn = document.getElementById('themeToggle');

// select the theme icon element (id: 'themeIcon')
const themeIcon = document.getElementById('themeIcon');

// get the <body> element
const body = document.body;


// ===================================
// STEP 2: Add Event Listener
// ===================================
// add a 'click' event listener to the toggle button
// the event listener calls the toggleDarkMode function
themeToggleBtn.addEventListener('click', toggleDarkMode);


// ===================================
// STEP 3: Toggle Dark Mode Function
// ===================================
function toggleDarkMode() {
    // toggle the 'dark-mode' class on the body element
    body.classList.toggle('dark-mode');
    
    // update the icon based on the current mode
    updateIcon(body.classList.contains('dark-mode'));
    
    // save the current mode to localStorage
    localStorage.setItem('theme', body.classList.contains('dark-mode') ? 'dark' : 'light');
}


// ===================================
// STEP 4: Update Icon Function
// ===================================
function updateIcon(isDarkMode) {
    // if dark mode, show sun icon ☀️
    if (isDarkMode) {
        themeIcon.textContent = '☀️';

    // if light mode: show moon icon 🌙
    } else {
        themeIcon.textContent = '🌙';
    }
}

// ===================================
// Optional: Load Saved Preference
// ===================================
// This function runs when the page loads
// It checks if there's a saved preference in localStorage
function loadSavedTheme() {
    // TODO (OPTIONAL): 
    // 1. Get the saved theme from localStorage
    // 2. If it exists and is 'dark', add the dark-mode class to body
    // 3. Update the icon accordingly
    
    // get the saved theme from localStorage
    const savedTheme = localStorage.getItem('theme');
    // if it exists and is 'dark', add the dark-mode class to body
    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-mode');
        updateIcon(true);
    } else {
        body.classList.remove('dark-mode');
        updateIcon(false);
    }
}

// Call the function when the page loads (uncomment when you implement it)
loadSavedTheme();


// ===================================
// HELPFUL REMINDERS:
// ===================================
// DOM Selection:
//   - document.getElementById('id')
//   - document.querySelector('#id')
//   - document.body

// Class Manipulation:
//   - element.classList.add('class-name')
//   - element.classList.remove('class-name')
//   - element.classList.toggle('class-name')
//   - element.classList.contains('class-name')

// Event Listeners:
//   - element.addEventListener('event', function)
//   - Common events: 'click', 'mouseover', 'keydown'

// Changing Content:
//   - element.textContent = 'new text'
//   - element.innerHTML = '<span>html</span>'

// localStorage (BONUS):
//   - localStorage.setItem('key', 'value')
//   - localStorage.getItem('key')
//   - localStorage.removeItem('key')
// ===================================