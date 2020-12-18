import React from 'react'
import ReCAPTCHA from "react-google-recaptcha";

const Captcha = () => {
    return (
        <div>
            <ReCAPTCHA
                sitekey="6LdJKgsaAAAAAKmdeMli1AuSbEx6O66EayhqPo-6"
            />
            <p>msg done</p>
        </div>
    )
}

export default Captcha
