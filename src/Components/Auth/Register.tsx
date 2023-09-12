import { FC, FormEventHandler, useState } from 'react'
import Input from '../UI-Component/Input';
import Button from '../UI-Component/Button';
import Axios from '../../API/Axios';
import { withUser } from '../Hoc/withUser';
import { User } from '../../Types/User';
import { Navigate } from 'react-router-dom';

type P = {
    user: User,
    setUser: (u: User) => void
}

const Register: FC<P> = ({ user, setUser }) => {


    const [formValues, setFormValues] = useState({ email: "", password: "" });
    const [formType, setFormType] = useState("Register");

    function handleSubmit(e: any) {
        const token = localStorage.getItem("token") || ""
        e.preventDefault();
        if (formType === "Register") {
            Axios.post('/Signup', { email: formValues.email, password: formValues.password }).then((res) => {
                localStorage.setItem("token", res.data.data.idToken)
                setUser(res.data);
            })
        } else {

            Axios.post('/Signin', { email: formValues.email, password: formValues.password }, { headers: { Authorization: "Bearer " + token } }).then((res) => {
                localStorage.setItem("token", res.data.data.idToken)
                setUser(res.data);
            })
        }
    }

    if (user) {
        return <Navigate to={"/"} />
    }

    return <div className=' w-full h-screen flex justify-center bg-gray-50 items-center '>

        <form action="" className='flex flex-col space-y-2 ' onSubmit={handleSubmit}>
            <p className='text-center font-bold text-blue-600 '> {formType === "Register" ? "REGISTER USER" : "SIGNIN USER"}</p>
            <Input onChange={(e) => setFormValues({ ...formValues, email: e.target.value })} value={formValues.email} placeholder='Enter your email' type='email' />
            <Input onChange={(e) => setFormValues({ ...formValues, password: e.target.value })} value={formValues.password} placeholder='Enter password' type='password' />
            <Button children={formType === "Register" ? "Register" : "Signin"} />

            <div className='text-sm pt-3 text-center underline ' onClick={() => setFormType(formType === "Register" ? "Signin" : "Register")} >
                {formType === "Register" ? <p className='cursor-pointer'>Already have an account?</p> : <p className='cursor-pointer'> Create a new account?</p>}
            </div>
        </form>

    </div>
}
export default withUser(Register);