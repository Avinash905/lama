import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { profilePic } from "../../assets";
import { Input } from "../../components";
import { UserContext } from "../../contexts/UserContext";

const Settings = () => {
  const { username, email, userId, updateUsername } = useContext(UserContext);
  const [usernameInput, setUsernameInput] = useState(username);
  const [editMode, setEditMode] = useState(false);

  const editBtnHandler = () => {
    if (!editMode) {
      setEditMode(true);
      return;
    } else {
      updateUsername(userId, usernameInput);
      setEditMode(false);
    }
  };

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
          <div className="flex gap-2 items-end w-full">
            <Input
              value={usernameInput}
              id={"username"}
              label={"User Name"}
              handleChange={(event) => setUsernameInput(event.target.value)}
              disabled={editMode ? false : true}
            />
            <button
              className="text-white bg-primary px-6 py-2.5 h-fit rounded-lg font-semibold text-sm"
              onClick={editBtnHandler}
            >
              {editMode ? "Save" : "Edit"}
            </button>
          </div>
          <Input
            value={email}
            id={"email"}
            label={"Email"}
            type={"email"}
            disabled={true}
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
