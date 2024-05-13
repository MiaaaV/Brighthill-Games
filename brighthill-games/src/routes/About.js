import Footer from "../components/Footer";
import Header from "../components/Header";
import Nav from "../components/Nav";
import "../components/styles/About.css";
import "../components/styles/Reusables.css";
import Helsinki from '../images/about/Helsinki_radius.png';
import John from '../images/about/John.jpg'
import William from '../images/about/William.jpg'
import Jenny from '../images/about/Jenny.jpg'
import Daniel from '../images/about/Daniel.jpg'

function About() {

  const values = [
    { bgColor: "blue" },
    { bgColor: "blue2" },
    { bgColor: "blue2" },
    { bgColor: "blue" }
  ];

  const teamMembers = [
    { name: "John", image: John, role: "Creative director" },
    { name: "William", image: William, role: "Lead UX Designer" },
    { name: "Jenny", image: Jenny, role: "Chief marketing officer" },
    { name: "Daniel", image: Daniel, role: "Lead programmer" }
  ];

  return (
    <>
      <Nav />
      <Header />

      <div className="about-container">
        <div className="flex-row flex-center col-12">
          <div className="flex-col col-4 about-hero-content">
            <h2 className="uppercase black">Our story</h2>
            <p className="black">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea  commodo consequat.</p>
            <p className="black">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea  commodo consequat. Duis aute irure dolor in reprehenderit in voluptate  velit esse cillum dolore eu fugiat nulla pariatur.</p>
          </div>

          <img className="col-3" src={Helsinki} alt="Helsinki aerial view" />
        </div>
      </div>

      <div className="values-container">
        <div className="flex-col flex-align flex-center col-12">
          <h2 className="heading-2">What we stand for</h2>

          <div className="values-grid grid-2-1 col-7">
            {values.map((value, index) => (
              <div className="flex-col" key={index}>
                <div id={value.bgColor} className="splash" />
                <div className="helper-index flex-col flex-center">
                  <h2 className="uppercase white">Lorem ipsum</h2>
                  <p className="white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ultrices, purus id vestibulum gravida.</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      <div className="team-container">
        <div className="flex-col flex-align flex-center col-12">
          <h2 className="heading-2 uppercase black">Meet our bright team</h2>

          <div className="team-map grid-4-1 col-8">
            {teamMembers.map((member, index) => (
              <div className="w100 flex-col" key={index}>
                <div className="team-img-container flex-col flex-align">
                  <img className="team-img" src={member.image} alt={member.name} />
                  <h2 className="uppercase black text-align">{member.name}</h2>
                </div>
                <h3 className="black uppercase text-align">{member.role}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="recruit-container flex-row flex-center">
        <div className="recruit-info flex-col flex-center col-8">
          <h2 className="heading-1">Being a part of us</h2>

          <div className="flex-row flex-between col-12">
            <p className="font-2 col-7">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ultrices, purus id vestibulum gravida, lacus sem hendrerit justo, et lobortis risus quam nec elit. Ut sed mi vehicula, eleifend metus et, ultrices tortor.</p>
            <button id="btn">work with us</button>
          </div>
        </div>

      </div>

      <Footer />
    </>
  )
}

export default About;