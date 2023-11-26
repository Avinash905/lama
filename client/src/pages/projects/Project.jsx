import React, { useContext, useEffect, useState } from "react";
import { UploadCard, NoFiles, Files, UploadModal } from "../../components";
import { youtubeLogo, spotifyLogo, rssFeedLogo } from "../../assets";
import { ProjectContext } from "../../contexts/ProjectContext";
import { useParams } from "react-router-dom";

const Project = () => {
  const [clickedCardData, setClickedCardData] = useState({});
  const { files, getFiles } = useContext(ProjectContext);
  const { projectId } = useParams();

  const uploadTypes = [
    { image: youtubeLogo, altText: "Youtube", text: "Youtube Video" },
    { image: spotifyLogo, altText: "Spotify", text: "Spotify Podcast" },
    { image: rssFeedLogo, altText: "Rss Feed", text: "Rss Feed" },
  ];
  const cardsArray =
    files?.length > 0 ? [...uploadTypes] : [...uploadTypes, ...uploadTypes];

  useEffect(() => {
    getFiles(projectId);
  }, []);

  return (
    <section className="flex flex-col gap-4">
      <h2 className="sub-heading mb-4">Upload</h2>
      <div className="grid grid-cols-3 gap-8 gap-x-16">
        {cardsArray.map((row) => {
          return (
            <React.Fragment key={row.altText + Math.random()}>
              <UploadCard
                image={row.image}
                altText={row.altText}
                text={row.text}
                setClickedCardData={setClickedCardData}
              />
            </React.Fragment>
          );
        })}
      </div>
      {files?.length > 0 ? <Files /> : <NoFiles />}
      <UploadModal clickedCardData={clickedCardData} />
    </section>
  );
};

export default Project;
