# jackdan_picture_lightbox2

## SetUp
```
# Download this directions
Open the index.html file in the browser(IE, firefox, chrome, safaris)
```

------

## Result
- before:

![before_picture][1]

- after:

![after_picture][2]

------

## description-lightbox
### Get Starting
- 1. Download the latest version as a zip file
- Or use a package manager...
- NPM: `npm install lightbox2 --save`
- Bower: `bower install lightbox --save`

- 2. Open up the **zip file** and take a peek at the barebones, working example that is included in the `/examples` folder.

- 3. Ready to set Lightbox up on your page? Start by including the **Lightbox CSS** and **Javascript**. You can grab both these files from the `/dist` folder.
    - Include the CSS at the top of your page in your `<head>` tag:
    - `<link href="path/to/lightbox.css" rel="stylesheet">`;
    - Include the Javascript at the bottom of your page before the closing `</body>` tag:
    - `<script src="path/to/lightbox.js"></script>`

- 4. Make sure **jQuery**, which is required by Lightbox, is also loaded.
    - If you already use jQuery on your page, make sure it is loaded before `lightbox.js`, **jQuery 1.7 or greater is required**.
    - If you are not currently using jQuery, I've created a packaged file that includes both Lightbox and jQuery. Include `dist/js/lightbox-plus-jquery.js` instead of `lightbox.js`

- 5. Confirm that the four images loaded by `lightbox.css` are in the correct location. You can grab the images from the `/dist/images` folder.

### Initialize with HTML
- **Single images**. Add a `data-lightbox`attribute to any image link to enable Lightbox. For the value of the attribute, use a unique name for each image. 
- For example:
```
<a href="images/image-1.jpg" data-lightbox="image-1" data-title="My caption">Image #1</a>
```

- Optional:
    - Add a `data-title` attribute if you want to show a caption.
    - Add a `data-alt` attribute if you want to set the attribute of the linked image.

- **Image sets**. If you have a group of related images that you would like to combine into a set, use the same `data-lightbox` attribute value for all of the images. 
- For example:
```
<a href="images/image-2.jpg" data-lightbox="roadtrip">Image #2</a>
<a href="images/image-3.jpg" data-lightbox="roadtrip">Image #3</a>
<a href="images/image-4.jpg" data-lightbox="roadtrip">Image #4</a>
```

### Optional
- If you want to change any of the default options, call the option method.
```
<script>
    lightbox.option({
      'resizeDuration': 200,
      'wrapAround': true
    })
</script>
```

| Options | Default | Description |
| --- | --- | --- |
| alwaysShowNavOnTouchDevices | false |     If true, the left and right navigation arrows which appear on mouse hover when viewing image sets will always be visible on devices which support touch. |
| albumLabel | "Image %1 of %2" | The text displayed below the caption when viewing an image set. The default text shows the current image number and the total number of images in the set. |
| disableScrolling | false | If true, prevent the page from scrolling while Lightbox is open. This works by settings overflow hidden on the body. |
| fadeDuration | 600 | The time it takes for the Lightbox container and overlay to fade in and out, in milliseconds. |
| fitImagesInViewport | true | If true, resize images that would extend outside of the viewport so they fit neatly inside of it. This saves the user from having to scroll to see the entire image. |
| imageFadeDuration | 600 | The time it takes for the image to fade in once loaded, in milliseconds. |
| maxWidth | | If set, the image width will be limited to this number, in pixels. Aspect ratio will not be maintained. |
| maxHeight | | If set, the image height will be limited to this number, in pixels. Aspect ratio will not be maintained. |
| positionFromTop | 50 | The distance from top of viewport that the Lightbox container will appear, in pixels. |
| resizeDuration | 700 | The time it takes for the Lightbox container to animate its width and height when transition between different size images, in milliseconds. |
| showImageNumberLabel | true | If false, the text indicating the current image number and the total number of images in set (Ex. "image 2 of 4") will be hidden. |
| wrapAround | false | If true, when a user reaches the last image in a set, the right navigation arrow will appear and they will be to continue moving forward which will take them back to the first image in the set. |

### Browser support
- Lightbox2 has been tested successfully in the following browsers:

- Internet Explorer.
```
The lightbox-plus-jquery.js file includes jQuery v2.x and supports IE 9+. If you want to support IE 6, 7, and 8, use your own copy of jQuery v1.x with lightbox.js.
Chrome
Safari
Firefox
iOS Safari
iOS Chrome
Android Browser
Android Chrome
```


  [1]: ./images/before.png "before.png"
  [2]: ./images/after.png "after.png"