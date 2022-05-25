The Popover component displays a small information window next to other elements in the page. The default behavior is to display the element directly above and to the right of its original DOM location, though the `xOffset` and `yOffset` values can be used to move it farther away (in the case of positive values) or down and to the left (in the case of negative values).

```tsx
import { useState } from 'react';
import { Button, Popover } from 'mark-one';

const [popoverVisible, setPopoverVisible] = useState(false);

<>
  <Popover
   title="Popover"
   xOffset={'1em'}
   yOffset={'5px'}
   isVisible={popoverVisible}
  >
    Additional Information
  </Popover>
  <Button
    type="button"
    onClick={() => { setPopoverVisible((current) => !current); }}
  >
    Toggle Popover
  </Button>
</>
```

The `xOffset`, `yOffset`, and `title` props are all optional, and can be omitted if not needed.

```tsx
import { useState } from 'react';
import { Button, Popover } from 'mark-one';

const [popoverVisible, setPopoverVisible] = useState(false);

<>
  <Popover
   isVisible={popoverVisible}
  >
    Minimum viable popover 
  </Popover>
  <Button
    type="button"
    onClick={() => { setPopoverVisible((current) => !current); }}
  >
    Toggle Popover
  </Button>
</>
```
