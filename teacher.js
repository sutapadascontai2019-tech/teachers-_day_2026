// ================================
// OPEN INVITATION
// ================================

function openInvitation() {

    document
        .getElementById("invitation")
        .scrollIntoView({
            behavior: "smooth"
        });

}


// ================================
// RSVP
// ================================

const rsvpForm =
    document.getElementById("rsvpForm");


rsvpForm.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();


        const name =
            document.getElementById(
                "teacherName"
            ).value;


        const attendance =
            document.getElementById(
                "attendance"
            ).value;


        const message =
            document.getElementById(
                "successMessage"
            );


        if (attendance === "yes") {

            message.textContent =
                `Thank you ${name}! We are happy that you will join us for the Teacher's Day celebration.`;

        }

        else {

            message.textContent =
                `Thank you ${name}! We appreciate your response.`;

        }


        rsvpForm.reset();

    }
);