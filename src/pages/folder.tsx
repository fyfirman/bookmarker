import React from "react";
import { useParams } from "react-router-dom";
import BookmarkCard from "~/components/bookmark-card";
import BookmarkFolder from "~/components/bookmark-folder";
import { useBookmarkQuery } from "~/hooks/use-bookmark-query";
import { useBookmarkStore } from "~/stores/bookmark.store";

interface FolderPageProps {}

const FolderPage: React.FC<FolderPageProps> = () => {
  const params = useParams();
  const path = params["*"];
  if (!path) {
    throw new Error("Undefined id");
  }

  const { isLoading } = useBookmarkQuery();
  const bookmarkTree = useBookmarkStore((s) => s.getBookmarkByPath(path));

  if (isLoading) {
    return <div>Loading</div>;
  }

  if (!bookmarkTree) {
    throw new Error("Bookmark tree not found");
  }

  return (
    <div>
      <h2>{bookmarkTree.title}</h2>
      {bookmarkTree.children?.map((child) =>
        child.url ? (
          <BookmarkCard key={child.id} {...child} />
        ) : (
          <BookmarkFolder key={child.id} folder={child} />
        )
      )}
    </div>
  );
};

export default FolderPage;
