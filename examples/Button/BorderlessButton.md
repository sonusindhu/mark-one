The following example shows the Borderless Button component with the text color property set to `dark`, which points to the Mark-One theme value of `theme.color.text.dark`.
```jsx
<div>
  <BorderlessButton clickHandler={function(){alert('You clicked the borderless button')}} color="dark">Click Me!</BorderlessButton>
</div>
```
The following example shows the Borderless Button component with the text color property set to `light`, which points to the Mark-One theme value of `theme.color.text.light`.
```jsx
<div style={{backgroundColor: 'black'}}>
  <BorderlessButton clickHandler={function(){alert('You clicked the borderless button')}} color="light">Click Me!</BorderlessButton>
</div>
```
If the color prop is not specified, the color prop is set to its default value of `dark`, which points to the Mark-One theme value of `theme.color.text.dark`.
```jsx
<div>
  <BorderlessButton clickHandler={function(){alert('You clicked the borderless button')}}>Click Me!</BorderlessButton>
</div>
```