import React, { useState } from 'react'
import Styles from './login-styles.scss'
import { FormStatus, Input, LoginHeader, Footer } from '@/presentation/components'
import Context, { FormContext } from '@/presentation/contexts/form/form-context'

const Login: React.FC = () => {
    const [state] = useState<FormContext>({
        isLoading: false,
        errorMessage: ''
    })
    return (
        <div className={Styles.login}>
            <LoginHeader />
            <Context.Provider value={state}>
                <form className={Styles.form}>
                    <h2>Login</h2>
                    <Input type="email" name="email" placeholder="Digite seu email" />
                    <Input type="password" name="password" placeholder="Digite sua senha" />
                    <button className={Styles.submit} type="submit">Entrar</button>
                    <span className={Styles.link}>Criar conta</span>
                    <FormStatus />
                </form>
            </Context.Provider>
            <Footer />
        </div>
    )
}

export default Login
