uniform float uStep; // [0.0..N]
uniform float uScale; // [0.0..1.0]
uniform int uMorph; // 0 | 1 | 2
uniform float uMorphStep; // [0.0..1.0]

uniform sampler2D uNoiseTexture;

uniform float uPointSize;

varying vec2 vLookupUv;
varying vec4 vModelViewPosition;

vec3 getPositionFromTexture(float step) {
  vLookupUv = (position.xy + vec2(0.5,0.5)) * uScale + vec2(1, 1) * step;
  vec4 tex = texture2D(uNoiseTexture, vLookupUv);

  return tex.rgb - vec3(0.5, 0.5, 0.5);
}

void main() {
  vec3 texPosition = mix(
      getPositionFromTexture(uStep),
      position,
      uMorphStep
  );

  vModelViewPosition = modelViewMatrix * vec4(texPosition.xyz, 1.0);

  gl_PointSize = uPointSize;
  gl_Position = projectionMatrix * vModelViewPosition;
}
