# Generative Graphics

Generative and animated graphic. The basic motion of the graphic is controlled by a Perlin Noise RGB texture.

## Development setup

### Requirements

* [Node](https://nodejs.org/en/download/)

### Run

```bash
npm install
npm run watch

Open http://localhost:5000/webpack-dev-server/
```

### Change textures

* Noise texture:
  * A perlin noise textures can be generated with Gimp and the [Solid Noise Plugin](https://docs.gimp.org/en/plug-in-solid-noise.html)
    * Use the sample assets/texture_sample.xcf
    * For each layer:
      * Filter -> Render -> Clouds -> Solid Noise...
        * Check "Tilable"
        * Cick "New Seed"
      * Colors -> Colorize... -> Red/Green/Blue (One color for each layer)
      * Layer Mode: Difference
    * Export as png
  * 512x512
  * Directory: public/textures/noise


* Color texture:
  * 512x512
  * Directory: public/textures/color


* Background texture:
  * 1920x1080
  * Directory: public/textures/background

Add filenames in model.js constants:
```
export const noiseTextures = [
  ...,
  <add name of noise file here>
]

export const colorTextures = [
  ...,
  <add name of color file here>
]

export const backgroundTextures = [
  ...,
  <add name of background file here>
]
```

### Change parameters

Open http://localhost:5000/webpack-dev-server/?debug=true to show the UI to change graphic parameters. Changes can be exported as presets. Presets can be added to the presets.json to make them available.
