import banklogo from './assets/bank-logo.png'

function Navbar() {
    return (
        <>

            <div className="login-nav">
                <div className="login-logo">
                    <img src={banklogo} alt="logo" />
                </div>

                <div className="login-dd">
                    <div class="dropdown">
                        <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Language
                        </button>
                        <ul class="dropdown-menu">
                            <li><button class="dropdown-item" type="button">English</button></li>
                            <li><button class="dropdown-item" type="button">Hindi</button></li>
                        </ul>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Navbar
