import React from "react";
import { Input } from "../../components";

const GeneralTab = () => {
  return (
    <div className="flex flex-col gap-6">
      <Input
        value={""}
        id={"chatbotName"}
        label={"Chatbot Name"}
        description="Lorem ipsuim dolor sit Lorem ipsuim dolor sit"
        type={"text"}
      />
      <Input
        value={""}
        id={"welcomeMessage"}
        label={"Welcome Message"}
        description="Lorem ipsuim dolor sit Lorem ipsuim dolor sit"
        type={"text"}
      />
      <Input
        value={""}
        id={"Input Placeholder"}
        label={"Input Placeholder"}
        description="Lorem ipsuim dolor sit Lorem ipsuim dolor sit"
        type={"text"}
      />
    </div>
  );
};

export default GeneralTab;
