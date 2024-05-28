import useInputState from "../../hooks/useInputState";



const HookForm = () => {
    // const [name,handleNameChange]= useInputState ('jahir');
    const emailState = useInputState('jamal@gmail.com')


    const handleSubmit = e =>{
        console.log('form data',emailState.value)
        e.preventDefault();
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                {/* <input value={name} onChange={handleNameChange} type="text" name="name"placeholder="name" /> */}
                <br />
                <input {...emailState} type="email" name="email" id=""placeholder="email" />
                <br />
                <input type="password"name="password"placeholder="phone number" />
                <br />
                <input type="submit" value="Submit" placeholder="submit"/>

            </form>
        </div>
    );
};

export default HookForm;