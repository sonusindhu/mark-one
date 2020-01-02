```jsx
import { Dropdown, DropdownOption } from 'mark-one';
<Dropdown
  name="semesters"
  onChangeHandler={function(){alert('You changed your selection')}}
>
  <DropdownOption value="all">All</DropdownOption>
  <DropdownOption value="fall">Fall</DropdownOption>
  <DropdownOption value="spring">Spring</DropdownOption>
</Dropdown>
```