import './App.css';
import WorkExperience from './workEx/WorkExperience';
import CertificationPage from './certificatio/CertificationPage'
import AboutMePage from './Aboutme/AboutMe';
import SideMenu from './Aboutme/SideMenu';
import Mainpage from './Aboutme/Mainpage';
import ContactPage from './Contact/contactPage';

function App() {



  return (
    <>

      <div className='Main'>
        <div className='heading-main'>
          <SideMenu />
          <Mainpage />
        </div>

        <div className='content-main'>
       
          <AboutMePage />
          <CertificationPage />
          <WorkExperience />
          <ContactPage />
        </div>

      </div>

    </>
  );
}

export default App;
