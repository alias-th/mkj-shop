import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

export default function PopularityFilter() {
  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ minWidth: 80, width: "100%" }}>
        <InputLabel id="demo-simple-select-autowidth-label">เรียงตาม</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={age}
          onChange={handleChange}
          autoWidth
          label="เรียงตาม"
        >
          <MenuItem value="">
            <em>none</em>
          </MenuItem>
          <MenuItem value={10}>ความนิยม</MenuItem>
          <MenuItem value={21}>สินค้ามาใหม่</MenuItem>
          <MenuItem value={22}>สินค้าขายดี</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
