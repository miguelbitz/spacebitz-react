
import { 
    LoginDiv, 
    LoginScreen } from "./LoginStyle";

export default function Login() {
    return (
        <LoginDiv>
            <h1>Login</h1>
            <h5>(Em Desenvolvimento)</h5>
            <LoginScreen>
                <label>Login:</label>
                <input></input>

                <label>Senha:</label>
                <input></input>
                
                <button>Enviar</button>
            </LoginScreen>
        </LoginDiv>
    )
}