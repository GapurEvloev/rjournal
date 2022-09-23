import { Paper, Typography } from "@mui/material";
import Link from "next/link";
import Image from "next/image";

import styles from "./Post.module.scss";

export const Post = () => {
  return (
    <Paper elevation={0} className="p-5" classes={{ root: styles.paper }}>
      <Typography variant="h5" className={styles.title}>
        <Link href={`/news/1`}>
          <a>Кот прилег отдохнуть и стал героем фотожаб</a>
        </Link>
      </Typography>
      <Typography className="mt-2.5 mb-4">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquid
        architecto asperiores aut consequuntur dolor et fugit impedit ipsa
        itaque laboriosam minus mollitia, nihil quam, reprehenderit, sit tempora
        tenetur ullam.
      </Typography>
      <Image
        src="https://leonardo.osnova.io/a21ca5a9-d95b-560d-9a6f-9fa87eff7fcd/-/preview/600/-/format/webp/"
        height={664}
        width={600}
        alt="Кот прилег отдохнуть и стал героем фотожаб"
      />
    </Paper>
  );
};
