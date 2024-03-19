import Menuitemsform from './Menuitemsform';
import { useMS } from './useMS';
import { menuitems } from './mscopybook';
import { Step1form } from './Step1form';
import { Step2form } from './Step2form';
import { Step3form } from './Step3form';
import { Step4form } from './Step4form';
import { Step5form } from './Step5form';
import './msstyle.css';
import { step1logic, step2logic, step3logic, step4logic, step5logic } from './stepslogic';
function App() {

  let msuse = useMS();
  let sform1 = {
    mname: msuse.mname,
    setmname: msuse.setmname,
    memail: msuse.memail,
    setmemail: msuse.setmemail,
    mphone: msuse.mphone,
    setmphone: msuse.setmphone,
    m1: "Personal info",
    m2: "Please provide your name, email address and phone number.",
    fn1: "Name",
    fn2: "Email Address",
    fn3: "Phone Number"
  }
  let sform2 = {
    m1: "Select your plan",
    m2: "You have the option of monthly or yearly billing.",
    msuse
  }
  let sform3 = {
    m1: "Pick add-ons",
    m2: "Add-ons help enhance your gaming experience.",
    msuse
  }
  let sform4 = {
    m1: "Finishing up",
    m2: "Double-check everything looks OK before confirming.",
    msuse
  }
  let sform5 = {
    m1: "Thank you!",
    m2: "Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.",
    msuse
  }

  function Handlestepclick(e, thisstep) {
    console.log(`Clicked on the step: step ${thisstep} of the event ${e.target.textContent}`);
    let cbutton = e.target;
    if (thisstep === 1) {
      if (sform1.mname == " " || sform1.memail == " " || sform1.mphone == " ") {
        window.alert("Name, email and phone number cannot be empty");
      } else {
        step1logic(cbutton, thisstep, msuse);
      }
    }
    if (thisstep === 2) {
      step2logic(cbutton, thisstep, msuse);
    }
    if (thisstep === 3) {
      step3logic(cbutton, thisstep, msuse);
    }
    if (thisstep === 4) {
      step4logic(cbutton, thisstep, msuse);
    }
    if (thisstep === 5) {
      step5logic(cbutton, thisstep, msuse);
    }
  }

  return (
    <>
      <div className='msparent'>
        <div className='msfirstchild'>
          <div className='msgrandchild1'>
            <Menuitemsform menuitems={menuitems} s1={msuse.s1} s2={msuse.s2} s3={msuse.s3} s4={msuse.s4} />
          </div>
          <div className='msgrandchild2'>
            {
              (msuse.s1 &&
                <Step1form sform1={sform1} s2={msuse.s2} s3={msuse.s3} s4={msuse.s4} stepclick={Handlestepclick} />)
              ||
              (msuse.s2 &&
                <Step2form sform2={sform2} s2={msuse.s2} s3={msuse.s3} s4={msuse.s4} stepclick={Handlestepclick} />)
              ||
              (msuse.s3 &&
                <Step3form sform3={sform3} s2={msuse.s2} s3={msuse.s3} s4={msuse.s4} stepclick={Handlestepclick} />)
              ||
              (msuse.s4 &&
                <Step4form sform4={sform4} s2={msuse.s2} s3={msuse.s3} s4={msuse.s4} stepclick={Handlestepclick} />)
              ||
              (msuse.s5 &&
                <Step5form sform5={sform5} s2={msuse.s2} s3={msuse.s3} s4={msuse.s4} s5={msuse.s5} stepclick={Handlestepclick} />)
            }
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
