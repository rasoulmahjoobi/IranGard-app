import "./social-proof1.css";

// عکس‌های خودتون رو اینجا import کنید (مسیر و اسم فایل رو با فایل واقعی جایگزین کنید)
import logo1 from "../../assets/images/sumer-camp.jpg";
import logo2 from "../../assets/images/time-travel.jpg";
import logo3 from "../../assets/images/travel-company.jpg";
import logo4 from "../../assets/images/iran-tourist.jpg";
import logo5 from "../../assets/images/winter-camp.jpg";

function SocialProof1() {
  return (
    <div className="social-proof1-container">
      <div className="logo-social-proof1">

        <div className="logo-item">
          <img src={logo1} alt="Logo 1" className="logo-image" />
        </div>

        <div className="logo-item">
          <img src={logo2} alt="Logo 2" className="logo-image" />
        </div>

        <div className="logo-item">
          <img src={logo3} alt="Logo 3" className="logo-image" />
        </div>

        <div className="logo-item">
          <img src={logo4} alt="Logo 4" className="logo-image" />
        </div>

        <div className="logo-item">
          <img src={logo5} alt="Logo 5" className="logo-image-winter" />
        </div>

      </div>
    </div>
  );
}

export default SocialProof1;