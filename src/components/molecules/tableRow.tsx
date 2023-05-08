import TableCell from "@mui/material/TableCell"
import TableRow from "@mui/material/TableRow"

interface Props {
  row: any[]
}

export default function Row({ row }: Props) {
  return (
    <TableRow>
      {row?.map((item) => (
        <TableCell align="right" key={item}>
          {item.quantity}
        </TableCell>
      ))}
    </TableRow>
  )
}
