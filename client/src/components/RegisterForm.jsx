import React from 'react'
import './RegisterForm.css'

const RegisterForm = () => {
  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [error, setError] = React.useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    const res = await fetch('http://localhost:3001/api/auth/register', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({name, email, password})
    })

    const data = await res.json()

    if (!res.ok) {
      setError(data.error)
      return
    }

    window.location.href = '/login'
  }

  return (
    <form className="register-field" onSubmit={handleSubmit} >
            <h1 id="register-title">Register</h1>
            <div id="register-input-container">
                <input type="text" name="name" id="register-input" placeholder="  Steve Jobs" onChange={(e) => setName(e.target.value)}/>
                <input type="email" name="email" id="register-input" placeholder="  your@email.com" onChange={(e) => setEmail(e.target.value)}/>
                <input type="password" name="password" id="register-input" placeholder="  password" onChange={(e) => setPassword(e.target.value)}/>
            </div>

            <button id="register-btn-2">Register</button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <h4 id="register-text-2">Already a member? <a href="/login" id="login-text-2">Login now</a></h4>
    </form>
  )
}

export default RegisterForm