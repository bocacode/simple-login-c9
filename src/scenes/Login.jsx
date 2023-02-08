import { initializeApp } from 'firebase/app'
import { getAuth, signInWithEmailAndPassword,
  GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { Form, Button, Input } from 'antd'

const firebaseConfig = {
  apiKey: "AIzaSyC-L9KsAN0OHyfgxGeqV_F6C9N9ItmA4Kk",
  authDomain: "simple-login-c9.firebaseapp.com",
  projectId: "simple-login-c9",
  storageBucket: "simple-login-c9.appspot.com",
  messagingSenderId: "872595531412",
  appId: "1:872595531412:web:d24843e25842834aa6f681"
}

export default function Login({ setUser, setIsUser }) {
  const loginWithGoogle = async () => {
    const app = initializeApp(firebaseConfig)
    const auth = getAuth(app)
    const provider = new GoogleAuthProvider()
    const _user = await signInWithPopup(auth, provider)
      .catch(alert)
    console.log(_user)
    setUser(_user.user)
  }
  const handleSubmit = async ({ email, password }) => {
    const app = initializeApp(firebaseConfig)
    const auth = getAuth(app)
    const _user = await signInWithEmailAndPassword(auth, email, password)
      .catch(alert)
    console.log(_user)
    setUser(_user.user)
  }
  return (
    <section>
      <h1>Login</h1>
      <Form onFinish={handleSubmit} labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
        <Form.Item label="Email" name="email">
          <Input type='email' />
        </Form.Item>
        <Form.Item label="Password" name="password">
          <Input.Password />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType='submit'>Login</Button>
        </Form.Item>
      </Form>
      <Button onClick={loginWithGoogle}>Login with Google</Button>
      <p>Not a user? <Button onClick={() => setIsUser(false)}>
        Sign Up</Button></p>
    </section>
  )
}