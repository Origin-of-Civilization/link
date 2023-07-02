import React from "react";
import { useParams } from "react-router-dom";
import linksData from "../data/links";

function Link() {
  const { id } = useParams();
  const link = linksData.find((link) => link.id === parseInt(id));

  if (!link) {
    return <h2>Link not found</h2>;
  }
}

export default Link;