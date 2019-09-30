import presets from "./presets.json"
import Model from "./model"
import View from "./view"
import Gui from "./gui"

export default class GenerativeGraphics {
  constructor(preset = "default", debug = false, container) {
    this.model = new Model(presets.remembered[preset][0])
    this.view = new View(this.model, container)

    if (debug === "true") {
      const gui = new Gui(preset, this.model)
      gui.subscribeToModel()
      this.view.showStats()
    }
  }

  start() {
    this.view.render()
  }

  updateRotation(rotation) {
    this.model.set({ rotationX: rotation[0] })
    this.model.set({ rotationY: rotation[1] })
    this.model.set({ rotationZ: rotation[2] })
  }

  updateColor(color) {
    this.model.set({ ambientLight: [color[0], color[1], color[2]] })
  }
}
