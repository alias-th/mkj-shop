import { Box, Typography } from "@mui/material";
import { FC } from "react";

interface Props {}

const ContactInfo: FC<Props> = (props): JSX.Element => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      <Typography component="h6" variant="h5" color="inherit" gutterBottom>
        บริษัท เอ็ม เค เจ พรีซิสชั่น จำกัด
      </Typography>
      <Typography variant="h6" color="inherit" fontWeight="300" lineHeight="1.6">
        93/312 <br></br>หมู่ 3 ถนนพระรามที่ 2 ตำบลนาดี <br></br> อำเภอเมืองสมุทรสาคร
        จังหวัดสมุทรสาคร 74000
      </Typography>
      <Typography component="h6" variant="h5" color="inherit" gutterBottom>
        ติดต่อ
      </Typography>
      <Typography variant="h6" color="inherit" fontWeight="300" lineHeight="1.6">
        Tel : 034 433525 <br></br>Line : MKJ <br></br>E-Mail : mkj@mkj.com
      </Typography>
    </Box>
  );
};

export default ContactInfo;
