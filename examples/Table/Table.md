```jsx
import { Table, TableBody, TableRow, TableHeadingCell, TableHead } from 'mark-one';
<Table>
  <TableHead>
    <TableRow>
      <TableHeadingCell scope={'col'}>ID</TableHeadingCell>
      <TableHeadingCell scope={'col'}>First Name</TableHeadingCell>
      <TableHeadingCell scope={'col'}>Last Name</TableHeadingCell>
    </TableRow>
  </TableHead>
  <TableBody isScrollable={true}>
    <TableRow isStriped={true}>
      <td>1</td>
      <td>Kristin</td>
      <td>Glenn</td>
    </TableRow>
    <TableRow>
      <td>2</td>
      <td>Jack</td>
      <td>Thompson</td>
    </TableRow>
    <TableRow isStriped={true}>
      <td>3</td>
      <td>Lianne</td>
      <td>Michaels</td>
    </TableRow>
    <TableRow>
      <td>4</td>
      <td>Gabriela</td>
      <td>Hines</td>
    </TableRow>
    <TableRow isStriped={true}>
      <td>5</td>
      <td>Cindy</td>
      <td>Wong</td>
    </TableRow>
    <TableRow>
      <td>6</td>
      <td>Alex</td>
      <td>Rainer</td>
    </TableRow>
  </TableBody>
</Table>
```