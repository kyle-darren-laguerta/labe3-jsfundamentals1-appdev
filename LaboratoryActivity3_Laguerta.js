// Step 1: Use the last digit of your student ID (0–9) as your unique base number.
// Step 2: Use this base number in all the problems below.
// Example: If your ID ends with 7, your base number is 7.

// Problem 1: Grade Calculator
// Write a function calculateGrade(score) that returns the grade based on this rule:
// • 90–100: A
// • 80–89: B
// • 70–79: C
// • 60–69: D
// • Below 60: F
// Use score = base_number × 10 + 5. Example: If base = 7 → score = 75 → Grade = C.
function calculateGrade(score) {
    if (score >= 90 && score <= 100) {
        return "A";
    } else if (score >= 80 && score < 90) {
        return "B";
    } else if (score >= 70 && score < 80) {
        return "C";
    } else if (score >= 60 && score < 70) {
        return "D";
    } else if (score < 60) {
        return "F";
    } else {
        return "Invalid Score";
    }
}

// let score = 5;
// console.log(`Score: ${score}; Grade: ${calculateGrade(score)}`);

// Problem 2: Star Pattern
// Write a function showStars(rows) that prints a triangle of stars using loops.
// Rows should be equal to your base number + 2. Example: If base = 4 → rows = 6.
function showStars(rows) {
    for (let i=1; i <= rows; i++) {
        for (j=1; j <= i; j++) {
            process.stdout.write("*");
        }
        process.stdout.write("\n");
    }
}
showStars(2);

// Problem 3: Prime Number Checker
// Write a function isPrime(n) that checks if a number is prime.
// Check if your base number + 10 is prime. Example: If base = 3 → check 13 → Prime.

// Problem 4: Multiplication Table
// Write a function multiplicationTable(n) that prints the multiplication table of n from 1 to 10.
// Use n = base number. Example: If base = 5 → print the multiplication table of 5.

