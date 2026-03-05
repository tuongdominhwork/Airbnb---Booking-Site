import './LoginForm.css'

const LoginForm = () => {
  return (
    <form className="login-field">
        <h1 id="login-title">Login</h1>
            <div id="login-input-container">
                <input type="text" name="email" id="login-input" placeholder="  your@email.com"/>
                <input type="password" name="password" id="login-input" placeholder="  password"/>
            </div>
            <button id="login-btn-2">Login</button>
        <h4 id="login-text-1">Don't have an account yet? <a href='/register' id="register-text-1">Resgister now</a></h4>
    </form>
  )
}

export default LoginForm