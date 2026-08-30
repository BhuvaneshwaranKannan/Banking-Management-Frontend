import Navbar from './Navbar'
import Sidebar from './Sidebar'

import x1 from './assets/bg.jpg'
import x2 from './assets/bg2.jpg'

function Home() {
  return (
    <>
      <div>
        <Navbar usage="home" />

      </div>

      <div>
        <Sidebar />
      </div>

      <div className="dashboard">

        <div id="carouselExampleAutoplaying" className="dashboard-carousel carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={x1} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={x2} className="d-block w-100" alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>


        
        <div className="home-container">
          <div className="home-container-header">
            Quick Actions
          </div>
          <button className="icon-container" type="button">
            <i className="main-icon bi bi-wallet2"></i>
            <span>Accounts</span>
          </button>
          <button className="icon-container" type="button">
            <i className="main-icon bi bi-send"></i>
            <span>Transfer</span>
          </button>
          <button className="icon-container" type="button">
            <i className="main-icon bi bi-cash-coin"></i>
            <span>Deposit</span>
          </button>
          <button className="icon-container" type="button">
            <i className="main-icon bi bi-cash-stack"></i>
            <span>Withdraw</span>
          </button>
          <button className="icon-container" type="button">
            <i className="main-icon bi bi-receipt"></i>
            <span>Transactions</span>
          </button>
          <button className="icon-container" type="button">
            <i className="main-icon bi bi-graph-up-arrow"></i>
            <span>Insights</span>
          </button>
          <button className="icon-container" type="button">
            <i className="main-icon bi bi-headset"></i>
            <span>Support</span>
          </button>
        </div>


        </div>
      </>
      )
}

      export default Home
