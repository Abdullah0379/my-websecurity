document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contact-form");

    form.addEventListener("submit", function(e) {
        e.preventDefault(); // page reload বন্ধ

        // Input values
        const name = form.name.value.trim();
        const email = form.email.value.trim();
        const subject = form.subject.value.trim();
        const message = form.message.value.trim();

        // Simple email regex
        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

        if (name === "" || email === "" || subject === "" || message === "") {
            alert("All fields are required!");
            return;
        }

        if (!email.match(emailPattern)) {
            alert("Please enter a valid email address!");
            return;
        }

        // Success
        alert(`Thank you ${name}! Your message has been sent successfully.`);
        form.reset(); // form clear
    });
});
