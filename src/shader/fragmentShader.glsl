uniform sampler2D uColorTexture;

uniform float uOpacity; // [0.0..1.0]
uniform vec3 uAmbientLight;

varying vec2 vLookupUv;
varying vec4 vModelViewPosition;

#if (NUM_POINT_LIGHTS > 0)
  uniform vec3 pointLightColor[NUM_POINT_LIGHTS];
  uniform vec3 pointLightPosition[NUM_POINT_LIGHTS];
#endif

#if NUM_DIR_LIGHTS > 0
  uniform vec3 directionalLightColor[NUM_DIR_LIGHTS];
  uniform vec3 directionalLightDirection[NUM_DIR_LIGHTS];
#endif

void main() {
  vec4 tex = texture2D(uColorTexture, vLookupUv);
  vec4 addedLights = vec4(uAmbientLight.xyz, 1.0);
  vec3 normal = normalize(cross(dFdx(-vModelViewPosition.xyz), dFdy(-vModelViewPosition.xyz)));

  #if (NUM_POINT_LIGHTS > 0)
    for(int i=0; i < NUM_POINT_LIGHTS; i++) {
      vec3 lightDirection = normalize(pointLightPosition[i] - vModelViewPosition.xyz);
      addedLights.rgb += dot(lightDirection, normal) * pointLightColor[i];
    }
  #endif

  #if (NUM_DIR_LIGHTS > 0)
    for(int i=0; i < NUM_DIR_LIGHTS; i++) {
      addedLights.rgb += dot(directionalLightDirection[i], normal) * directionalLightColor[i];
    }
  #endif

  gl_FragColor = vec4(tex.rgb, uOpacity) * addedLights;
}
