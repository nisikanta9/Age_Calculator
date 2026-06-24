function calculateAge() {
    const dobInput = document.getElementById("dob").value;
    const resultText = document.getElementById("result");

    if (!dobInput) {
        resultText.innerText = "Please enter your date of birth.";
        return;
    }

    const dob = new Date(dobInput);
    const today = new Date();
    let age = today.getFullYear() - dob.getFullYear();
    const monthDifference = today.getMonth() - dob.getMonth();

    // Adjust age if the DOB hasn't occurred yet this year
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < dob.getDate())) {
        age--;
    }

    resultText.innerText = `Your age is ${age} years.`;
}