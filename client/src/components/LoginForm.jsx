import React from 'react'
import './LoginForm.css'
import API_URL from '../api'

const LoginForm = () => {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [error, setError] = React.useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    const res = await fetch(`${API_URL}/api/auth/login`, {
      method: 'POST',
      headers: {'Content-Type' : 'application/json'},
      body: JSON.stringify({ email, password })
    })

    const data = await res.json()

    if (!res.ok) {
      setError(data.error)
      return
    }

    localStorage.setItem('token', data.token)
    localStorage.setItem('name', data.name)
    localStorage.setItem('email', data.email)
    localStorage.setItem('userId', data.id)

    window.location.href = '/'
  }

  return (
    <form className="login-field" onSubmit={handleSubmit}>
        <h1 id="login-title">Login</h1>
            <div id="login-input-container">
                <input type="text" name="email" id="login-input" placeholder="  your@email.com" onChange={(e) => setEmail(e.target.value)}/>
                <input type="password" name="password" id="login-input" placeholder="  password" onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <button id="login-btn-2">Login</button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
        <h4 id="login-text-1">Don't have an account yet? <a href='/register' id="register-text-1">Resgister now</a></h4>
    </form>
  )
}

export default LoginForm
