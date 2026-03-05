import './RegisterForm.css'

const RegisterForm = () => {

  return (
    <form className="register-field">
            <h1 id="register-title">Register</h1>
            <div id="register-input-container">
                <input type="text" name="name" id="register-input" placeholder="  Steve Jobs"/>
                <input type="email" name="email" id="register-input" placeholder="  your@email.com"/>
                <input type="password" name="password" id="register-input" placeholder="  password"/>
            </div>

            <button id="register-btn-2">Register</button>
            <h4 id="register-text-2">Already a member? <a href="/login" id="login-text-2">Login now</a></h4>
    </form>
  )
}

export default RegisterForm