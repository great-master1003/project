import Layout from '../components/layout';

export default Login;

function Login() {
    return (
        <Layout>
            <form style={{maxWidth: '800px', padding: '10px'}}>
            <h1 className="h3 mb-3 fw-normal text-center" style={{color: "blue"}}>Login Account</h1>
            <p className="text-center mb-5" style={{fontSize: '.8rem', maxWidth: '500px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fermentum quam ac condimentum efficitur. In vel neque et tellus porta vehicula. Curabitur porta est in elementum consequat.</p>

            <div className="form-input mb-4">
                <input type="email" className="form-control" id="floatingInput" placeholder="Email address" />
            </div>
            <div className="form-input mb-5">
                <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
            </div>

            <button className="w-100 btn btn-lg btn-primary" style={{borderRadius: '50px'}} type="submit">Subscribe</button>
            </form>
        </Layout>
    )
}