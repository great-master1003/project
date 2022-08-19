export default Layout

function Layout({children}) {
    return(
        <>
            <div className="row">
                <div className="col-md-6 text-center text-white d-flex justify-content-center align-items-center flex-column" style={{background: "url('/bg.png')", backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: '100vh', padding: '3rem'}}>
                    <h4>Nice to see you again</h4>
                    <h2 className="text-uppercase" style={{fontSize: '4rem', letterSpacing: '.2em'}}>Welcome Back</h2>
                    <span className="divider"></span>
                    <p style={{fontSize: '.8rem', maxWidth: '500px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fermentum quam ac condimentum efficitur. In vel neque et tellus porta vehicula. Curabitur porta est in elementum consequat.</p>
                </div>
                <div className="col-md-6 d-flex flex-column justify-content-center align-items-center">
                    {children}
                </div>
            </div>
        </>
    )
}