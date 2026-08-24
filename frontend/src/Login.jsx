import Navbar from './Navbar.jsx'

import googleplay from './assets/google-play.png'
import applestore from './assets/apple-store.jpg'

import { useNavigate } from 'react-router-dom'


function Login() {

  const navigate = useNavigate();

  return (
    <>

      <div>

        <Navbar />

        <div className='login-bg'>
          <form className="form">
            <div className="text-center mb-3">
              <h4 className="fw-bold form-title">Welcome to Spade Ace Bank</h4>
              <p className="form-subtitle mb-0">Securely log in to your account</p>
            </div>

            <div className="mb-3">
              <label htmlFor="userId" className="form-label fw-semibold form-label-custom">User ID</label>
              <input type="text" className="form-control custom-input" id="userId" placeholder="Enter your User ID" required />
              <div className="text-end mt-1">
                <a href="#" className="form-link">Unlock User ID?</a>
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label fw-semibold form-label-custom">Password</label>
              <input type="password" className="form-control custom-input" id="password" placeholder="••••••••" required />
              <div className="text-end mt-1">
                <a href="#" className="form-link">Forgot password?</a>
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="captcha" className="form-label fw-semibold form-label-custom">Enter Captcha</label>
              <div className="d-flex gap-2 align-items-center">
                <input type="text" className="form-control custom-input" id="captcha" placeholder="Code" required />
                <div className="captcha-box">
                  6X9B
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="btn w-100 mb-2 fw-bold custom-btn-primary"
              onClick={()=> navigate('/')}
            > Log In
            </button>
            <button
              type="button"
              className="btn w-100 fw-bold custom-btn-secondary"
              onClick={()=> navigate('/register')}
            > Register Now
            </button>
          </form>

        </div>

        <div className='login-span'>
          <div className="box1">
            <div className="box-text">
              <h2 className='box-text-heading'>
                Customer Awareness
              </h2>
              Dear Customer,<br />

              As per RBI directives on Positive Payment System (PPS), it is required to pre-register in PPS all cheques for Rs.5 lacs and above, prior to issuing the cheque to the beneficiary. Effective 1 Jul 2021, all cheques valued Rs 1 crore and above that are not pre-registered in PPS will be returned unpaid. Contact branch / use net banking / mobile banking for registering the details.
              <br /><br />
              With regards,<br />
              Spade Ace Bank
            </div>

          </div>

          <div className="box2">
            <div className="box-text">
              <h2 className='box-text-heading'>
                Important security information
              </h2>
              <ol class="list-group list-group-numbered">
                <li class="list-group-item">Please do not disclose your NetBanking Login ID and Password to anyone to ensure the security of your account(s).</li>
                <li class="list-group-item">Such emails may lead you to a fake website that looks very similar to the Bank's genuine website, or request you for an update of banking information.</li>
                <li class="list-group-item">Our bank does not issue these emails and you are advised to ignore them and not to respond to any requests for personal information.</li>
              </ol>
            </div>
          </div>
        </div>

        <div className='login-span2 d-flex flex-row justify-content-between gap-5'>

          <div className="footer-text my-4 mx-5">
            <div className='f-text my-1 d-flex flex-row gap-5'>
                <div>
                  Online Security Measures
                </div>
                <div>
                  Trouble logging
                </div>
                <div>
                  www.spadeace.bank.in
                </div>
            </div>
            <div className='f-text my-1'>
                © 2026 Spade Ace Bank Ltd. All Rights Reserved.
            </div>
            <div className='f-text my-1'>
                Best viewed with Microsoft Edge, Google Chrome, Mozilla Firefox, Safari, Opera with a resolution of 1024*768
            </div>
          </div>

          <div className="footer-text2 my-4 mx-5">
            <div className='f-text mx-2'>
              Enjoy banking with our next generation mobile apps
            </div>
            <div className="footer-store d-flex flex-row mx-4 my-3 gap-2">
                <div className='google-play'>
                  <img src={googleplay} alt="" />
                </div>
                <div className='apple-store'>
                  <img src={applestore} alt="" />
                </div>
            </div>
          </div>

        </div>

      </div>

    </>
  )
}

export default Login
