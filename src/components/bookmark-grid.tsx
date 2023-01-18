import React from "react";
import Grid from "@mui/joy/Grid";
import { useBookmarkQuery } from "~/hooks/use-bookmark-query";
import { SortOrder, useBookmarkStore } from "~/stores/user.store";
import BookmarkCard from "./bookmark-card";
import Loading from "./loading";

interface BookmarkGridProps {}

const BookmarkGrid: React.FC<BookmarkGridProps> = () => {
  const { isLoading } = useBookmarkQuery();
  const flattenedBookmarks = useBookmarkStore((s) =>
    s.getFlattenBookmarks({
      dateAdded: SortOrder.Ascending,
    })
  );

  return (
    <Grid container spacing={2} sx={{ flexGrow: 1 }}>
      {!isLoading ? (
        flattenedBookmarks.map((bookmark) => (
          <Grid key={bookmark.id} md={3} sm={6} xl={2} xs={12}>
            <BookmarkCard {...bookmark} />
          </Grid>
        ))
      ) : (
        <Loading />
      )}
    </Grid>
  );
};

export default BookmarkGrid;
