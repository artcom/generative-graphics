import querystring from "querystring"

import presets from "./presets.json"
import Model from "./model"
import View from "./view"
import Gui from "./gui"

const config = querystring.parse(window.location.search.substring(1))

window.onload = () => {
  const preset = "default"
  const model = new Model(presets.remembered[preset][0])
  const view = new View(model)

  if (config.debug === "true") {
    const gui = new Gui(preset, model)
    gui.subscribeToModel()
    view.showStats()
  }

  view.render()
}
