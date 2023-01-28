import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { Box } from "@mui/material";

export default function PaginationLarge() {
  return (
    <Box sx={{ marginTop: "100px", display: "flex", width: "100%", justifyContent: "center" }}>
      <Stack spacing={2}>
        <Pagination count={10} size="large" />
      </Stack>
    </Box>
  );
}
