# jQuery-Chrono-Circle
JQuery plugin for starting a chronometer easily

jQuery-Chrono-Circle (version 0.1)
==================================

jQuery plugin for starting a chronometer easily.

## Example Usage
<http://jsfiddle.net/khalil1608/r7naae0c/>

### HTML

```html
 <div class="chronometer">
    <div id="activeBorder" class="active-border">
        <div id="circle" class="circle">
            <span class="prec">0%</span>
        </div>
    </div>
</div>
```

### jQuery

Use the plugin as follows:

```js
$('.chronometer').chronometer({
    "days": 0,
    "hours": 0,
    "minutes": 10,
    "seconds": 10
});
```

### CSS

The plugin automatically adds `class="placeholder"` to the elements who are currently showing their placeholder text. You can use this to style placeholder text differently:

```css
input, textarea { color: #000; }
.placeholder { color: #aaa; }
```

I’d suggest sticking to the `#aaa` color for placeholder text, as it’s the default in most browsers that support `@placeholder`. If you really want to, though, you can [style the placeholder text in some of the browsers that natively support it](https://stackoverflow.com/a/2610741/96656).

## Installation
Download the code from GitHub and copy the dist directory to your project.
Include the following lines of code in the <head> section of your HTML.

```
<link rel="stylesheet" href="assets/css/jquery-chrono-circle.min.css"/>
<script src="assets/js/jquery-chrono-circle.min.js"></script>
```

## Example use

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Jquery Chrono Circle Plugin</title>
    <link rel="stylesheet" href="assets/css/jquery-chrono-circle.min.css"/>
</head>
<body>
    <div class="chronometer">
        <div id="activeBorder" class="active-border">
            <div id="circle" class="circle">
                <span class="prec">0%</span>
            </div>
        </div>
    </div>
    <script src="//code.jquery.com/jquery-1.11.3.min.js"></script>
    <script src="assets/js/jquery-chrono-circle.min.js"></script>
    <script type="text/javascript">
        $(document).ready(function() {
            $('.chronometer').chronometer({
                "days": 0,
                "hours": 0,
                "minutes": 10,
                "seconds": 10
            });
        });
    </script>
</body>

</html>
```

## Notes

* Requires jQuery 1.7+.