import React from "react";
import { Input, SelectInput, Switch } from "../../components";
import { botIcon } from "../../assets";
import { MdOutlineFileUpload } from "react-icons/md";

const DisplayTab = () => {
  const chatIconSizeOptions = ["a", "b", "c"];
  const screenPositionOptions = ["a", "b", "c"];

  return (
    <div className="flex flex-col gap-6">
      <div className="flex gap-12">
        <Input
          value={"#7BD568"}
          id={"primaryColor"}
          label={"Primary Color"}
          description="Lorem ipsuim dolor sit Lorem ipsuim dolor sit"
          type={"color"}
        />
        <Input
          value={"#3C3C3C"}
          id={"fontColor"}
          label={"Font Color"}
          description="Lorem ipsuim dolor sit Lorem ipsuim dolor sit"
          type={"color"}
        />
      </div>
      <div className="flex gap-12">
        <Input
          value={"25"}
          id={"fontSize"}
          label={"Font Size (in px)"}
          description="Lorem ipsuim dolor sit Lorem ipsuim dolor sit"
          type={"text"}
        />
        <Input
          value={""}
          id={"chatHeight"}
          label={"Chat Height (in % of total screen)"}
          description="Lorem ipsuim dolor sit Lorem ipsuim dolor sit"
          type={"text"}
        />
      </div>
      <div className="flex justify-between">
        <div>
          <h3 className="font-bold text-lg text-gray-700">Show Sources</h3>
          <span className="text-xs text-gray-600">
            Recommended Size: 48x48px
          </span>
        </div>
        <Switch />
      </div>
      <hr className="border border-gray-300" />
      <div className="flex flex-col gap-6">
        <h3 className="text-primary font-bold text-lg">Chat Icon</h3>
        <div className="flex gap-12">
          <SelectInput
            options={chatIconSizeOptions}
            id={"chatIconSize"}
            label={"Chat Icon Size"}
          />
          <SelectInput
            options={screenPositionOptions}
            id={"screenPosition"}
            label={"Position on Screen"}
          />
        </div>
        <div className="flex gap-12">
          <Input
            value={"25"}
            id={"bottomDistance"}
            label={"Distance from Bottom (in px)"}
            type={"text"}
          />
          <Input
            value={""}
            id={"horizontalDistance"}
            label={"Horizontal Distance (in px)"}
            type={"text"}
          />
        </div>
        <div className="flex flex-col gap-6">
          <h3 className="text-gray-700 font-bold text-lg">Bot Icon</h3>
          <div className="flex gap-6 items-end">
            <img
              src={botIcon}
              alt="bot icon"
              className="rounded-full w-20 h-20"
            />
            <div>
              <button className="flex items-center gap-2 bg-primary text-white rounded-md px-6 py-2">
                Upload Image
                <MdOutlineFileUpload className="text-lg" />
              </button>
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
