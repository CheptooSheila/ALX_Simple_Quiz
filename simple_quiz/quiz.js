function checkAnswer() {
    // Define the correct answer
    const correctAnswer = "4";

    // Get the user's answer from the selected radio button
    const userAnswer = document.querySelector('input[name="quiz"]:checked');

    // Check if the user selected an answer
    if (userAnswer) {
        // Compare the user's answer with the correct answer
        if (userAnswer.value === correctAnswer) {
            // If the answer is correct, provide feedback
            document.getElementById("feedback").textContent = "Correct! Well done.";
        } else {
            // If the answer is incorrect, provide feedback
            document.getElementById("feedback").textContent = "That's incorrect. Try again!";
        }
    } else {
        // If no answer is selected, prompt the user to choose an answer
        document.getElementById("feedback").textContent = "Please select an answer.";
    }
}

// Add event listener for the submit button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
