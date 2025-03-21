// ===============================
// Values, Data Types, and Operations
// ===============================
let judgeName = "Alex";
let filmTitle = "The Premiere";
let scoreDirection = 9;
let totalScore = scoreDirection + 1;
console.log("Judge: " + judgeName + ", Total Score: " + totalScore);

// ===============================
// Stringing Characters Together
// ===============================
let feedback = "Stunning visuals and well-paced story.";
let fullComment = "Feedback for " + filmTitle + ": " + feedback;
console.log(fullComment);

// ===============================
// Control Structures and Logic
// ===============================
let isRated = false;
if (!isRated) {
  console.log(filmTitle + " still needs to be rated.");
}

// ===============================
// Working with Loops
// ===============================
let filmsToJudge = ["The Premiere", "SZN", "Somewhere Confidential"];
for (let i = 0; i < filmsToJudge.length; i++) {
  console.log("Judging film: " + filmsToJudge[i]);
}

// ===============================
// Building and Using Arrays
// ===============================
let categories = ["Direction", "Writing", "Cinematography", "Sound"];
for (let i = 0; i < categories.length; i++) {
  console.log("Scoring category: " + categories[i]);
}

// ===============================
// Organization and Time Management
// ===============================
// This part is shown more in planning, but here's how you'd use it in code:
let steps = ["Watch film", "Score each category", "Write feedback", "Submit"];
for (let i = 0; i < steps.length; i++) {
  console.log("Step " + (i + 1) + ": " + steps[i]);
}
