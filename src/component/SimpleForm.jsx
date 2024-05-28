

const SimpleForm = () => {
   const handleSubmit = e =>{
    e.preventDefault();
    console.log(e.target.name.value);
    console.log(e.target.email.value);
    console.log(e.target.phone.value);
    console.log('form submitted')
   }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name"placeholder="name" />
                <br />
                <input type="email" name="email" id=""placeholder="email" />
                <br />
                <input type="password"name="password"placeholder="phone number" />
                <br />
                <input type="submit" value="Submit" placeholder="submit"/>

            </form>
        </div>
    );
};

export default SimpleForm;