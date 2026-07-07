import { useState } from "react";
import Modal from "../modals/modals";
import "./repeat-cta.css";

function RepeatCTA() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // empty the inputs
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  function openModal() {
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  // save data in localStorage and check phone number
  function handleFormSubmit(e) {
    e.preventDefault();

    const nameValue = e.target.name.value;
    const phoneNumberValue = e.target.phoneNumber.value;

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const isDuplicate = users.some(
      (user) => user.phoneNumber === phoneNumberValue,
    );

    if (isDuplicate) {
      alert("⚠️You have booked before.⚠️");
      return;
    }

    const newUser = { name: nameValue, phoneNumber: phoneNumberValue };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    alert("🎉Your booking was successful, we'll call you soon.🎉");

    closeModal();
    setName("");
    setPhoneNumber("");
  }

  return (
    <div className="outer-container">
      <div className="cta-repeat-container">
        <h1 className="cta-title">
          🎉<span>20%</span>OFFER🎉
        </h1>
        <p className="cta-text">
          The adventure of a lifetime is waiting for you.<br></br>Grab this
          exclusive offer before it's gone!🌿
        </p>
        <button className="cta-btn" onClick={openModal}>
          Claim Offer
        </button>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title={<span style={{ color: "#e19e04" }}>Claim Your 20% Offer</span>}
      >
        <form className="cta-modal-form" onSubmit={handleFormSubmit}>
          <input
            className="cta-modal-input"
            type="text"
            name="name"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            className="cta-modal-input"
            type="tel"
            name="phoneNumber"
            placeholder="Your Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
          <button type="submit" className="cta-modal-btn">
            Get Details
          </button>
        </form>
      </Modal>
    </div>
  );
}

export default RepeatCTA;
