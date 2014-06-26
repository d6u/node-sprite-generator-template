# Installation

##### 1. Install [XQuartz](https://xquartz.macosforge.org/landing/) (requires logout)

##### 2. Brew install other dependencies

```
brew install cairo imagemagick
```

##### 3. Include __xcb-shm__ package in `PKG_CONFIG_PATH`

```
export PKG_CONFIG_PATH="/opt/X11/lib/pkgconfig:$PKG_CONFIG_PATH"
```

##### 4. Install __[node-sprite-generator](https://github.com/selaux/node-sprite-generator)__ package

```
npm install
```

##### 5. Open `index.html` to view the results.

# Details

For the sake of simplicity: 

1. I only generated CSS. __node-sprite-generator__ is capable generating LESS or SASS.
2. Retina sprite only works in Chrome. Because I only used `(-webkit-min-device-pixel-ratio: 2)` for media query.
