import axios from "axios";
import { toast } from "react-toastify";
export const uploadImage = async (file) => {
  try {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "fitt.sharkSocialMedia");
    data.append("cloud_name", "dwwkz0egr");
   
    const uplodedData = await axios.post(
      `https://api.cloudinary.com/v1_1/dwwkz0egr/image/upload`,
      data
    );
  
    return uplodedData.data.url;
  } catch (err) {
    console.log(err?.response);
    toast.roor(`${err?.response}`, {});
  }
};
