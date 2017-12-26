import Backbone from "backbone-model"

export const noiseTextures = [
  "default"
]
export const colorTextures = [
  "None",
  "default"
]
export const backgroundTextures = [
  "None",
  "default"
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
