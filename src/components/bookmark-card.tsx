import { format } from "date-fns";
import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import CardOverflow from "@mui/joy/CardOverflow";
import Divider from "@mui/joy/Divider";
import Typography from "@mui/joy/Typography";
import { Bookmark } from "~/interfaces/bookmark";

interface BookmarkCardProps extends Bookmark {}

const BookmarkCard = ({ title, url, dateAdded }: BookmarkCardProps) => {
  return (
    <Card
      className="hover:cursor-pointer"
      onClick={() => {
        window.open(url, "_blank");
      }}
      sx={{ width: 320 }}
      variant="outlined"
    >
      <CardOverflow>
        <AspectRatio ratio="2">
          <img
            alt=""
            loading="lazy"
            src="https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318"
            srcSet="https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318&dpr=2 2x"
          />
        </AspectRatio>
      </CardOverflow>
      <Typography level="h2" sx={{ fontSize: "md", mt: 2 }}>
        {title}
      </Typography>
      <Typography level="body2" overflow="clip" sx={{ mt: 0.5, mb: 2 }}>
        {url}
      </Typography>
      <Divider />
      <CardOverflow
        sx={{
          display: "flex",
          gap: 1.5,
          py: 1.5,
          px: "var(--Card-padding)",
          bgcolor: "background.level1",
        }}
        variant="soft"
      >
        {dateAdded ? (
          <Typography
            level="body3"
            sx={{ fontWeight: "md", color: "text.secondary" }}
          >
            {format(dateAdded, "dd MMM yyyy")}
          </Typography>
        ) : null}
      </CardOverflow>
    </Card>
  );
};

export default BookmarkCard;
