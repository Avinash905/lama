import React, { useContext, useState } from "react";
import {
  UploadCard,
  EmptyProject,
  NonEmptyProject,
  UploadModal,
} from "../../components";
import { youtubeLogo, spotifyLogo, rssFeedLogo } from "../../assets";

const Project = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [clickedCardData, setClickedCardData] = useState({});

  const openModal = (image, text) => {
    setClickedCardData({ image, text });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // const useContext()

  return (
    <section className="flex flex-col gap-4">
      <h2 className="sub-heading mb-4">Upload</h2>
      <div className="grid grid-cols-3 gap-8 gap-x-16">
        {["row1"].map((row) => {
          return (
            <React.Fragment key={row}>
              <UploadCard
                image={youtubeLogo}
                altText={"Youtube"}
                text={"Youtube Video"}
                openModal={openModal}
              />
              <UploadCard
                image={spotifyLogo}
                altText={"Spotify"}
                text={"Spotify Podcast"}
                openModal={openModal}
              />
              <UploadCard
                image={rssFeedLogo}
                altText={"Rss Feed"}
                text={"RSS Feed"}
                openModal={openModal}
              />
            </React.Fragment>
          );
        })}
      </div>
      {/* <EmptyProject /> */}
      <NonEmptyProject />
      <UploadModal
        isModalOpen={isModalOpen}
        closeModal={closeModal}
        clickedCardData={clickedCardData}
      />
    </section>
  );
};

export default Project;
