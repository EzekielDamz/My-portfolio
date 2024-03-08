import React, { useEffect, useRef, useState } from "react";
import Modal from "react-modal";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();

  useEffect(() => {
    Modal.setAppElement("#root");
  }, []);
  const [visible, setVisible] = useState(false);
  const handleVisibility = () => {
    const nameInput = form.current.elements.to_name;
    if (nameInput.value.trim() !== "") {
      setVisible(true);
    }
  };
  const submitDetail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_1n5e1n7", "template_xr3sfh4", form.current, {
        publicKey: "2WIr_R_HGAhB1eJRn",
      })
      .then(
        (data) => {
         
          e.target.reset();
        },
        (error) => {
          alert("failed", error.text);
        }
      );
  };
  return (
    <div>
      <form ref={form} onSubmit={submitDetail}>
        <input
          type="text"
          required
          placeholder="Name"
          name="to_name"
          className="input ring-1 rounded-sm font-KodeMono"
        />
        <br />
        <input
          type="email"
          required
          placeholder="Enter your email..."
          name="from_name"
          className="input ring-1 rounded-sm font-KodeMono"
        />
        <textarea
          placeholder="Send  a message..."
          required
          name="message"
          cols="30"
          rows="10"
          className="textarea ring-1"
        ></textarea>
        <div className="flex justify-center mt-5 ">
          <button
            className=" py-2 px-20 rounded-lg text-xl max-sm:text-sm font-KodeMono font-semibold btn-style"
            onClick={handleVisibility}
          >
            Submit
          </button>
        </div>
      </form>

      <div className="mod">
        <Modal
          isOpen={visible}
          onRequestClose={() => {
            setVisible(false);
          }}
          style={{
            content: {
              width: "16rem",
              height: "8rem",
              transform: "translate(-50%, -50%)",
              top: "50%",
              left: "50%",
              right: "auto",
              bottom: "auto",
              marginRight: "-50%",
              borderRadius: "5px",
            },
            overlay: {
              background: "transparent",
            },
          }}
        >
          <div className="m-auto">
            <p className="font-KodeMono text-xl">Form Submitted Successfullly</p>
            <button
              onClick={() => {
                setVisible(false);
              }}
              className="mt-3 btn-style "
            >
              Okay
            </button>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default ContactForm;
