import { NextPage } from "next";
import { Box } from "@mui/material";
import AdminAppBar from "@/components/admin/AdminAppBar";
import { FC, useState } from "react";
import AdminDrawer from "@/components/admin/AdminDrawer";
import AdminMainContent from "@/components/admin/AdminMainContent";

interface Props {}

const AdminPage: FC<Props> = (): JSX.Element => {
  const [open, setOpen] = useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <AdminAppBar open={open} handleDrawerOpen={handleDrawerOpen} />
      <AdminDrawer open={open} handleDrawerClose={handleDrawerClose} />
      <AdminMainContent />
    </Box>
  );
};

export default AdminPage;
