import React, { useState } from 'react';
import emailImg from '../assets/x.svg';
import googleImg from '../assets/google.svg';

const Form = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isChecked, setIsChecked] = useState(false);
    const [passwordShow, setPasswordShow] = useState(false);
    const changePasswordShow = () => {
        setPasswordShow((password) => !password);
    }

    return (
        <form className="auth-forma">
            <div className="auth-forma__container">
                <div className="auth-forma__info">
                    <h1 className="auth-forma__title">NFT Access</h1>
                    <p className="auth-forma__desc">
                        Please fill your detail to access your account.
                    </p>
                </div>
                <div className="auth-forma__email">
                    <label for="inputEmail" className="auth-forma__email-label">Email</label>
                    <div className="input">
                        <input type="text" id="inputEmail" name="inputFieldEmail" className="auth-forma__email-input"
                            value={email} onChange={(e) => setEmail(e.target.value)}
                            placeholder="debra.holt@example.com" required />
                        <img src={emailImg} alt="X" className={`auth-forma__email-btn input__btn ${email ? 'active' : ''}`} onClick={() => setEmail('')} />
                    </div>
                </div>
                <div className="auth-forma__psw">
                    <label for="inputPsw" className="auth-forma__psw-label">Password</label>
                    <div className="input">
                        <input type={passwordShow ? 'text' : 'password'} id="inputPsw" name="inputFieldPsw" className="auth-forma__psw-input"
                            placeholder="••••••••" required value={password} onChange={(e) => setPassword(e.target.value)} />
                        {/* <img src={passImg} alt="Hide" className={`auth-forma__psw-btn input__btn ${passwordShow ? (password ? 'active' : '') : ''}`} onClick={changePasswordShow} /> */}

                        <div className={`auth-forma__psw-btn input__btn ${passwordShow ? 'passwordshow' : ''}`} onClick={changePasswordShow}>
                            <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.7606 11.3668C7.1856 10.7928 6.8356 10.0128 6.8356 9.1378C6.8356 7.3848 8.2476 5.9718 9.9996 5.9718C10.8666 5.9718 11.6646 6.3228 12.2296 6.8968" stroke="#667085" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M13.1048 9.6989C12.8728 10.9889 11.8568 12.0069 10.5678 12.2409" stroke="#667085" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M4.6546 14.4723C3.0676 13.2263 1.7236 11.4063 0.749603 9.1373C1.7336 6.8583 3.0866 5.0283 4.6836 3.7723C6.2706 2.5163 8.1016 1.8343 9.9996 1.8343C11.9086 1.8343 13.7386 2.5263 15.3356 3.7913" stroke="#667085" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M17.4476 5.9908C18.1356 6.9048 18.7406 7.9598 19.2496 9.1368C17.2826 13.6938 13.8066 16.4388 9.99961 16.4388C9.13661 16.4388 8.28561 16.2988 7.46761 16.0258" stroke="#667085" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M17.887 1.2496L2.11301 17.0236" stroke="#667085" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="auth-forma__password-actions">
                    <div className={`auth-forma__password-actions-remember ${isChecked ? 'active-style' : ''}`}>
                        <label>
                            {/* onst [isChecked, setIsChecked] = useState(false); */}
                            <input type="checkbox" checked={isChecked} onChange={(e) => setIsChecked(e.target.checked)}
                                className="checkRemember" />Remember me
                        </label>
                    </div>
                    <div className="auth-forma__password-actions-forgot">
                        <a href="/">Forgot Password?</a>

                    </div>
                </div>
                <button type="submit" className="auth-forma__btn-primary btn">Sign in</button>
                <a href='/' className="auth-forma__btn-with-google btn">
                    <img src={googleImg} alt="Google" />Sign in with Google
                </a>
                <p className="auth-forma__add-akk">Don’t have an account?
                    <a href="/"> Sign up</a>
                </p>
            </div>
        </form>
    )
}

export default Form