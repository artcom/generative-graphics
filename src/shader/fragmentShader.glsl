uniform sampler2D uColorTexture;

uniform float uOpacity; // [0.0..1.0]
uniform vec3 uAmbientLight;

varying vec2 vLookupUv;
varying vec4 vModelViewPosition;

#if (MAX_POINT_LIGHTS > 0)
  uniform vec3 pointLightColor[MAX_POINT_LIGHTS];
  uniform vec3 pointLightPosition[MAX_POINT_LIGHTS];
#endif

#if MAX_DIR_LIGHTS > 0
  uniform vec3 directionalLightColor[MAX_DIR_LIGHTS];
  uniform vec3 directionalLightDirection[MAX_DIR_LIGHTS];
#endif

void main() {
  vec4 tex = texture2D(uColorTexture, vLookupUv);
  vec4 addedLights = vec4(uAmbientLight.xyz, 1.0);
  vec3 normal = normalize(cross(dFdx(-vModelViewPosition.xyz), dFdy(-vModelViewPosition.xyz)));

  #if (MAX_POINT_LIGHTS > 0)
    for(int i=0; i < MAX_POINT_LIGHTS; i++) {
      vec3 lightDirection = normalize(pointLightPosition[i] - vModelViewPosition.xyz);
      addedLights.rgb += dot(lightDirection, normal) * pointLightColor[i];
    }
  #endif

  #if (MAX_DIR_LIGHTS > 0)
    for(int i=0; i < MAX_DIR_LIGHTS; i++) {
      addedLights.rgb += dot(directionalLightDirection[i], normal) * directionalLightColor[i];
    }
  #endif

  gl_FragColor = vec4(tex.rgb, uOpacity) * addedLights;
}
