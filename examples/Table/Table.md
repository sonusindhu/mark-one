```jsx
import { Table, TableCell, TableRow, TableHeadingCell } from 'mark-one';
<Table>
  <thead>
    <TableRow>
      <TableHeadingCell scope={'col'}>ID</TableHeadingCell>
      <TableHeadingCell scope={'col'}>First Name</TableHeadingCell>
      <TableHeadingCell scope={'col'}>Last Name</TableHeadingCell>
    </TableRow>
  </thead>
  <tbody>
    <TableRow isStriped={true}>
      <TableCell>1</TableCell>
      <TableCell>Kristin</TableCell>
      <TableCell>Glenn</TableCell>
    </TableRow>
    <TableRow>
      <TableCell>2</TableCell>
      <TableCell>Jack</TableCell>
      <TableCell>Thompson</TableCell>
    </TableRow>
    <TableRow isStriped={true}>
      <TableCell>3</TableCell>
      <TableCell>Lianne</TableCell>
      <TableCell>Michaels</TableCell>
    </TableRow>
    <TableRow>
      <TableCell>4</TableCell>
      <TableCell>Gabriela</TableCell>
      <TableCell>Hines</TableCell>
    </TableRow>
    <TableRow isStriped={true}>
      <TableCell>5</TableCell>
      <TableCell>Cindy</TableCell>
      <TableCell>Wong</TableCell>
    </TableRow>
    <TableRow>
      <TableCell>6</TableCell>
      <TableCell>Alex</TableCell>
      <TableCell>Rainer</TableCell>
    </TableRow>
  </tbody>
</Table>
```