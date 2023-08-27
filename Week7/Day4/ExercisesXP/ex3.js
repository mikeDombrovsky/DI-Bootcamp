// Create a self invoking function that takes 4 arguments:
//number of children, partner’s name, geographic location, job title.
//The function should display in the DOM a sentence like "You will be a <job title> in <geographic location>, and married to <partner's name> with <number of children> kids."
((number_of_children, partner_name, location, job_title) => {
    document.querySelector('div').innerHTML = `
    You will be a ${job_title} in ${location}, and married to ${partner_name} with ${number_of_children} kids.`
})(10, "Bobby", "Israel", "President");