import React, { useEffect, useState } from "react";
import { FaRegCircleUser } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import FooterS from "../components/Footer/FooterS";

const Screen1 = () => {
  const [languages, setLanguages] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const data = [
      { language: "English" },
      { language: "ಕನ್ನಡ" },
      { language: "हिंदी" }
    ];
    setLanguages(data);
  }, []);

  useEffect(() => {
    const setVh = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };
    setVh();
    window.addEventListener("resize", setVh);
    return () => window.removeEventListener("resize", setVh);
  }, []);

  const handleSelection = (index) => {
    const selectedLanguage = languages[index].language;

    if (selectedLanguage !== "English") {
      let message = "";
      switch (selectedLanguage) {
        case "ಕನ್ನಡ":
          message = "ಅನುವಾದ ಲಭ್ಯವಿಲ್ಲ, ದಯವಿಟ್ಟು ಇಂಗ್ಲಿಷ್‌ನಲ್ಲಿ ಮುಂದುವರಿಯಿರಿ.";
          break;
        case "हिंदी":
          message = "अनुवाद उपलब्ध नहीं है, कृपया अंग्रेज़ी में जारी रखें।";
          break;
        default:
          message = "Translation not available, please continue in English.";
      }
      setModalMessage(message);
      setShowModal(true);
      return; // block selection
    }

    setActiveIndex(index); // only English is selectable
  };

  const handleNavigate = () => {
    if (activeIndex === null || languages[activeIndex].language !== "English") return;
    navigate("/screen2", { state: { language: "English" } });
  };

  return (
    <div
      className="relative bg-hero p-3 h-screen bg-cover bg-center"
      style={{ height: "calc(var(--vh) * 100)" }}
    >
      <div className="flex justify-between">
        <div onClick={() => navigate(-1)} className="hover:cursor-pointer text-white mh:mt-6">
          <FaRegCircleUser className="text-white text-xl sm:text-3xl" />
        </div>
        <img className="w-[14vh] mh:w-[13vh]" src="/images/logo.png" />
      </div>

      {/* Center logo */}
      <div className="flex flex-col justify-center items-center mt-8 sm:mt-12">
        <img src="/images/combined_logo.png" alt="" className="transform scale-50" />
      </div>

      {/* Language Selector */}
      <div className="px-6 mt-4">
        <span className="block text-gray-300 text-lg sm:text-2xl mb-3">
          Select language
        </span>
        <div className="grid grid-cols-3 sm:grid-cols-3 gap-3">
          {languages.map((language, index) => (
            <button
              key={index}
              onClick={() => handleSelection(index)}
              className={`p-2 rounded-xl text-sm sm:text-lg font-semibold ${
                activeIndex === index
                  ? "bg-customBlue text-white"
                  : "bg-white text-black hover:bg-customBlue hover:text-white cursor-pointer"
              }`}
            >
              {language.language}
            </button>
          ))}
        </div>
      </div>

      {/* Continue Button */}
      <div className="flex justify-center px-6 mt-24">
        <div
          onClick={handleNavigate}
          className="p-2 rounded-xl bg-white text-black font-semibold text-center w-1/2 sm:w-2/5 hover:bg-customBlue hover:text-white cursor-pointer"
        >
          Click to continue
        </div>
      </div>

      {/* Footer */}
      <FooterS back={false} />

      {/* Custom Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-xl p-6 w-11/12 max-w-md text-center">
            <p className="mb-4 text-lg">{modalMessage}</p>
            <button
              onClick={() => setShowModal(false)}
              className="px-4 py-2 bg-customBlue text-white rounded-lg font-semibold hover:bg-blue-700"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Screen1;
