# Install guide: https://tailwindcss.com/docs/installation/using-vite
## Follow Steps: 2 - 4 

# ~ Commonly used css styles but the Tailwind way ~

## NOTE: Most tailwind properties range from 1-10 for pixel values. Each number is about 4px, Ex: 1 = 4px, 2 = 8px, 3 = 12px, etc...

## Padding & Margin (these all can range from 1 - 10, double check docs if it's not working like you want it to)
    - Padding in all directions: p-1, p-2, p-3, p-[10px] <--- if you want to be specific
        - Padding left & right: px-1, px-2, px-3, etc...
        - Padding top & bottom: py-1, py-2, py-3
        - Padding on a single side: pt-1 (top), pb-1 (bottom), pl-1 (left), pr-1 (right)

    All the same things apply to Margin, just swap the "p's" to an "m"
    - Margin in all directions: m-1, m-2, m-3, m-[10px] <--- if you want to be specific
        - Margin left & right: mx-1, mx-2, mx-3, etc...
        - Margin top & bottom: my-1, my-2, my-3
        - Margin on a single side: mt-1 (top), mb-1 (bottom), ml-1 (left), mr-1 (right)

## Positioning Element(s) in Tailwind
    - "flex justify-center items-center" (all items centered in the middle of the container)
    - Example:
        - <div className="flex justify-center items-center">
        -   <h1>Some Text</h1>
        - </div>

    - "flex justify-between items-center (items have the most available space between each other)
    - the two h1's will be at opposite sides of the container (div)
        - <div className="flex justify-center items-center">
        -   <h1>Element 1</h1>  
        -   <h1>Element 2</h1>
        - </div>

    - if you want space between multiple elements use the "gap" property along with flex
        - example: gap-2 ( put 4px's between the element and the element next to it )

## Sizing
    - Some properties in tailwind have predefined common sizes that you can use
        - xs (extra small 12px), sm (small 14px), md (medium 16px), lg (large 18px), xl (extra large), 2xl, 3xl, 4xl, 5xl, etc

### Text
    - Super common things you might do with text
    - Center text: text-center 
    - Setting text size: text-sm, text-md, text-xl, etc
    - Setting text color: text-blue-500
        - To break down this styling text-[any color you want]-[the shade of that color]
        - Color shade from lightest to darkest is: 100 (lightest shade), 200, 300, 400, 500, 600, 700, 800, 900 (darkest)
            - No inbetween color ranges only in the whole hundreds: Example 150, 180, 327 DOES NOT EXIST

### Borders
    - set border width: border(1px), border-2 (2px), border-10 (10px)
    - set border color: border-blue-100
    - Rounding the corners on your borders: rounded-xs, rounded-sm, rounded-md, rounded-xl

### Width & Height
    - w-12, h-12 (width and height set to kinda 12px's it's a calculated value)
    - has sm, md, lg, xl, etc property on it as well these are predefined screen sizes
    - w-full take up full amount of space (won't work if the outer container doesn't have a defined width)