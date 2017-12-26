import querystring from "querystring"

import GenerativeGraphics from "./generativeGraphics"

const config = querystring.parse(window.location.search.substring(1))

window.onload = () => {
  new GenerativeGraphics("default", config.debug).start()
}
