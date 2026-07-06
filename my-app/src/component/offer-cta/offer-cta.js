import {useState} from "react"

import "./offer-cta.css";

function OfferCta() {

      //   for making the login inputs empty
      const [name, setname] = useState("");
      const [phoneNumber, setphoneNumber] = useState("");
    
        function handleLoginSubmit(e) {
    e.preventDefault();

    const nameValue = e.target.name.value;
    const phoneNumberValue= e.target.phoneNumber.value;

        const users=JSON.parse (localStorage.getItem("users"))|| []


     const isDuplicate = users.some(
      (user) => user.phoneNumber === phoneNumberValue);

if (isDuplicate) {
      alert("⚠️You have booked before.⚠️");
      return;
    }

const newUsers={name:nameValue, phoneNumber:phoneNumberValue}
users.push(newUsers)
    localStorage.setItem("users", JSON.stringify(users));

    alert("🎉Your booking was successful, we'll call you soon.🎉")



    setname("");
    setphoneNumber("");
  }

  return (
    <div className="offer-cta-container">
      <div>
        <h1 className="offer-title">
          🎉<span>20%</span>OFFER🎉
        </h1>
      </div>
      <p className="offer-text">
        Ever dreamed of walking through clouds? <br></br>
        <span className="text-blue">Abr Forest</span> offers a once-in-a-lifetime
        journey where mist, mountains, and untouched nature come together in
        perfect harmony. Leave your details below and let us guide you into this
        hidden paradise.
      </p>
      <form className="input-container" onSubmit={handleLoginSubmit} >
        <input className="offer-input" type="text" placeholder="Your Name" 
        name="name"
        value={name} onChange={(e)=>setname(e.target.value)} required/>


        <input className="offer-input" type="tel" placeholder="Your Phone Number"
        name="phoneNumber"
         value={phoneNumber}
         onChange={(e)=>setphoneNumber(e.target.value)} required/>
        <button className="offer-btn" type="submit">Get Details</button>
      </form>
    </div>
  );
}
export default OfferCta;
