
const form = document.forms.form;
const formButton = document.getElementById("boton-formulario-submit");
const resetIcon = (checkIcon, errorIcon) => {
    checkIcon.style.display = "none";
    errorIcon.style.display = "none";
}

const activateCheckIcon = (checkIcon, errorIcon) => {
    checkIcon.style.display = "inline";
    errorIcon.style.display = "none";
}

const activateErrorIcon = (checkIcon, errorIcon) => {
    checkIcon.style.opacity = 'none';
    errorIcon.style.display = 'inline';
}


const mayusRexEx = /[A-Z]/g
const nameHandleKeyUp = (e, id) => {

    const name = e.target.value
    console.log(name);
    const length = name.match(mayusRexEx)
    console.log(name);

    const checkIcon = document.getElementById(`${id}-check`)
    const errorIcon = document.getElementById(`${id}-error`)

    if (name.length <= 4)
        resetIcon(checkIcon, errorIcon)

    if (name.length > 4 && length !== null)
        activateCheckIcon(checkIcon, errorIcon)

    if (name.length > 10 && length === null)
        activateErrorIcon(checkIcon, errorIcon)
}



const emailHandleKeyUp = (e) => {

    const email = e.target.value

    const checkIcon = document.getElementById(`email-check`)
    const errorIcon = document.getElementById(`email-error`)

    const haveDotCom = email.includes('.com')
    const haveDotNet = email.includes('.net')
    const haveDotOrg = email.includes('.org')
    const haveAt = email.indexOf('@') >= 0

    if (email.length <= 4)
        resetIcon(checkIcon, errorIcon)

    else
        email.length > 4 && haveAt && (haveDotCom || haveDotNet || haveDotOrg)
            ? activateCheckIcon(checkIcon, errorIcon)
            : activateErrorIcon(checkIcon, errorIcon)
}



const formButtonHandleClick = (e) => {

    e.preventDefault()

    const { firstname, lastname, email} = form

    const formData = {
        firstname: firstname.value,
        lastname: lastname.value,
        email: email.value,
        
    }

    console.log(formData);
}




form.firstname.addEventListener("keyup", e => nameHandleKeyUp(e, "firstname"));
form.lastname.addEventListener("keyup", e => nameHandleKeyUp(e, "lastname"));
form.email.addEventListener("keyup", emailHandleKeyUp);
formButton.addEventListener("click", formButtonHandleClick);
