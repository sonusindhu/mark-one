## Mark One Theme Specimens

### Background Colors

```jsx
import styled from 'styled-components';

const BackgroundDiv = styled.div`
  background: ${({theme, value, modifier}) => (
    modifier
    ? theme.color.background[modifier][value]
    : theme.color.background[value])
  };
  padding: ${({theme}) => (theme.ws.medium)};
  margin-top: ${({theme}) => (theme.ws.small)};
  color: ${({theme, fontColor}) => (theme.color.text[fontColor])};
`;
const getFontColor = (shade, meaning) => {
  if (
    shade === 'accent'
    || (meaning === 'info'
      && shade === 'medium')
  ) {
    return 'light';
  }
  return /dark/.test(shade) ? 'light' : 'dark';
}

<>
  {[
     'light',
     'subtle',
     'medium',
     'dark',
     'darker',
     'accent',
  ].map((color) => (
    <BackgroundDiv
      fontColor={getFontColor(color)}
      value={color}
    >
      Background: {color}
    </BackgroundDiv>
  ))}
  {['info', 'positive', 'negative'].map((meaning) => (
    ['light', 'medium', 'dark'].map((shade) => (
      <BackgroundDiv
        value={shade}
        modifier={meaning}
        fontColor={getFontColor(shade, meaning)}
      >
        {meaning}: {shade}
      </BackgroundDiv>
    ))
  ))}
</>
```

### Typography

```jsx
import styled from 'styled-components';

const TextBlock = styled.span`
  font-family: ${({theme, type}) => theme.font[type].family};
  font-weight: ${({theme, type}) => theme.font[type].weight};
  font-size: ${({theme, type}) => theme.font[type].size}
`;

<>
  <div>
    <TextBlock type="title">This is the title</TextBlock>
  </div>
  <div>
    <TextBlock type="heading">This is the heading type</TextBlock>
  </div>
  <div>
    <TextBlock type="body">This is body text</TextBlock>
  </div>
  <div>
    <TextBlock type="bold">This is bold text</TextBlock>
  </div>
  <div>
    <TextBlock type="data">This is text for rendering data</TextBlock>
  </div>
</>
```

### Borders and Shadows

```jsx
import styled from 'styled-components';

const BorderDiv = styled.div`
  background: ${({theme}) => (theme.color.background.subtle)
  };
  padding: ${({theme}) => (theme.ws.medium)};
  margin-top: ${({theme}) => (theme.ws.large)};
  border: ${({theme, border})=> (theme.border[border])}
  box-shadow: ${({theme, shadow})=> (theme.shadow[shadow])}
`;

<div>
  {['xlight', 'light', 'medium'].map((shadow) => (
    ['hairline', 'light', 'heavy'].map((border) => (
      <BorderDiv
        border={border}
        shadow={shadow}
      >
        {border} border | {shadow} shadow
      </BorderDiv>
    ))
  ))}
</div>
```
