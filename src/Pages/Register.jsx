import { useContext } from 'react'
import Context from '../Context/context';
import SignUp from './SignUp';
import Login from './Login';
import ForgetPassword from '../Components/ForgetPassword';

export default function Register() {
  const context = useContext(Context);
    

  return (
    <>
    {context.showPassword ? <ForgetPassword/> : (context.showForm ? <SignUp/>:<Login/>) }
    {}
    </>
  )
}
