
import { GoogleLogin, CredentialResponse } from '@react-oauth/google'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

interface GoogleLoginButtonProps {
  onLoginSuccess?: (userData: any) => void
}

export const GoogleLoginButton: React.FC<GoogleLoginButtonProps> = ({ onLoginSuccess }) => {
  const navigate = useNavigate();
  const handleGoogleSuccess = async (credentialResponse: CredentialResponse) => {
    try {
      if (!credentialResponse.credential) {
        console.error('No se recibió credencial de Google')
        return
      }

      const token = credentialResponse.credential
      
      const response = await axios.post('http://localhost:8080/auth/google', { token })

      console.log('Login con Google exitoso:', response.data)

      if (onLoginSuccess) {
        onLoginSuccess(response.data)
      }

      localStorage.setItem('jwt', response.data.jwt);


      navigate('/home')

    } catch (error) {
      console.error('Error autenticando con Google:', error)
    }
  }

  const handleGoogleFailure = () => {
    console.error('Falló el inicio de sesión con Google')
  }

  return (
    <div style={{ marginTop: '15px' }}>
      <GoogleLogin
        onSuccess={handleGoogleSuccess}
        onError={handleGoogleFailure}
        useOneTap
      />
    </div>
  )
}
