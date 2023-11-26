import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Bookmark } from "~/interfaces/bookmark";

interface BookmarkFolderProps {
  folder: Bookmark;
}

const BookmarkFolder: React.FC<BookmarkFolderProps> = ({ folder }) => {
  const location = useLocation();
  return (
    <div className="bookmark-folder">
      <Link to={`${location.pathname}/${folder.id}`}>{folder.title}</Link>
    </div>
  );
};

export default BookmarkFolder;
