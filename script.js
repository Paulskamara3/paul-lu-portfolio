<script>

    document
        .getElementById("contact-form")
        .addEventListener("submit", function(event) {

            event.preventDefault();

            const submitButton =
                this.querySelector("button[type='submit']");

            submitButton.innerHTML =
                '<i class="fa-solid fa-spinner fa-spin"></i> Sending...';

            submitButton.disabled = true;


            emailjs.sendForm(
                "service_tsa4s8v",
                "template_b3xjgob",
                this
            )

            .then(function() {

                alert(
                    "Thank you! Your message has been sent successfully."
                );

                document
                    .getElementById("contact-form")
                    .reset();

                submitButton.innerHTML =
                    '<i class="fa-solid fa-paper-plane"></i> Send Message';

                submitButton.disabled = false;

            })

            .catch(function(error) {

                console.error("EmailJS Error:", error);

                alert(
                    "Sorry, your message could not be sent. Please try again."
                );

                submitButton.innerHTML =
                    '<i class="fa-solid fa-paper-plane"></i> Send Message';

                submitButton.disabled = false;

            });

        });

</script>