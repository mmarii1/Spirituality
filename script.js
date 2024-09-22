const affirmations = [
    "You are capable of amazing things!",
    "Believe in yourself and all that you are.",
    "Your only limit is your mind.",
    "Dream it. Wish it. Do it.",
    "You are stronger than you think."
];

// Function to add image to vision board
function addImage() {
    const imageUrl = document.getElementById('imageUrl').value;
    const imagesDiv = document.getElementById('images');
    
    if (imageUrl) {
        const img = document.createElement('img');
        img.src = imageUrl;
        imagesDiv.appendChild(img);
        document.getElementById('imageUrl').value = '';  // Clear input
    }
}

// Function to add goals to the list
function addGoal() {
    const goalInput = document.getElementById('goalInput').value;
    const goalList = document.getElementById('goalList');
    
    if (goalInput) {
        const listItem = document.createElement('li');
        listItem.textContent = goalInput;
        goalList.appendChild(listItem);
        document.getElementById('goalInput').value = '';  // Clear input
    }
}

// Function to generate random daily affirmation
function generateAffirmation() {
    const randomIndex = Math.floor(Math.random() * affirmations.length);
    document.getElementById('affirmationText').textContent = affirmations[randomIndex];
}
