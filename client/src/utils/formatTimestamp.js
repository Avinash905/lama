const formatTimestamp = (inputDateString) => {
  const dateObject = new Date(inputDateString);

  const day = dateObject.getDate().toString().padStart(2, "0");
  const month = dateObject.toLocaleString("default", { month: "short" });
  const year = dateObject.getFullYear().toString().slice(2);

  const hour = dateObject.getHours().toString().padStart(2, "0");
  const minute = dateObject.getMinutes().toString().padStart(2, "0");

  return `${day} ${month} ${year} | ${hour}:${minute}`;
};

export default formatTimestamp;
