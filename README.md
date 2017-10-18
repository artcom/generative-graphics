# Generative Graphic

Generative and animated graphic. The basic motion of the graphic is controlled by a Perlin Noise RGB texture.

## Development setup

### Requirements

* [Node](https://nodejs.org/en/download/)

### Run

```bash
npm install
npm run watch

Open http://localhost:5000/webpack-dev-server/?debug=true
```

### Change textures

* Noise texture:
  * 512x512
  * Directory: public/textures/noise

* Color texture:
  * 512x512
  * Directory: public/textures/color

* Background texture:
  * 1920x1080
  * Directory: public/textures/background

Add filenames in model.js constants.
