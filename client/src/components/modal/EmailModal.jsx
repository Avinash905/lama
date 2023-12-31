import React, { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import Button from "../button/Button";

const EmailModal = () => {
  const { isLoading, findOrCreateUser } = useContext(UserContext);
  const [emailInput, setEmailInput] = useState("");
  const [error, setError] = useState(false);

  const handleClick = () => {
    if (!emailInput) {
      setError(true);
      return;
    }

    findOrCreateUser(emailInput);
    setEmailInput("");
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="z-10 bg-white p-6 rounded-lg w-1/3 flex flex-col gap-6">
        <h2 className="font-bold text-2xl">Log In</h2>
        <form className="flex flex-col gap-2">
          <label
            htmlFor="projectName"
            className="text-md text-gray-600"
          >
            Enter Your Email:
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={emailInput}
            onChange={(event) => setEmailInput(event.target.value)}
          />
          {error && <span className="text-red-500">Email can't be empty</span>}
          <Button
            content={"Create"}
            customCss={
              "text-white w-fit ml-auto bg-primary py-2 px-4 rounded-md"
            }
            handleClick={handleClick}
            loading={isLoading}
          />
        </form>
      </div>
    </div>
  );
};

export default EmailModal;
