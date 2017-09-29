import dat from "dat-gui"
import presets from "./presets.json"
import {
  noiseTextures,
  colorTextures,
  backgroundTextures,
  morph,
  objects3d,
  geometries,
  blendingFunctions
} from "./model"

export default class Gui {
  constructor(presetName, model) {
    this.gui = new dat.GUI({
      load: presets,
      preset: presetName
    })
    this.model = model
    this.internalModel = Object.assign({}, model.attributes)
    this.gui.remember(this.internalModel)
    this.setupControls()
  }

  subscribeToModel() {
    this.model.on("change:rotationX", () => {
      this.internalModel.rotationX = this.model.attributes.rotationX
    })

    this.model.on("change:rotationY", () => {
      this.internalModel.rotationY = this.model.attributes.rotationY
    })

    this.model.on("change:rotationZ", () => {
      this.internalModel.rotationZ = this.model.attributes.rotationZ
    })
  }

  setupControls() {
    this.gui.add(this.internalModel, "noiseTexture", noiseTextures).onFinishChange(
      (value) => this.model.set({ noiseTexture: value })
    )
    this.gui.add(this.internalModel, "colorTexture", colorTextures).onFinishChange(
      (value) => this.model.set({ colorTexture: value })
    )
    this.gui.add(this.internalModel, "object3d", objects3d).onFinishChange(
      (value) => this.model.set({ object3d: value })
    )
    this.gui.add(this.internalModel, "geometry", geometries).onFinishChange(
      (value) => this.model.set({ geometry: value })
    )
    this.gui.add(this.internalModel, "preserveDrawingBuffer").onFinishChange(
        (value) => this.model.set({ preserveDrawingBuffer: value })
    )
    this.gui.add(this.internalModel, "planeOpacity", 0, 1.0).onChange(
        (value) => this.model.set({ planeOpacity: value })
    )
    this.gui.addColor(this.internalModel, "background").onChange(
        (value) => this.model.set({ background: value })
    )
    this.gui.add(this.internalModel, "backgroundTexture", backgroundTextures).onFinishChange(
        (value) => this.model.set({ backgroundTexture: value })
    )
    this.gui.add(this.internalModel, "scale", 0, 1).onChange(
      (value) => this.model.set({ scale: value })
    )
    this.gui.add(this.internalModel, "wireframe").onFinishChange(
      (value) => this.model.set({ wireframe: value })
    )
    this.gui.add(this.internalModel, "lineWidth", 0, 3).onChange(
      (value) => this.model.set({ lineWidth: value })
    )
    this.gui.addColor(this.internalModel, "ambientLight").onChange(
      (value) => this.model.set({ ambientLight: value })
    )
    this.gui.add(this.internalModel, "directionalLightX").onFinishChange(
      (value) => this.model.set({ directionalLightX: value })
    )
    this.gui.add(this.internalModel, "directionalLightY").onFinishChange(
      (value) => this.model.set({ directionalLightY: value })
    )
    this.gui.add(this.internalModel, "directionalLightZ").onFinishChange(
      (value) => this.model.set({ directionalLightZ: value })
    )
    this.gui.add(this.internalModel, "pointLight1").onFinishChange(
      (value) => this.model.set({ pointLight1: value })
    )
    this.gui.add(this.internalModel, "pointLight2").onFinishChange(
      (value) => this.model.set({ pointLight2: value })
    )
    this.gui.add(this.internalModel, "morph", morph).onFinishChange(
      (value) => this.model.set({ morph: value })
    )
    this.gui.add(this.internalModel, "morphStep", 0, 1).onChange(
      (value) => this.model.set({ morphStep: value })
    )
    this.gui.add(this.internalModel, "segmentsX", 0, 512).step(1).onChange(
      (value) => this.model.set({ segmentsX: value })
    )
    this.gui.add(this.internalModel, "segmentsY", 0, 512).step(1).onChange(
      (value) => this.model.set({ segmentsY: value })
    )
    this.gui.add(this.internalModel, "rotationSpeedX", 0, 1).onChange(
      (value) => this.model.set({ rotationSpeedX: value })
    )
    this.gui.add(this.internalModel, "rotationSpeedY", 0, 1).onChange(
      (value) => this.model.set({ rotationSpeedY: value })
    )
    this.gui.add(this.internalModel, "rotationSpeedZ", 0, 1).onChange(
      (value) => this.model.set({ rotationSpeedZ: value })
    )
    this.gui.add(this.internalModel, "rotationX", 0.0, 2.0 * Math.PI).listen().onChange(
      (value) => this.model.set({ rotationX: value })
    )
    this.gui.add(this.internalModel, "rotationY", 0.0, 2.0 * Math.PI).listen().onChange(
      (value) => this.model.set({ rotationY: value })
    )
    this.gui.add(this.internalModel, "rotationZ", 0.0, 2.0 * Math.PI).listen().onChange(
      (value) => this.model.set({ rotationZ: value })
    )
    this.gui.add(this.internalModel, "zoom", 0, 10).onChange(
      (value) => this.model.set({ zoom: value })
    )
    this.gui.add(this.internalModel, "cameraPosZ", 0, 10).onChange(
      (value) => this.model.set({ cameraPosZ: value })
    )
    this.gui.add(this.internalModel, "depthTest").onFinishChange(
      (value) => this.model.set({ depthTest: value })
    )
    this.gui.add(this.internalModel, "speed", 0, 1).onChange(
      (value) => this.model.set({ speed: value })
    )
    this.gui.add(this.internalModel, "blending", blendingFunctions).onFinishChange(
        (value) => this.model.set({ blending: value })
    )
    this.gui.add(this.internalModel, "opacity", 0.0, 1.0).onChange(
      (value) => this.model.set({ opacity: value })
    )
    this.gui.add(this.internalModel, "pause").onFinishChange(
      (value) => this.model.set({ pause: value })
    )
    this.gui.add(this.internalModel, "pointSize", 1.0, 20.0).onChange(
      (value) => this.model.set({ pointSize: value })
    )
  }
}
