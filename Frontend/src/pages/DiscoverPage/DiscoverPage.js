import React, { useEffect, useState } from "react";
import axios from "axios";
import "./DiscoverPage.css";
import { MuiFileInput } from "mui-file-input";
import { Button, Stack, Typography } from "@mui/material";
import AddPhotoAlternateOutlinedIcon from "@mui/icons-material/AddPhotoAlternateOutlined";
import { useNavigate } from "react-router-dom";
import LoadingPage from "../LoadingPage/LoadingPage";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
function DiscoverPage() {
  const navigate = useNavigate();
  const [selectedFile, setSelectedFile] = useState(null);
  const [value, setValue] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  const handleFileChange = (newValue) => {
    setSelectedFile(newValue);
    setValue(newValue);
  };

  const uploadFile = async () => {
    if (!selectedFile) {
      navigate("/pnf");
    }

    const formData = new FormData();
    formData.append("image", selectedFile);
    const options = {
      method: "POST",
      url: "https://microsoft-computer-vision3.p.rapidapi.com/models/landmarks/analyze",
      params: { language: "en" },
      headers: {
        "X-RapidAPI-Key": "99ed6f84b6msh281d41fd30545e0p11993fjsn7df25fb37e24",
        "X-RapidAPI-Host": "microsoft-computer-vision3.p.rapidapi.com",
      },
      data: formData,
    };

    try {
      setLoading(true);
      const response = await axios.request(options);
      navigate("/landmarkspage", {
        state: { data: response.data.result.landmarks },
      });
    } catch (error) {
    }
  };

  if (loading) {
    return <LoadingPage />;
  } else {
    return (
      <>
        {" "}
        <NavigationBar />
        <div className="discover-page-container">
          <div className="discover-page-container1">
            <Stack
              direction="column"
              spacing={3}
              marginTop={7}
              sx={{ alignItems: "center" }}
            >
              <AddPhotoAlternateOutlinedIcon
                style={{
                  fontSize: 100,
                  color: "#8bc8db",
                }}
              />
              <Typography variant="h3" style={{ color: "#ffffff" }}>
                Trippee's Exclusive LandMark Discovery!!
              </Typography>
              <Typography variant="h5" style={{ color: "#ffffff" }}>
                Upload Image and discover the landmark!
              </Typography>
              <MuiFileInput
                placeholder="Click here to upload an image."
                value={value}
                onChange={handleFileChange}
                sx={{
                  "& span.MuiFileInput-placeholder": {
                    color: "#000000",
                  },
                  "& div.MuiInputBase-root": {
                    borderRadius: 5,
                    backgroundColor: "#ffffff",
                    color: "#000000",
                  },
                }}
              />
              <Button
                variant="contained"
                style={{
                  backgroundColor: "#8bc8db",
                  borderRadius: 5,
                }}
                fontFamily={"Roboto"}
                onClick={uploadFile}
              >
                Discover
              </Button>
            </Stack>
          </div>
          <div className="discover-page-container2"></div>
        </div>
      </>
    );
  }
}

export default DiscoverPage;
