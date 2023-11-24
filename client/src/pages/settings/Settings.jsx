import React from "react";
import { Link } from "react-router-dom";
import { profilePic } from "../../assets";
import { Input } from "../../components";

const Settings = () => {
  return (
    <section className="flex flex-col gap-12">
      <div className="flex flex-col gap-8">
        <h2 className="sub-heading">Account Settings</h2>
        <div className="flex items-center gap-8">
          <img
            src={profilePic}
            alt="profile pic"
            className="w-32"
          />
          <Input
            value={"alphauser"}
            id={"username"}
            label={"User Name"}
            type={"text"}
          />
          <Input
            value={"alphauser"}
            id={"email"}
            label={"Email"}
            type={"email"}
          />
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <h2 className="sub-heading">Subscriptions</h2>
        <div className="flex justify-between items-center bg-gradient-to-r from-purple-600 via-purple-700 to-purple-900 rounded-lg px-10 py-6">
          <div className="text-white text-2xl">
            <span>You are currently on the </span>
            <Link className="font-semibold underline">Ques AI Basic Plan!</Link>
          </div>
          <button className="bg-white text-primary px-6 py-2 rounded font-semibold text-sm">
            Upgrade
          </button>
        </div>
        <Link
          to={"/dashboard/settings"}
          className="text-red-500 text-sm underline font-semibold"
        >
          Cancel Subscription
        </Link>
      </div>
    </section>
  );
};

export default Settings;
