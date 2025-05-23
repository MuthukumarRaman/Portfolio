import React, { useRef, useState, useEffect } from 'react'
import {Toaster ,toast} from 'sonner';
import Projects from "./Projects.json"
import { Link } from 'react-router-dom'
import icon from "./assets/icon.png"
import AOS from "aos";
import "aos/dist/aos.css";
export const Home = () => {
    const [manuAction,setmenuAction]=useState(false);
    const addAction=()=>{
      manuAction?setmenuAction(false):setmenuAction(true);
    }
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
      });
    
      const [submitting, setSubmitting] = useState(false); // State to track form submission status
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: value,
        }));
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);
    
        try {
          // Example of handling form submission (replace with your own logic)
          console.log(formData);
    
          // Simulate asynchronous operation (e.g., API call to Formspree)
          const response = await fetch('https://formspree.io/f/xpwawpvg', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
    
          if (!response.ok) {
            throw new Error('Failed to submit form.');
          }
    
          // Optionally reset the form fields after successful submission
          setFormData({
            name: '',
            email: '',
            message: '',
          });
    
          // alert('Form submitted successfully!');
          const notifySuccess = () => {
            toast.success('Form submitted successfully!');
          };
          notifySuccess();
        } catch (error) {
          // console.error('Error submitting form:', error);
          // alert('Failed to submit form. Please try again later.');
          const notifyError = () => {
            toast.error('Failed to submit form. Please try again later.');
          };
          notifyError();
        } finally {
          setSubmitting(false);
        }
      };
  

  const homeRef = useRef(null);  
  const scrollTohome = () => {
    addAction();
    homeRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const aboutRef = useRef(null);  
  const scrollToAbout = () => {
    addAction();
    aboutRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const projectRef = useRef(null);  
  const scrollToproject = () => {
    addAction();
    projectRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  
  const contactRef = useRef(null);  
  const scrollTocontact = () => {
    addAction();
    contactRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  //this scroll used for inner contectand project
  const scrollToAbouts = () => {
    aboutRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollTohomes = () => {
    homeRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToprojects = () => {
    projectRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollTocontacts = () => {
    contactRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  useEffect(() => {
    AOS.init();
  }, []);
  const skills=['HTML','CSS','JavaScript','PHP','MySQL','RDBMS','React','Bootstrap','Git','GitHub','Responsive Design','APIs','Angular','Go','MongoDB']
  return (
    <>
    <nav>
        <div className="logo">
            <img src={icon} alt="" />
            <p>Umapathi</p>
        </div>
        <div className='innermenu'>
        <ul className='menu'>
            <li onClick={scrollTohomes}><Link to={"/"}>Home</Link></li>
            <li onClick={scrollToAbouts}>About</li>
            <li onClick={scrollToprojects}>Projects</li>
            <li onClick={scrollTocontacts}>Contects</li>
        </ul>
        <i class="fa-solid fa-bars" onClick={addAction}></i>
        </div>
    </nav>
    <ul className={`phone_menu ${manuAction?"active":"disable"}`}>
            <li onClick={scrollTohome} className="want"><Link to={"/"}>Home</Link></li>
            <li onClick={scrollToAbout}>About</li>
            <li onClick={scrollToproject}>Projects</li>
            <li onClick={scrollTocontact}>Contects</li>
    </ul>
    <Toaster richColors/>
    <div className="slidone" ref={homeRef}>
        <div className="socialmedias">
            <a href="https://www.linkedin.com/in/umapathi2004/" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
            <a href="https://github.com/Umapathi2004" target="_blank"><i class="fa-brands fa-github"></i></a>
            <a href="https://www.instagram.com/umapathi1014/?igsh=ZGUzMzM3NWJiOQ%3D%3D" target="_blank"><i class="fa-brands fa-instagram"></i></a>
            <a href="https://x.com/umapathi1014" target="_blank"><i class="fa-brands fa-twitter"></i></a>
            <a href="https://wa.me/917094350136" target="_blank"><i class="fa-brands fa-whatsapp"></i></a>
        </div>
        <div className="intro">
            <h1>Hey, I'm Umapathi</h1>
            <p>Skilled web developer with expertise in building responsive and user-friendly web applications, ensuring optimal results.</p>
            <button onClick={scrollToprojects}>Projects</button>
        </div>
    </div>
    <div className="slidtwo" ref={aboutRef}>
        <div className="heading">
            <h2>About me</h2>
            <div className="userdefined_line"></div>
        </div>
        <span>Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology</span>
        <div className="me-skill">
            <div className="known_me">
                <div className="heading">Get to know me!</div>
                <div className="content">
                <p>I'm a <b>Frontend Focused Web Developer</b> building and managing the Front-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the <b>Projects</b> section.</p>

                <p>I also like sharing content related to the stuff that I have learned over the years in <b>Web Development</b> so it can help other people of the Dev Community. Feel free to Connect or Follow me on my <a href="https://www.linkedin.com/in/umapathi2004/" target="_blank">Linkedin</a> and <a href="https://www.instagram.com/umapathi1014/?igsh=ZGUzMzM3NWJiOQ%3D%3D" target="_blank">Instagram</a> where I post useful content related to Web Development and Programming</p>

                <p>I'm open to <b>Job</b> opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to <b>contact</b> me.</p>
                </div>
                <button onClick={scrollTocontacts}>Contact</button>
            </div>
            <div className="skills">
            <div className="heading">My Skills</div>
                <ul>
                    {skills.map((skill,index)=>(<li key={index}>{skill}</li>))}
                </ul>
            </div>
        </div>
    </div>
    <div className="slidthree" ref={projectRef}>
        <div className="heading">
            <h2>PROJECTS</h2>
            <div className="userdefined_line"></div>
        </div>
        <span>Here you will find some of the personal and clients projects that I created with each project containing its own case study</span>
        <div className="container">{
                Projects.map((project)=>(
                   <div className="projects">
                   <img src={project.img} alt="" data-aos="fade-right" data-aos-delay="50"/>
                   <div className="projects_detials" data-aos="fade-left" data-aos-delay="50">
                       <div className="heading">{project.name}</div>
                       <div className="para">{project.discription}</div>
                       <Link to={`/CaseStudy?id=${project.id}`}>
                       Case Study
                       </Link>
                   </div>
                   </div>
                ))}
        </div>
    </div>
    <div className="slidfour" ref={contactRef}>
        <div className="heading">
            <h2>CONTACT</h2>
            <div className="userdefined_line"></div>
        </div>
        <span>Feel free to Contact me by submitting the form below and I will get back to you as soon as possible</span>
        <form className='messageForm' onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder='Enter Your Name' required id='name'/>
            <label htmlFor="mail">Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder='Enter Your Email' required id='mail'/>
            <label htmlFor="message">Message</label>
            <textarea placeholder='Enter Your Message' name="message" value={formData.message} onChange={handleChange} required id='message'></textarea>
            <button type="submit">Submit</button>
        </form>
    </div>
    <footer >
        <div className="footer_content">
            <div className="content1">
                <h2>Social</h2>
                <ul>
                    <li><a href="https://www.linkedin.com/in/umapathi2004/" target="_blank"><i class="fa-brands fa-linkedin"></i></a></li>
                    <li><a href="https://wa.me/917094350136" target="_blank"><i class="fa-brands fa-whatsapp"></i></a></li>
                    <li><a href="https://x.com/umapathi1014" target="_blank"><i class="fa-brands fa-twitter"></i></a></li>
                    <li><a href="https://github.com/Umapathi2004" target="_blank"><i class="fa-brands fa-github"></i></a></li>
                    <li><a href="https://www.instagram.com/umapathi1014/?igsh=ZGUzMzM3NWJiOQ%3D%3D" target="_blank"><i class="fa-brands fa-instagram"></i></a></li>
                </ul>
            </div>
            <div className="content2">
                <h2>Umapathi</h2>
                <p>A Frontend focused Web Developer building the Frontend of Websites and</p>
                <p>Web Applications that leads to the success of the overall product</p>
            </div>
        </div>
        <div className="copyright">© Copyright 2025 . Made by <Link to={"/"}>Umapathi</Link></div>
    </footer>
    </>
  )
}
