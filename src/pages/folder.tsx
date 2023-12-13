import clsx from "clsx";
import React from "react";
import { useParams, Link } from "react-router-dom";
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
      <div>
        <Link className="font-extralight text-xl mr-2 text-gray-400" to="/">
          Home {">"}
        </Link>
        {data.breadcrumbs.map((b, index) => (
          <Link
            key={b.path}
            className={clsx(
              "font-extralight text-xl mr-2",
              index !== data.breadcrumbs.length - 1 ? "text-gray-400" : ""
            )}
            to={`/${b.path}`}
          >
            {b.title} {index !== data.breadcrumbs.length - 1 ? ">" : ""}
          </Link>
        ))}
      </div>
      <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
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
