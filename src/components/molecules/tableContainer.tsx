/* eslint-disable react/no-multi-comp */
"use client"

import Paper from "@mui/material/Paper"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"

import { Children } from "@/utils/types"

export default function UiTable({ children }: Children): JSX.Element {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Qty</TableCell>
            <TableCell align="left">Unit</TableCell>
            <TableCell align="left">Food</TableCell>
            <TableCell align="left">Nutrients</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{children}</TableBody>
      </Table>
    </TableContainer>
  )
}
