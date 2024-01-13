import React, { useState, useEffect } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdb-react-ui-kit';

const OtpForm = () => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const otpInputs = Array.from({ length: 6 }, () => React.createRef());

  const handleInputChange = (index, event) => {
    const newOtp = [...otp];
    newOtp[index] = event.target.value;
    setOtp(newOtp);

    if (event.target.value !== '' && otpInputs[index + 1]) {
      otpInputs[index + 1].current.focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const enteredOtp = otp.join('');
    console.log('Entered OTP:', enteredOtp);
    // Add your logic for OTP verification or further actions here
  };

  useEffect(() => {
    if (otpInputs[0] && otpInputs[0].current) {
      otpInputs[0].current.focus();
    }
  }, []);

  return (
    <MDBContainer className="py-5">
    <MDBRow className="justify-content-center">
      <MDBCol lg="6">
        <div
          style={{
            backgroundColor: 'rgba(0, 255, 255, 0.8)', // Transparent white background
            padding: '20px',
            borderRadius: '20px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)', // Box shadow
          }}
        >
          <h2 className="mb-4 text-center">Enter OTP</h2>
          <form onSubmit={handleSubmit}>
            <div className="d-flex justify-content-center align-items-center mb-5">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  type="text"
                  className="form-control text-center mx-2 otp-input"
                  maxLength="1"
                  value={digit}
                  onChange={(e) => handleInputChange(index, e)}
                  ref={otpInputs[index]}
                />
              ))}
            </div>
            <MDBBtn type="submit" color="success" className="mt-4 w-100">
              Submit OTP
            </MDBBtn>
          </form>
        </div>
      </MDBCol>
    </MDBRow>
  </MDBContainer>
  );
};

export default OtpForm;
