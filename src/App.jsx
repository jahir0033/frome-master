
import './App.css'
import Grandpa from './component/Grandpa/Grandpa'
// import ReusableForm from './component/ReusableForm/ReusableForm'
// import HookForm from './component/HookForm/HookForm'
// import RefForm from './component/RefForm/RefForm'
// import SimpleFrom from './component/SimpleForm'
// import StatefulForm from './component/StatefulForm/StatefulForm'

function App() {
 
//   const handleSingUpSubmit = data =>{
//     console.log('sing up',data)
    
// }
//   const handleUpdateProfile = e =>{
//     console.log('profile updata',e)
// }
  return (
    <>
     
      <h1>Form Master</h1>
      <Grandpa></Grandpa>
      
      46-5 (advanced) Reusable form using props and children
      <br />
      46-6 Create a list of components to create connection
      <br />
      46-7 Prop Drilling To Pass Data To A Many Level Components
      <br />
      46-8 How To Use Context API To Avoid Prop Drilling
      {/* <SimpleFrom></SimpleFrom> */}
      {/* <StatefulForm></StatefulForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      {/* <ReusableForm
       formTitle={'Sing Up'}
        handleSubmit={handleSingUpSubmit}>
          <div>
            <h2>Sing Up</h2>
            <p>please sing up now</p>
          </div>
        </ReusableForm>

      <ReusableForm 
      formTitle={'Profile Update'}
       handleSubmit={handleUpdateProfile}
        submitBtnText='Update'>
          <div>
            <h2>Profile Update</h2>
            <p>always keep your profile updated</p>
          </div>
        </ReusableForm> */}
    </>
  )
}

export default App
