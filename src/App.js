import "./App.css"

function App() {
  return (
    <div className="App">
      <div className="herosection px-10 py-5">
        <nav className="d-flex flex-row justify-content-between">
          <span className="brand-name">CODING HEROES..!!</span>
          <div className="d-flex flex-row">
            <span className="mx-4 nav-items">Home</span>
            <span className="mx-4 nav-items">About Me</span>
            <span className="mx-4 nav-items">Resumee</span>
            <span className="mx-4 nav-items">Testimonial</span>
            <span className="mx-4 nav-items">Contact me</span>
          </div>
        </nav>
        <div className="heterosection-2 row justify-content-center">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="d-flex flex-column justify-content-center Im-text-section">
              <span className="Im-text">
                Hello I'm <span className="name-Im-text"> Rosdell Denish!</span>
              </span>
              <span className="Im-text-enthusiatic py-2">
                Enthusiastic Dev 😎
              </span>
              <span className="Im-text-subheading">
                Knack of building applications with Front and BackEnd
                Operation..!!
              </span>
              <div className="d-flex flex-row justify-content-center mt-5">
                <button className="btn-hire-me">Hire me!</button>
                <button className="btn-resume-me">My-Resume!</button>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="d-flex justify-content-center custom-div-outer-img">
              <img
                className="img-fluid custom-img"
                alt="heroimgae"
                src="https://res.cloudinary.com/dbmn882qe/image/upload/v1658139213/3t_z9twok.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
