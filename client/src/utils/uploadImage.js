import axios from "axios";

const uploadImage = async (event, setInputValues, inputValues) => {
  if (
    event.target.files[0].type === "image/jpeg" ||
    event.target.files[0].type === "image/png"
  ) {
    const data = new FormData();
    data.append("file", event.target.files[0]);

    data.append("upload_preset", import.meta.env.VITE_CLOUDINARY_PRESET);

    data.append("cloud_name", import.meta.env.VITE_CLOUDINARY_CLOUD_NAME);

    const {
      data: { url },
    } = await axios.post(import.meta.env.VITE_CLOUDINARY_BASE_URL, data);
    setInputValues({ ...inputValues, [event.target.id]: url });
  } else {
    console.error("Please select an image in jpeg or png format");
  }
};

export default uploadImage;
