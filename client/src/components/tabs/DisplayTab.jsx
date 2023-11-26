import React from "react";
import { Input, SelectInput, Switch } from "../../components";
import { botIcon } from "../../assets";
import { MdOutlineFileUpload } from "react-icons/md";

const DisplayTab = ({ inputValues, handleChange }) => {
  const chatIconSizeOptions = [
    "Small (48x48 px)",
    "Small (96x96 px)",
    "Small (128x128 px)",
  ];
  const screenPositionOptions = [
    "Bottom Right",
    "Bottom Left",
    "Top Right",
    "Top Left",
  ];

  return (
    <div className="flex flex-col gap-6">
      <div className="flex gap-12">
        <Input
          value={inputValues.primaryColor}
          handleChange={handleChange}
          id={"primaryColor"}
          label={"Primary Color"}
          description="Lorem ipsuim dolor sit Lorem ipsuim dolor sit"
          type={"color"}
        />
        <Input
          value={inputValues.fontColor}
          handleChange={handleChange}
          id={"fontColor"}
          label={"Font Color"}
          description="Lorem ipsuim dolor sit Lorem ipsuim dolor sit"
          type={"color"}
        />
      </div>
      <div className="flex gap-12">
        <Input
          value={inputValues.fontSize}
          handleChange={handleChange}
          id={"fontSize"}
          label={"Font Size (in px)"}
          description="Lorem ipsuim dolor sit Lorem ipsuim dolor sit"
        />
        <Input
          value={inputValues.chatHeight}
          handleChange={handleChange}
          id={"chatHeight"}
          label={"Chat Height (in % of total screen)"}
          description="Lorem ipsuim dolor sit Lorem ipsuim dolor sit"
        />
      </div>
      <div className="flex justify-between">
        <div>
          <h3 className="font-bold text-lg text-gray-700">Show Sources</h3>
          <span className="text-xs text-gray-600">
            Recommended Size: 48x48px
          </span>
        </div>
        <Switch
          inputValues={inputValues}
          handleChange={handleChange}
        />
      </div>
      <hr className="border border-gray-300" />
      <div className="flex flex-col gap-6">
        <h3 className="text-primary font-bold text-lg">Chat Icon</h3>
        <div className="flex gap-12">
          <SelectInput
            inputValues={inputValues}
            handleChange={handleChange}
            options={chatIconSizeOptions}
            id={"chatIconSize"}
            label={"Chat Icon Size"}
          />
          <SelectInput
            inputValues={inputValues}
            handleChange={handleChange}
            options={screenPositionOptions}
            id={"screenPosition"}
            label={"Position on Screen"}
          />
        </div>
        <div className="flex gap-12">
          <Input
            value={inputValues.bottomDistance}
            handleChange={handleChange}
            id={"bottomDistance"}
            label={"Distance from Bottom (in px)"}
            type={"text"}
          />
          <Input
            value={inputValues.horizontalDistance}
            handleChange={handleChange}
            id={"horizontalDistance"}
            label={"Horizontal Distance (in px)"}
            type={"text"}
          />
        </div>
        <div className="flex flex-col gap-6">
          <h3 className="text-gray-700 font-bold text-lg">Bot Icon</h3>
          <div className="flex gap-6 items-end">
            <img
              src={inputValues.botIcon || botIcon}
              alt="bot icon"
              className="rounded-full w-20 h-20 border border-gray-300"
            />
            <div>
              <div>
                <label
                  className="flex items-center gap-2 bg-primary text-white rounded-md px-6 py-2 cursor-pointer"
                  onClick={handleChange}
                  htmlFor="botIcon"
                >
                  Upload Image
                  <MdOutlineFileUpload className="text-lg" />
                </label>
                <input
                  type="file"
                  onChange={handleChange}
                  id="botIcon"
                  className="hidden"
                />
              </div>
              <span className="text-xs text-gray-600">
                Recommended Size: 48x48px
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayTab;
