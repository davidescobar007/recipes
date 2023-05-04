/* eslint-disable react/no-multi-comp */
"use client"

import Paper from "@mui/material/Paper"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"

import Row from "./tableRow"

export default function UiTable() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell align="right">Qty</TableCell>
            <TableCell align="right">Unit</TableCell>
            <TableCell align="right">Food</TableCell>
            <TableCell align="right">Nutrients</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {/* to be changed for real data from api */}
          <Row row={[1, 2]} />
        </TableBody>
      </Table>
    </TableContainer>
  )
}
