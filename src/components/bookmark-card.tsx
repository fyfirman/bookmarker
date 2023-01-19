import { format } from "date-fns";
import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import CardOverflow from "@mui/joy/CardOverflow";
import { Bookmark } from "~/interfaces/bookmark";

interface BookmarkCardProps extends Bookmark {}

const BookmarkCard = ({ title, url, dateAdded }: BookmarkCardProps) => {
  return (
    <Card
      className="hover:cursor-pointer"
      onClick={() => {
        window.open(url, "_blank");
      }}
      sx={{
        borderWidth: 0,
        boxShadow:
          "0px 20px 25px rgba(0, 0, 0, 0.03), 0px 10px 10px rgba(0, 0, 0, 0.04);",
      }}
      variant="outlined"
    >
      <CardOverflow>
        <AspectRatio ratio="1.91">
          <img
            alt=""
            loading="lazy"
            src="https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318"
            srcSet="https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318&dpr=2 2x"
          />
        </AspectRatio>
      </CardOverflow>
      <div className="flex flex-col gap-2">
        <h2 className="mt-2 text-base tracking-tighter text-zinc-900 line-clamp-2">
          {title}
        </h2>
        <span className="text-sm font-light tracking-tighter text-zinc-800 line-clamp-1">
          {url}
        </span>
        <span className="text-sm font-light tracking-tighter text-zinc-800">
          {dateAdded ? format(dateAdded, "d MMM yyyy") : ""}
        </span>
      </div>
    </Card>
  );
};

export default BookmarkCard;
