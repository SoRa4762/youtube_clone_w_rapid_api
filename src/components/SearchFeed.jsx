import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { Videos } from "./"; //because we are already in the component folder and the index.js has exported it all
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { useParams } from "react-router-dom";

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setVideos(data.items)
    );
  }, [searchTerm]);
  return (
    <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
        Search Results for{" "}
        <span style={{ color: "#F31503" }}>{searchTerm}</span>
      </Typography>
      <Videos videos={videos} /> {/* sending videos from here */}
    </Box>
  );
};

export default SearchFeed;
