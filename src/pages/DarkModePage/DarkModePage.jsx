
import React from 'react'
import useDark from '../../shared/hooks/useDark';

import s from "./dark.module.css";


function DarkMode({ dataTheme, children }) {

    const { theme, switchTheme } = useDark({ dataTheme })

    return (
        <div className={s.app} dataTheme={theme}>

            <div className={s.login}>
                <h1> Login</h1>
                <div className={s.container}>

                    <form className={s.darkForm}>
                        <label>E-mail</label>
                        <input className={s.input} type='email' placeholder='Enter your email' />
                        <label>Password</label>
                        <input className={s.input } type='password' placeholder='Enter your password' />
                        <div className='remember'>
                            <input className={s.input} type='checkbox' checked='checked' />
                            <p>Remember Me</p>
                        </div>
                        <button>Log In</button>
                    </form>
                    <div className='bottom'>
                        <p>Forget your password?</p>
                        <a href='/'>Reset Password</a>
                    </div>
                    <p className='create'>Create Account</p>
                </div>
                <div className={s.themeToggle}>
                    <h2>Light Theme</h2>
                    <label className={s.switch}>
                        {/* <label> {theme === "light" ? "Light Mode" : "Dark Mode"}</label> */}
                        <input className={s.input } onClick={switchTheme} type="checkbox" defaultChecked />
                        <span className={`${s.slider} ${s.round}`}></span>
                    </label>
                </div>
            </div>

        </div>
    );
}

export default DarkMode;


