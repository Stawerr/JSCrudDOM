const form  = document.querySelector('form');
form.addEventListener('submit', (e) => {
    // handle the form data
    e.preventDefault();
    if(e.target.name.value!=='' && e.target.age.value!=='' && e.target.age.value>0 && e.target.age.value<120){
        createPerson(e.target.name.value, e.target.age.value)
    }
        else{
            alert("Invalid input");
        }
});