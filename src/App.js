import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="navbar">
        <img
          src={
            "https://i.pinimg.com/736x/da/c7/58/dac758d7606690d057a9cbba5f259154.jpg"
          }
        />
        <div className="nav-1">
          <p>Business Checking</p>
          <p>Solution</p>
          <p>Resources</p>
          <p>Results</p>
          <p>Contacts</p>
        </div>
        <div className="nav-2">
          <p>Log In</p>
          <button>Get Started</button>
        </div>
      </div>
      <div className="body">
        <div className="body-1">
          <p id="headline-1">ALL YOUR BUSINESS BANKING IN ONE PLATFORM</p>
          <p>
            Take your business to new heights with faster cash flows and clear
            financial insights all with a free Novo account.Apply in 10 minutes.
          </p>
          <button>Get Started</button>
          <p>
            Already Started?<span>Finish your application</span>
          </p>
        </div>
        <div className="body-2">
          <img
            src={
              "https://img.freepik.com/free-photo/stylish-summer-girl-with-credit-card-pointing-aside-showing-your-logo-right-side-copy-space-standing-against-blue-background_1258-70343.jpg"
            }
          />
        </div>
        <div className="body-3">
          <img
            src={
              "https://bsmedia.business-standard.com/_media/bs/img/article/2023-12/22/full/1703268124-7729.jpg"
            }
          />
          <div className="icc">
            <img
              id="arrow"
              src={
                "https://png.pngtree.com/png-vector/20190419/ourmid/pngtree-vector-right-arrow-icon-png-image_956430.jpg"
              }
            />
            <div className="icc-1">
              <h3>Instan card control</h3>
              <p>
                Monitor all your purches in app,place and freeeze or unfreeze
                your card in few taps.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="midBody">
        <div className="mid-1">
          <div className="mid-head">
            <h2>
              ONLINE BANKING THAT TAKES YOUR BUSINESS TO THE{" "}
              <span id="span">NEXT LEVEL</span>
            </h2>
            <p>
              Monitor all your purches in app,place and freeeze or unfreeze your
              card in few taps
            </p>
          </div>
          <div className="mid-img">
            <img
              src="https://www.shutterstock.com/image-photo/emotional-young-black-guy-casual-600nw-2114910470.jpg"
              alt="err"
            />
          </div>
        </div>
        <div className="mid-2">
          <h2>BENEFITS</h2>
          <div>
            <h3>Acess your card at any time</h3>
            <p>Every Nova checking account comes with a free physical debit card and virual debit card,so you always have access at your fingertips.</p>
          </div>
          <h3>Make your money work for you</h3>
          <h3>pay and get paid your way</h3>
        </div>
      </div>
    </div>
  );
}

export default App;
