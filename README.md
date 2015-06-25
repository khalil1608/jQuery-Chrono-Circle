jQuery-Chrono-Circle (version 0.3)
==================================

jQuery countdown / clock plugin for starting a chronometer easily (with callback).

## What's new ?

* v0.3 :
    - Audio Management.
    - Bugs Fixs.

### Requires

* jQuery's

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

## Installation
Download the code from GitHub and copy the assets directory to your project.
Include the following lines of code in the <head> section of your HTML.

```
<link rel="stylesheet" href="assets/css/jquery-chrono-circle.min.css"/>
<script src="assets/js/jquery-chrono-circle.min.js"></script>
```

## Options

You can pass a set of these options to set a custom behaviour and look for the plugin.

<table>
    <tr>
        <th>Property (Type)</th>
        <th>Default</th>
        <th>Description</th>
    </tr>
     <tr>
        <td><strong>width</strong></td>
        <td>100</td>
        <td>Width</td>
    </tr>
    <tr>
        <td><strong>days</strong></td>
        <td>0</td>
        <td>Number of days</td>
    </tr>
    <tr>
        <td><strong>hours</strong></td>
        <td>0</td>
        <td>Number of hours</td>
    </tr>
    <tr>
        <td><strong>minutes</strong></td>
        <td>0</td>
        <td>Number of minutes</td>
    </tr>
    <tr>
        <td><strong>secondes</strong></td>
        <td>0</td>
        <td>Number of secondes</td>
    </tr>
    <tr>
        <td><strong>direction</strong></td>
        <td>right</td>
        <td>
            <strong>left</strong> : clockwise<br/>
            <strong>right</strong> : counterclockwise
        </td>
    </tr>
    <tr>
        <td><strong>callback</strong></td>
        <td>null</td>
        <td>Callback at the end of time</td>
    </tr>
    <tr>
        <td><strong>function</strong></td>
        <td>null</td>
        <td>Function when clock start</td>
    </tr>
     <tr>
        <td><strong>borderColorActive</strong></td>
        <td>#A2ECFB</td>
        <td>Color of active bar</td>
    </tr>
     <tr>
        <td><strong>borderColorInactive</strong></td>
        <td>#39B4CC</td>
        <td>olor of static bar</td>
    </tr>
    <tr>
         <td><strong>backgroundColor</strong></td>
         <td>#f9f9f9</td>
         <td>Background color</td>
    </tr>
    <tr>
         <td><strong>audio</strong></td>
         <td>null</td>
         <td>
            <strong>Options :</strong><br/>
            <strong>"src"</strong> : Link to the audio file<br/>
            <strong>"startTimeAudio"</strong> : Second from the moment the sound starts<br/>
        </td>
    </tr>
</table>


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
                   "minutes": 1,
                   "seconds": 10,
                   "audio": [
                       {
                           "src": 'assets/audio/clock-ticking-1.mp3',
                           "startTimeAudio": 59 //The audio file starts when 115 seconds remain
                       }
                   ],
                   'callback': function () {
                       //Do Something
                   }
               });
        });
    </script>
</body>

</html>
```

## Example
<http://jsfiddle.net/khalil1608/r7naae0c/8/>

## Notes

* Requires jQuery 1.7+.