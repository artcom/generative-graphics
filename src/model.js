import Backbone from "backbone-model"

export const noiseTextures = [
  "perlin-noise-seamless-rgb-512.png",
  "perlin-noise-seamless-rgb-512-2.png",
  "perlin-noise-seamless-rgb-512-3.png",
  "perlin_seamless_test.png",
  "rgb_compose_rot1.jpg",
  "rotmodule.jpg",
  "test.jpg",
  "rgb_compose_rot_l.jpg"
]
export const colorTextures = [
  "None",
  "perlin_noise_seamless_blue_512.png",
  "color_noise_magenta_512.png",
  "color_noise_rgb_512.png",
  "color_noise_rgb_neon_512.png",
  "weather_blue.png",
  "noise_grey.png",
  "noise_gold.png",
  "color_morning_glory.png",
  "mixed.jpg",
  "work_nature.png",
  "work_nature_new.png",
  "work_nature_new_2.png"
]
export const backgroundTextures = [
  "None",
  "bg_grey_spot.jpg",
  "bg_warm_vignette.png",
  "bg_light_top_left.jpg",
  "bg_light_spot_top.jpg",
  "bg_light_spot_top_bright.jpg",
  "bg_light_spot_center.jpg",
  "bg_gradient_bright_bottom.jpg",
  "bg_morning.jpg",
  "bg_morning_2.jpg",
  "bg_guests_spot_center.jpg",
  "bg_soft_spot_center.jpg",
  "bg_morning_colourful.jpg",
  "bg_morning_colourful.png",
  "bg_guests.jpg",
  "bg_guests.png",
  "bg_grey_spot.png",
  "bg_soft_spot_center.png"
]
export const morph = ["off", "forwards", "backwards"]
export const objects3d = ["THREE.Mesh", "THREE.Points"]
export const geometries = [
  "THREE.SphereGeometry",
  "THREE.PlaneGeometry",
  "THREE.BoxGeometry",
  "THREE.TorusKnotGeometry"
]

export const blendingFunctions = [
  "NormalBlending",
  "AdditiveBlending",
  "SubtractiveBlending",
  "MultiplyBlending"
]

export default class Model extends Backbone.Model {
  defaults() {
    return {
      noiseTexture: noiseTextures[0],
      colorTexture: colorTextures[0],
      backgroundTexture: backgroundTextures[0],
      geometry: geometries[0],
      object3d: objects3d[0],
      pointSize: 1.0,
      wireframe: false,
      lineWidth: 1,
      segmentsX: 256,
      segmentsY: 256,
      scale: 0.2,
      rotationSpeedX: 0.01,
      rotationSpeedY: 0.01,
      rotationSpeedZ: 0,
      zoom: 1,
      cameraPosZ: 1.5,
      speed: 0.05,
      pause: false,
      morph: morph[0],
      morphStep: 0.0,
      background: [255, 255, 255],
      blending: blendingFunctions[0],
      opacity: 0.1,
      pointLight1: true,
      pointLight2: false,
      directionalLightX: true,
      directionalLightY: false,
      directionalLightZ: false,
      ambientLight: [255, 255, 255],
      depthTest: false,
      preserveDrawingBuffer: true,
      planeOpacity: 0.02
    }
  }

  set(attributes, options) {
    if (attributes.rotationX) {
      attributes.rotationX = this.clampRotation(attributes.rotationX)
    } else if (attributes.rotationY) {
      attributes.rotationY = this.clampRotation(attributes.rotationY)
    } else if (attributes.rotationZ) {
      attributes.rotationZ = this.clampRotation(attributes.rotationZ)
    }

    return Backbone.Model.prototype.set.call(this, attributes, options)
  }

  clampRotation(value) {
    if (value < 0) {
      value = value + 2 * Math.PI
    }

    return value > 2 * Math.PI ? value - 2 * Math.PI : value
  }
}
