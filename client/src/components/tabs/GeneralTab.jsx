import React from "react";
import { Input } from "../../components";

const GeneralTab = ({ inputValues, handleChange }) => {
  return (
    <div className="flex flex-col gap-6">
      <Input
        value={inputValues.chatbotName}
        handleChange={handleChange}
        id={"chatbotName"}
        label={"Chatbot Name"}
        description="Lorem ipsuim dolor sit Lorem ipsuim dolor sit"
      />
      <Input
        value={inputValues.welcomeMessage}
        handleChange={handleChange}
        id={"welcomeMessage"}
        label={"Welcome Message"}
        description="Lorem ipsuim dolor sit Lorem ipsuim dolor sit"
      />
      <Input
        value={inputValues.inputPlaceholder}
        handleChange={handleChange}
        id={"inputPlaceholder"}
        label={"Input Placeholder"}
        description="Lorem ipsuim dolor sit Lorem ipsuim dolor sit"
      />
    </div>
  );
};

export default GeneralTab;
