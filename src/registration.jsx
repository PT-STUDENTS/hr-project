import React, { useState } from "react";
import registrationimg from "../src/assets/registration.jpg";

export default function Registration() {

    
  // State hooks for form fields
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });



  // Password validation function
  const validatePassword = (password) => {
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumbers = /\d/.test(password);
    const hasSpecialChars = /[!@#$%^&*()_+{}\[\]:;"'<>,.?~\\/-]/.test(password);
    const isLongEnough = password.length >= 8;
    if (!hasUpperCase)
      return "Password must contain at least one uppercase letter.";
    if (!hasLowerCase)
      return "Password must contain at least one lowercase letter.";
    if (!hasNumbers) return "Password must contain at least one number.";
    if (!hasSpecialChars)
      return "Password must contain at least one special character.";
    if (!isLongEnough) return "Password must be at least 8 characters long.";
    return "";
  };

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();

    // Trim and validate inputs
    const trimmedFirstName = firstName.trim();
    const trimmedLastName = lastName.trim();
    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();
    const trimmedConfirmPassword = confirmPassword.trim();

    const newErrors = {
      firstName: trimmedFirstName ? "" : "First name is required.",
      lastName: trimmedLastName ? "" : "Last name is required.",
      email: trimmedEmail ? "" : "Email is required.",
      password: validatePassword(trimmedPassword),
      confirmPassword:
        trimmedPassword === trimmedConfirmPassword
          ? ""
          : "Passwords do not match.",
    };

    setErrors(newErrors);

    // If no errors, proceed with form submission logic
    if (
      !newErrors.firstName &&
      !newErrors.lastName &&
      !newErrors.email &&
      !newErrors.password &&
      !newErrors.confirmPassword
    ) {
      console.log("Form submitted");
      // Implement form submission logic here
    }
  };

  return (
    <div
      className="justify-center items-center flex flex-col"
      style={{
        backgroundImage: `url(${registrationimg})`,
        height: "100vh",
        width: "100%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <form
        onSubmit={handleSubmit}
        className=" max-w-[400px] w-3/4 mx-auto p-4 rounded-lg bg-white/20 backdrop-blur-lg "
      >
        <div className="text-2xl text-white">
          <h1>Registration Form</h1>
          <br></br>
        </div>

        <div>
          <label className=" text-white">First Name</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="border py-2 rounded-lg w-full bg-transparent text-white"
            required
          />
          {errors.firstName && (
            <p className="text-red-500 text-sm">{errors.firstName}</p>
          )}
        </div>

        <div>
          <label className=" text-white">Last Name</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="border py-2 rounded-lg w-full  bg-transparent text-white"
            required
          />
          {errors.lastName && (
            <p className="text-red-500 text-sm">{errors.lastName}</p>
          )}
        </div>

        <div>
          <label className=" text-white">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border py-2 rounded-lg w-full  bg-transparent text-white"
            required
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}
        </div>

        <div>
          <label className=" text-white">Password</label>
          <br></br>
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border py-2 rounded-lg w-full  bg-transparent text-white"
            required
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password}</p>
          )}
        </div>

        <div>
          <label className=" text-white">Confirm Password</label>
          <input
            type={showPassword ? "text" : "password"}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="border py-2 rounded-lg w-full  bg-transparent text-white"
            required
          />
          {errors.confirmPassword && (
            <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
          )}
        </div>

        <div className=" text-white">
          <input
            type="checkbox"
            id="show-pass"
            checked={showPassword}
            onChange={() => setShowPassword(!showPassword)}
          />
          <label htmlFor="show-pass">Show Password</label>
        </div>

        <button
          type="submit"
          className="border py-2 rounded-lg w-full my-5 bg-indigo-950 hover:bg-indigo-900 text-white"
        >
          Next
        </button>
      </form>
    </div>
  );
}
