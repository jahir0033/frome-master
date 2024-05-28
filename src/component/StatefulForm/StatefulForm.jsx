import { useState } from "react";

const StatefulForm = () => {

    const [name, setName] = useState('jahir vai');
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [error,setError] = useState('')

    const handleSubmit = e =>{
        e.preventDefault();
        if(password.length < 6)
            setError('password must be 6 characters or longer')
        else{
            setError('')
            }
             console.log(name,email,password );
         }

// 1 name
    const handleNameChang = e =>{
        setName(e.target.value);
    }
// 2 email
    const handleEmailChang = e =>{
        setEmail(e.target.value);
    }
// 3 password
    const handlePasswordChang = e =>{
        setPassword(e.target.value);
    }

    return (
        <div>
             <form onSubmit={handleSubmit}>

                <input value={name}
                    onChange={handleNameChang} 
                type="text" name="name"placeholder="name" />
                <br />

                <input 
                    onChange={handleEmailChang}
                type="email" name="email" id=""required placeholder="email" />
                <br />

                <input onChange={handlePasswordChang}
                type="password"name="password" placeholder="password " />
                <br />

                <input
                 type="submit" value="Submit" placeholder="submit"/>
                    {
                        error && <p>{error}</p>
                    }
            </form>
        </div>
    );
};

export default StatefulForm;