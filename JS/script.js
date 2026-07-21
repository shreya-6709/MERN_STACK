/*const register=()=>{
    console.log(5*5);
};
register();
document.getElementById("title").innerHTML="<h1>Registration</h1>"*/

// const register=() =>{
//     console.log(5*5)
// };
// register();
// document.getElementById("title").innerHTML="<h1>Registration</h1>"
const show = () => {

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const phone = document.getElementById("phone").value;

    // Gender
    let gender = "Not Selected";

    const genders = document.getElementsByName("gender");

    for (let i = 0; i < genders.length; i++) {
        if (genders[i].checked) {
            gender = genders[i].value;
            break;
        }
    }

    // Qualifications
    let qualifications = [];

    const qualify = document.getElementsByClassName("qualification");

    for (let i = 0; i < qualify.length; i++) {
        if (qualify[i].checked) {
            qualifications.push(qualify[i].value);
        }
    }

    const dob = document.getElementById("dob").value;

    // Image
    const image = document.getElementById("image").files[0];

    let imageHTML = "No Image Selected";

    if (image) {
        const imageURL = URL.createObjectURL(image);

        imageHTML = `
            <img src="${imageURL}" width="150" height="150" alt="Student Image">
        `;
    }

    document.getElementById("result").innerHTML = `
        <h2>Student Details</h2>

        <p><b>Name:</b> ${name}</p>

        <p><b>Email:</b> ${email}</p>

        <p><b>Password:</b> ${password}</p>

        <p><b>Phone:</b> ${phone}</p>

        <p><b>Gender:</b> ${gender}</p>

        <p><b>Qualifications:</b> ${
            qualifications.length > 0
                ? qualifications.join(", ")
                : "None"
        }</p>

        <p><b>DOB:</b> ${dob}</p>

        <p><b>Image:</b></p>

        ${imageHTML}
    `;
};