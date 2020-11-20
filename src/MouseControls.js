import * as THREE from "three"

export default class MouseControls {

  constructor(domElement, callback) {
    this.domElement = domElement
    this.callback = callback
    this.isDragging = false
    this.previousMousePosition = { x: 0, y: 0 }

    this.addEventHandlers()
  }

  addEventHandlers() {
    this.domElement.onmousedown = () => { this.isDragging = true }

    this.domElement.onmouseup = () => { this.isDragging = false }

    this.domElement.onmousemove = () => {
      const deltaMove = {
        x: event.offsetX - this.previousMousePosition.x,
        y: event.offsetY - this.previousMousePosition.y
      }

      if (this.isDragging) {
        const deltaQuaternion = new THREE.Quaternion().setFromEuler(new THREE.Euler(
          this.toRadians(deltaMove.y),
          this.toRadians(deltaMove.x),
          0,
          "XYZ"
        ))

        this.callback(deltaQuaternion)
      }

      this.previousMousePosition = {
        x: event.offsetX,
        y: event.offsetY
      }
    }
  }

  removeEventHandlers() {
    this.domElement.onmousedown = null
    this.domElement.onmouseup = null
    this.domElement.onmousemove = null
  }

  toRadians(angle) {
    return angle * (Math.PI / 180)
  }
}
