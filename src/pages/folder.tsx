import React from "react";
import { useParams } from "react-router-dom";
import BookmarkCard from "~/components/bookmark-card";
import BookmarkFolder from "~/components/bookmark-folder";
import { useBookmarkStore } from "~/stores/bookmark.store";

interface FolderPageProps {}

const FolderPage: React.FC<FolderPageProps> = () => {
  const params = useParams();
  let path = params["*"];
  if (!path) {
    path = "0";
  }

  const data = useBookmarkStore((s) => s.getForFolderPage(path as string));

  if (!data) {
    throw new Error("Bookmark tree not found");
  }

  return (
    <div className="w-[1400px] pt-8">
      <h2 className="mb-8 font-extralight text-xl">{data.title}</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {data.folders.map((child) => (
          <BookmarkFolder key={child.id} folder={child} />
        ))}
        {data.bookmarks.map((child) => (
          <BookmarkCard key={child.id} {...child} />
        ))}
      </div>
    </div>
  );
};

export default FolderPage;
