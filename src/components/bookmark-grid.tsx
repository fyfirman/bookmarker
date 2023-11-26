import React from "react";
import Grid from "@mui/joy/Grid";
import { useBookmarkQuery } from "~/hooks/use-bookmark-query";
import { Outlet } from "react-router-dom";
import Loading from "./loading";

interface BookmarkGridProps {}

const BookmarkGrid: React.FC<BookmarkGridProps> = () => {
  const { isLoading } = useBookmarkQuery();

  return <div>{!isLoading ? <Outlet /> : <Loading />}</div>;
};

export default BookmarkGrid;
