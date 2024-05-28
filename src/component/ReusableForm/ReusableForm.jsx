
const ReusableForm = ({formTitle,handleSubmit,submitBtnText='Sing Up',children}) => {

    const handleLocalSubmir = e =>{
        e.preventDefault();
        // console.log(e.target.email.value);
        const data ={
            name:e.target.name.value,
            email:e.target.email.value,
            password:e.target.password.value
        }
            console.log(data);
            handleSubmit(data);
    }
  
    return (
        <div>
            {children}
            {/* <h2>{formTitle}</h2> */}
             <form onSubmit={handleLocalSubmir}>
                <input type="text" name="name"placeholder="name" />
                <br />
                <input type="email" name="email" id=""placeholder="email" />
                <br />
                <input type="password"name="password"placeholder="password" />
                <br />
                <input type="submit" value={submitBtnText} placeholder="submit"/>

            </form>
        </div>
    );
};

export default ReusableForm;