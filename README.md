# Embed a Google Drive Folder with VanillaJS & Web Component 

![## Example on CodePen](https://raw.githubusercontent.com/nassimspace/GDrive-Folder-Embed/main/screenshot.jpg)


### How To Use:
1. Load the script
2. in your HTML markup, insert the following tag:
```html
<gdf-embed folderID="1ILeC9USXuExQcLCCJVmFT6M85g7eAk_U" render="grid">
</gdf-embed>
``` 

The ***"folderID"*** attribute is the Google Drive folder ID of the publicly shared folder.
The ***"render"*** attribute can be set to either ***"grid"*** or ***"list"*** .

---
### Bonus
I usually like to *'freeze'* ('**Object.freeze()**') my components so I added the ***deepFreeze*** function from [30SecsOfCode.org](https://www.30secondsofcode.org/js/s/deep-freeze) .

If you wish to remove this, you can simply replace the following portion 
```js
const  deepFreeze = obj  => {
Object.keys(obj).forEach(prop  => {
if (typeof  obj[prop] === 'object') deepFreeze(obj[prop]);
});
return  Object.freeze(obj);
};

const  frozenGDFE = deepFreeze(GDriveFolderEmbed);
customElements.define("gdf-embed", frozenGDFE);
```

with the following:

```js
customElements.define("gdf-embed", GDriveFolderEmbed);
```

(When using VanillaJS components, you would usually load the ***deepFreeze*** Function separately (so it can be accessed by any components). 

I don't usually include it within the component itself, I just added that in to showcase a neat trick with components!

### Why do all this when you can simply directly put an iframe?
1. Built this to personally learn about the intricacies of web components
2. uses **shadowRoot** so styles are encapsulated
3. no other good reasons 🤷‍♂️
---
### License
**MIT**
