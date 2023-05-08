import Skeleton from "@mui/material/Skeleton"
import TableCell from "@mui/material/TableCell"
export default function TableSkeletin(): JSX.Element {
  return (
    <>
      {[...Array(4)].map((item) => (
        <TableCell align="left" key={item}>
          {[...Array(3)].map((_) => (
            <Skeleton key={_} sx={{ my: 4, mx: 1 }} variant="rectangular" />
          ))}
        </TableCell>
      ))}
    </>
  )
}
