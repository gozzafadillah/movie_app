import React from "react";
import { View, Text } from "react-native";
import { useRequestProcessor } from "../lib/useRequestProcessor";
import axiosInstance from "../lib/axios";
import { useState } from "react";

const Discover = () => {
  const { query } = useRequestProcessor();

  const {
    data: discover,
    isLoading,
    isError,
  } = query(
    "movieDiscover",
    () => axiosInstance.get("/3/discover/movie").then((res) => res.data),
    { enabled: true }
  );
  console.log(discover);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error :</p>;

  return (
    <View>
      {discover &&
        discover.results.map((movie) => (
          <Text key={movie.id}>{movie.original_title}</Text>
        ))}
    </View>
  );
};

export default Discover;
