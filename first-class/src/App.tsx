import "./App.css";
import { Navbar } from "./components/Navbar";
/**
 * Components
 * ----------
 * Contact Form / Sign Up Form
 * User Profile Card
 *  - user image / placeholder
 *  - name
 *  - description
 * Footer
 *  - copy the one on the website
 *
 */

function App() {
  return (
    <>
      <Navbar />
      {/* <div className="flex flex-col gap-10">
        <ContactForm
          smallHeader="JOIN THE COMMUNITY"
          biggerHeader="STAY IN THE KNOW — SIGN UP FOR THE KAYA NEWSLETTER"
          buttonText="SIGN UP"
        />
        <ContactForm
          smallHeader="DONT JOIN THIS COMMUNITY"
          biggerHeader="NEVER STAY IN THE KNOW"
          buttonText="DELETE YOUR ACCOUNT"
        />
      </div>

      <Userprofile
        userImage="Not to be found"
        name="Chris"
        description="The BEST React tutor"
      />

      <FooterForm /> */}
    </>
  );
}

export default App;
