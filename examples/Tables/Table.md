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

The following is an example of the `Table` component with the `alignment` prop set to the enum value `ALIGN.CENTER.` This example also demonstrates the usage of the `variant` property, which is set to `TEXTVARIANT.NEGATIVE` for two table cells and `TEXTVARIANT.MEDIUM` for another two table cells.

```jsx
import {
  ALIGN,
  Table,
  TableCell,
  TableBody,
  TableRow,
  TableHeadingCell,
  TableHead,
  TEXTVARIANT,
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
      <TableCell
        alignment={ALIGN.CENTER}
        variant={TEXTVARIANT.MEDIUM}
      >
        Jack
      </TableCell>
      <TableCell
        alignment={ALIGN.CENTER}
        variant={TEXTVARIANT.MEDIUM}
      >
        Thompson
      </TableCell>
    </TableRow>
    <TableRow isStriped={true}>
      <TableCell alignment={ALIGN.CENTER}>3</TableCell>
      <TableCell
        alignment={ALIGN.CENTER}
        variant={TEXTVARIANT.NEGATIVE}
      >
        Lianne
      </TableCell>
      <TableCell
        alignment={ALIGN.CENTER}
        variant={TEXTVARIANT.NEGATIVE}
      >
        Michaels
      </TableCell>
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

The following is an example of the `Table` component in which the `alignment` is not set. In this case, the `alignment` property defaults to `ALIGN.LEFT` per our default props. This example also shows the `backgroundColor` property set to the value `#ffdd2e` for a `TableCell.`

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
      <TableCell>1</TableCell>
      <TableCell>Kristin</TableCell>
      <TableCell>Glenn</TableCell>
    </TableRow>
    <TableRow>
      <TableCell backgroundColor='#ffdd2e'>2</TableCell>
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
  </TableBody>
</Table>
```

### More Complex Layouts

Some tables may require more complex layouts, such as cells that span multiple columns/rows, or layered headers. For example:

```jsx
import {
  ALIGN,
  Table,
  TableCell,
  TableBody,
  TableRow,
  TableRowHeadingCell,
  TableHeadingCell,
  TableHeadingSpacer,
  TableCellList,
  TableCellListItem,
  TableHead,
} from 'mark-one';

<Table>
  <col />
  <colgroup span="4" />
  <colgroup span="4" />
  <TableHead>
    <TableRow noHighlight>
      <TableHeadingSpacer />
      <TableHeadingCell
        backgroundColor="transparent"
        colSpan="4"
        scope="colgroup"
      >
        Fall 2019
      </TableHeadingCell>
      <TableHeadingCell
        backgroundColor="transparent"
        colSpan="4"
        scope="colgroup"
      >
        Spring 2020
      </TableHeadingCell>
    </TableRow>
    <TableRow>
      <TableHeadingCell scope="col" rowSpan="2">Course</TableHeadingCell>
      <TableHeadingCell scope="col" rowSpan="2">Instructors</TableHeadingCell>
      <TableHeadingCell colSpan="3">Enrollment</TableHeadingCell>
      <TableHeadingCell scope="col" rowSpan="2">Instructors</TableHeadingCell>
      <TableHeadingCell colSpan="3">Enrollment</TableHeadingCell>
    </TableRow>
    <TableRow>
      <TableHeadingCell scope="col">Pre</TableHeadingCell>
      <TableHeadingCell scope="col">Study</TableHeadingCell>
      <TableHeadingCell scope="col">Actual</TableHeadingCell>
      <TableHeadingCell scope="col">Pre</TableHeadingCell>
      <TableHeadingCell scope="col">Study</TableHeadingCell>
      <TableHeadingCell scope="col">Actual</TableHeadingCell>
    </TableRow>
  </TableHead>
  <TableBody>
    <TableRow>
      <TableRowHeadingCell scope="row">CS 50</TableRowHeadingCell>
      <TableCell>
        <TableCellList>
          <TableCellListItem>
            Glenn, Kristin
          </TableCellListItem>
          <TableCellListItem>
            Thompson, Jack
          </TableCellListItem>
        </TableCellList>
      </TableCell>
      <TableCell>600</TableCell>
      <TableCell>480</TableCell>
      <TableCell>300</TableCell>
      <TableCell></TableCell>
      <TableCell />
      <TableCell />
      <TableCell />
    </TableRow>
    <TableRow isStriped>
      <TableRowHeadingCell scope="row">CS 51</TableRowHeadingCell>
      <TableCell></TableCell>
      <TableCell />
      <TableCell />
      <TableCell />
      <TableCell>
        <TableCellList>
          <TableCellListItem>
            Michaels, Lianne
          </TableCellListItem>
        </TableCellList>
      </TableCell>
      <TableCell>185</TableCell>
      <TableCell>140</TableCell>
      <TableCell>120</TableCell>
    </TableRow>
    <TableRow>
      <TableRowHeadingCell scope="row">ES 100</TableRowHeadingCell>
      <TableCell>
        <TableCellList>
          <TableCellListItem>
            Hines, Gabriela
          </TableCellListItem>
        </TableCellList>
      </TableCell>
      <TableCell>250</TableCell>
      <TableCell>175</TableCell>
      <TableCell>80</TableCell>
      <TableCell>
        <TableCellList>
          <TableCellListItem>
            Hines, Gabriela
          </TableCellListItem>
        </TableCellList>
      </TableCell>
      <TableCell>300</TableCell>
      <TableCell>150</TableCell>
      <TableCell>100</TableCell>
    </TableRow>
  </TableBody>
</Table>
```

