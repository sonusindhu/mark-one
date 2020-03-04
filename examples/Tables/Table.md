The following is an example of the `Table` component with the `alignment` prop set to the enum value `ALIGN.LEFT.`
```jsx
import {
  ALIGN,
  Table,
  TableCell,
  TableBody,
  TableRow,
  TableHeadingCell,
  TableHead,
} from 'mark-one';
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
      <TableCell alignment={ALIGN.LEFT} foo="blue">1</TableCell>
      <TableCell alignment={ALIGN.LEFT} foo="blue">Kristin</TableCell>
      <TableCell alignment={ALIGN.LEFT} foo="blue">Glenn</TableCell>
    </TableRow>
    <TableRow>
      <TableCell alignment={ALIGN.LEFT}>2</TableCell>
      <TableCell alignment={ALIGN.LEFT}>Jack</TableCell>
      <TableCell alignment={ALIGN.LEFT}>Thompson</TableCell>
    </TableRow>
    <TableRow isStriped={true}>
      <TableCell alignment={ALIGN.LEFT}>3</TableCell>
      <TableCell alignment={ALIGN.LEFT}>Lianne</TableCell>
      <TableCell alignment={ALIGN.LEFT}>Michaels</TableCell>
    </TableRow>
    <TableRow>
      <TableCell alignment={ALIGN.LEFT}>4</TableCell>
      <TableCell alignment={ALIGN.LEFT}>Gabriela</TableCell>
      <TableCell alignment={ALIGN.LEFT}>Hines</TableCell>
    </TableRow>
  </TableBody>
</Table>
```

The following is an example of the `Table` component with the `alignment` prop set to the enum value `ALIGN.CENTER.`
```jsx
import {
  ALIGN,
  Table,
  TableCell,
  TableBody,
  TableRow,
  TableHeadingCell,
  TableHead, 
} from 'mark-one';
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
      <TableCell alignment={ALIGN.CENTER}>1</TableCell>
      <TableCell alignment={ALIGN.CENTER}>Kristin</TableCell>
      <TableCell alignment={ALIGN.CENTER}>Glenn</TableCell>
    </TableRow>
    <TableRow>
      <TableCell alignment={ALIGN.CENTER}>2</TableCell>
      <TableCell alignment={ALIGN.CENTER}>Jack</TableCell>
      <TableCell alignment={ALIGN.CENTER}>Thompson</TableCell>
    </TableRow>
    <TableRow isStriped={true}>
      <TableCell alignment={ALIGN.CENTER}>3</TableCell>
      <TableCell alignment={ALIGN.CENTER}>Lianne</TableCell>
      <TableCell alignment={ALIGN.CENTER}>Michaels</TableCell>
    </TableRow>
    <TableRow>
      <TableCell alignment={ALIGN.CENTER}>4</TableCell>
      <TableCell alignment={ALIGN.CENTER}>Gabriela</TableCell>
      <TableCell alignment={ALIGN.CENTER}>Hines</TableCell>
    </TableRow>
  </TableBody>
</Table>
```

The following is an example of the `Table` component with the `alignment` prop set to the enum value `ALIGN.RIGHT.`
```jsx
import {
  ALIGN,
  Table,
  TableCell,
  TableBody,
  TableRow,
  TableHeadingCell,
  TableHead,
} from 'mark-one';
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
      <TableCell alignment={ALIGN.RIGHT}>1</TableCell>
      <TableCell alignment={ALIGN.RIGHT}>Kristin</TableCell>
      <TableCell alignment={ALIGN.RIGHT}>Glenn</TableCell>
    </TableRow>
    <TableRow>
      <TableCell alignment={ALIGN.RIGHT}>2</TableCell>
      <TableCell alignment={ALIGN.RIGHT}>Jack</TableCell>
      <TableCell alignment={ALIGN.RIGHT}>Thompson</TableCell>
    </TableRow>
    <TableRow isStriped={true}>
      <TableCell alignment={ALIGN.RIGHT}>3</TableCell>
      <TableCell alignment={ALIGN.RIGHT}>Lianne</TableCell>
      <TableCell alignment={ALIGN.RIGHT}>Michaels</TableCell>
    </TableRow>
    <TableRow>
      <TableCell alignment={ALIGN.RIGHT}>4</TableCell>
      <TableCell alignment={ALIGN.RIGHT}>Gabriela</TableCell>
      <TableCell alignment={ALIGN.RIGHT}>Hines</TableCell>
    </TableRow>
  </TableBody>
</Table>
```