// import logo from './logo.svg';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './home.css'
import profileImage from './images/PORTFOLIO_O2Q1rk0.png';
import devimage from './images/view-3d-man-using-laptop.jpg'; // Import your profile image



function Navbar() {
  return (
    <nav className="navbar fadeInLeft animatedSection sticky-top navbar-expand-lg navbar-light bg-light">
        <div className="container">
            <a className="navbar-brand" href="#"> Atish Kumar</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav  mb-2 mb-lg-0 navbar-nav  mb-2 mb-lg-0 w-100 justify-content-end">
                    <li className="nav-item mx-5 text-3xl">
                        <a className="nav-link" href="#main_section_about">About</a>
                    </li>
                    <li className="nav-item mx-5 text-3xl">
                        <a className="nav-link" href="#main_section_experience">Skills</a>
                    </li>
                    <li className="nav-item mx-5 text-3xl">
                        <a className="nav-link" href="#main_section_services">Services</a>
                    </li>
                    <li className="nav-item mx-5 text-3xl">
                        <a className="nav-link" href="#main_section_connect">Connect</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  );
}

function MainSection() {
  return (
    <section className="main_section fadeInLeft">
    <div className="sub_main_section container">
      <div className="sub_section_image">
        <img className="" src={profileImage} alt="Atish kumar" />
        <div className="intro">
          <div className="textual_content">
            <p>Hello I'm</p>
            <h1>Atish Kumar</h1>
            <h6>Full Stack Developer</h6>
          </div>
          <div className="clickables">
            <button className="btn btn-outline-secondary mx-2">Download CV </button>
            <button className="btn btn-secondary mx-2">About Me </button>
          </div>
          <div className="social_links">
            <i className='bx bxl-linkedin-square'></i>
            <i className='bx bxl-instagram'></i>
            <i className='bx bxl-github'></i>
          </div>
        </div>
      </div>
    </div>
  </section>

  );
}


function AboutSection() {
  return (
    <section className="main_section_about " id="main_section_about">
      <div className="container main_header">
        <h1>About Me</h1>
      </div>
      <div className="container sub_main_section fadeInLeft">
        <img className="" src={devimage} alt="Atish kumar" />
        <div className="about_textual_content">
          <div className="cards_section">
            <div className="card" data-bs-toggle="modal" data-bs-target="#exampleModal">
              <h3><i className='bx bx-award'></i> Experience </h3>
              <h5>3+ years</h5>
              <h5>Full Stack Developer</h5>
            </div>
            <div className="card" data-bs-toggle="modal" data-bs-target="#exampleModal2">
              <h3><i className='bx bxs-graduation'></i> Education</h3>
              <h5>Bsc. Computer Science</h5>
              <h5>MBA(IT Management)</h5>
            </div>
          </div>
          <p>
            Results-driven and detail-oriented Python Developer with extensive expertise in web
            development using the Django framework. Proven track record of delivering high-quality,
            scalable, and secure applications within collaborative team environments. Adept at
            designing and implementing robust backend systems, integrating front-end components,
            and ensuring optimal performance. Strong problem-solving skills and a commitment to
            delivering clean, maintainable code. Experienced in various aspects of the software
            development lifecycle, from concept to deployment
          </p>
        </div>
      </div>
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-fullscreen">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">PROFESSIONAL EXPERIENCE (3+ YEARS)</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <p>
                Tata Institute of Social Sciences Deonar, Mumbai. Sep 2022 - Present<br />
                Software Developer<br />
                Roles and Responsibility<br />
                <ul>
                  <li>
                    Modified existing software systems to enhance performance and add new features.
                  </li>
                  {/* Add more list items as needed */}
                </ul>
                {/* Add more text and list items as needed */}
              </p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
      {/* Add more modal dialogs as needed */}
    </section>
  );
}


function SkillsSection() {
  return (
    <section className="main_section_experience fadeInLeft" id="main_section_experience">
      <div className="container main_header">
        <h1>Skills</h1>
      </div>
      <div className="skills container">
        <div className="progress">
          <div className="progress-bar progress-bar-animated progress-bar-striped bg-dark" role="progressbar" style={{ width: '90%' }} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
            <i className='bx bxl-python'></i>
          </div>
        </div>
        <div className="progress">
          <div className="progress-bar progress-bar-striped progress-bar-animated bg-dark" role="progressbar" style={{ width: '75%' }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
            <i className='bx bxl-css3'></i>
          </div>
        </div>
        <div className="progress">
          <div className="progress-bar progress-bar-striped progress-bar-animated bg-dark" role="progressbar" style={{ width: '50%' }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
            <i className='bx bxl-javascript'></i>
          </div>
        </div>
        <div className="progress">
          <div className="progress-bar progress-bar-striped progress-bar-animated bg-dark" role="progressbar" style={{ width: '100%' }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
            <i className='bx bxl-html5'></i>
          </div>
        </div>
        <div className="progress">
          <div className="progress-bar progress-bar-striped progress-bar-animated bg-dark" role="progressbar" style={{ width: '40%' }} aria-valuenow="40" aria-valuemin="0" aria-valuemax="100">
            <i className='bx bxl-docker'></i>
          </div>
        </div>
        <div className="progress">
          <div className="progress-bar progress-bar-striped progress-bar-animated bg-dark" role="progressbar" style={{ width: '60%' }} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
            <i className='bx bxl-postgresql'></i>
          </div>
        </div>
        <div className="progress">
          <div className="progress-bar progress-bar-striped progress-bar-animated bg-dark text-light" role="progressbar" style={{ width: '50%' }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="50">
            <i className='bx bxl-aws'></i>
          </div>
        </div>
        <div className="progress">
          <div className="progress-bar progress-bar-striped progress-bar-animated bg-dark text-light" role="progressbar" style={{ width: '70%' }} aria-valuenow="70" aria-valuemin="0" aria-valuemax="70">
            <i className='bx bxl-react'></i>
          </div>
        </div>
        <div className="progress">
          <div className="progress-bar progress-bar-striped progress-bar-animated bg-dark text-light" role="progressbar" style={{ width: '30%' }} aria-valuenow="30" aria-valuemin="0" aria-valuemax="30">
            <i className='bx bxl-nodejs'></i>
          </div>
        </div>
        <div className="progress">
          <div className="progress-bar progress-bar-striped progress-bar-animated bg-dark text-light" role="progressbar" style={{ width: '90%' }} aria-valuenow="90" aria-valuemin="0" aria-valuemax="90">
            <i className='bx bxl-django'></i>
          </div>
        </div>
        <div className="progress">
          <div className="progress-bar progress-bar-striped progress-bar-animated bg-dark text-light" role="progressbar" style={{ width: '40%' }} aria-valuenow="40" aria-valuemin="0" aria-valuemax="40">
            <i className='bx bxl-tailwind-css'></i>
          </div>
        </div>
        
        {/* Add more progress bars as needed */}
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section className="main_section_services fadeInLeft" id="main_section_services">
      <div className="container main_header">
        <h1>Services</h1>
      </div>

      <div className="container service_textual_content_grid">
        <div className="block card cards_section">
          Management Website Development
        </div>
        <div className="block card cards_section">
          Landing Page
        </div>
        <div className="block card cards_section">
          Ecommerce Development
        </div>
        <div className="block card cards_section">
          API Development
        </div>
        <div className="block card cards_section">
          Chat Application
        </div>
        <div className="block card cards_section">
          Blog Application
        </div>
        <div className="block card cards_section">
          Website Maintenance
        </div>
        <div className="block card cards_section">
          API Development
        </div>
      </div>
    </section>
  );
}

function ConnectSection() {
  return (
    <section className="main_section_connect mt-5 fadeInLeft" id="main_section_connect">
      <div className="container main_header">
        <h1>Connect</h1>
      </div>
      <div className="container">
        <div className="form-connect">

          <div className="card p-5">
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">Your Name</label>
              <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Your Full Name" />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput2" className="form-label">Email address</label>
              <input type="email" className="form-control" id="exampleFormControlInput2" placeholder="name@example.com" />
            </div>
            <div className="mb-3">
              <label htmlFor="inputState" className="form-label">Project</label>
              <select id="inputState" className="form-select">
                <option selected>Choose Project</option>
                <option>Management Website Development</option>
                <option>Landing Page</option>
                <option>Ecommerce Development</option>
                <option>API Development</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
              <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <div className="d-flex justify-content-center">
              <button className="btn btn-outline-secondary" type="button">Submit</button>
            </div>
          </div>

          <div className="img-section-form">
            <img src="./images/undraw_fill_form_re_cwyf.png" alt="" className="undraw" />
          </div>
        </div>
      </div>
    </section>
  );
}

// Define other sections and components similarly

function App() {
  return (
    <div>
      <Navbar />
      <MainSection />
      <AboutSection/>
      <SkillsSection/>
      <ServicesSection/>
      <ConnectSection/>
      {/* Render other sections/components */}
    </div>
  );
}

// function App() {
//   return (
//     <div className="App">
//        <Navbar expand="lg" className="bg-dark "  >
//       <Container>
//         <Navbar.Brand href="#home" style={{ color: 'white ' }} >React-Bootstrap</Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav ">
//           <Nav className="me-auto ">
//             <Nav.Link href="#home" style={{ color: 'white ' }} >Home</Nav.Link>
//             <Nav.Link href="#link" style={{ color: 'white ' }} >Link</Nav.Link>
//             <NavDropdown title="Dropdown"  className= "text-light" id="basic-nav-dropdown" >
//               <NavDropdown.Item href="#action/3.1" >Action</NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.2">
//                 Another action
//               </NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//               <NavDropdown.Divider />
//               <NavDropdown.Item href="#action/3.4">
//                 Separated link
//               </NavDropdown.Item>
//             </NavDropdown>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//     <div className='container mt-4'>

//     </div>
//       {/* </header> */}
//     </div>
//   );
// }

export default App;
