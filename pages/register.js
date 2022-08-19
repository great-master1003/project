import Layout from '../components/layout';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { userService } from '../utils/user.service';

export default Register;

function Register() {
    const router = useRouter();

    // form validation rules 
    const validationSchema = Yup.object().shape({
        firstName: Yup.string()
            .required('First Name is required'),
        lastName: Yup.string()
            .required('Last Name is required'),
        username: Yup.string()
            .required('Username is required'),
        password: Yup.string()
            .required('Password is required')
            .min(6, 'Password must be at least 6 characters'),
        confirmpassword: Yup.string()
        .required('You must confirm your password.'),
    });
    const formOptions = { resolver: yupResolver(validationSchema) };

    // get functions to build form with useForm() hook
    const { register, handleSubmit, formState, setFocus } = useForm(formOptions);
    const { errors } = formState;

    function onSubmit({firstName, lastName, username, password, confirmpassword}) {
        if(password !== confirmpassword) {
            setFocus('confirmpassword');
        }

        const user = {
            first_name: firstName,
            last_name: lastName,
            username: username,
            password: password
        }

        return userService.register(user)
            .then(() => {
                router.push('login');
            })
            .catch(function(e) {
                console.log(e);
            });
    }

    return (
        <Layout>
            <form style={{maxWidth: '800px', padding: '10px'}} onSubmit={handleSubmit(onSubmit)}>
                <h1 className="h3 mb-3 fw-normal text-center" style={{color: "blue"}}>Register Account</h1>
                <p className="text-center mb-5" style={{fontSize: '.8rem', maxWidth: '500px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fermentum quam ac condimentum efficitur. In vel neque et tellus porta vehicula. Curabitur porta est in elementum consequat.</p>

                <div className="form-input mb-4">
                    <input {...register('firstName')} name="firstName" type="text" className={`form-control ${errors.firstName ? 'is-invalid' : ''}`} id="floatingInput" placeholder="First name" />
                </div>
                <div className="form-input mb-4">
                    <input {...register('lastName')} name="lastName" type="text" className={`form-control ${errors.lastName ? 'is-invalid' : ''}`} id="floatingInput" placeholder="Last name" />
                </div>
                <div className="form-input mb-4">
                    <input {...register('username')} name="username" type="email" className={`form-control ${errors.username ? 'is-invalid' : ''}`} id="floatingInput" placeholder="Email" />
                </div>
                <div className="form-input mb-4">
                    <input {...register('password')} name="password" type="password" className={`form-control ${errors.password ? 'is-invalid' : ''}`} id="floatingPassword" placeholder="Password" />
                </div>
                <div className="form-input mb-5">
                    <input {...register('confirmpassword')} name="confirmpassword" type="password" className={`form-control ${errors.confirmpassword ? 'is-invalid' : ''}`} id="floatingPassword" placeholder="Retype Password" />
                </div>

                <button className="w-100 btn btn-lg btn-primary" style={{borderRadius: '50px'}} type="submit">Register</button>
            </form>
        </Layout>
    )
}