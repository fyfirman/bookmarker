import React from "react";
import Grid from "@mui/joy/Grid";
import { useBookmarkQuery } from "~/hooks/use-bookmark-query";
import { Outlet } from "react-router-dom";
import Loading from "./loading";

interface BookmarkGridProps {}

const BookmarkGrid: React.FC<BookmarkGridProps> = () => {
  const { isLoading } = useBookmarkQuery();

  return (
    <Grid container spacing={4} sx={{ flexGrow: 1 }}>
      {!isLoading ? <Outlet /> : <Loading />}
    </Grid>
  );
};

export default BookmarkGrid;
