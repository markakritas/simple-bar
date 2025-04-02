// Styles for /lib/components/data/weather.jsx component
export const weatherStyles = /* css */ `
.weather {
  position: relative;
  color: var(--foreground);
  background-color: var(--minor);
  overflow: hidden;
  z-index: 0;
  font-family: "Cartograph CF";
  font-style: italic;
  font-size: 12px;
}
.simple-bar--widgets-background-color-as-foreground .weather {
  background-color: transparent;
}
.weather__gradient {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.65;
  z-index: -1;
}
.weather--sunrise .weather__gradient {
  background: linear-gradient(to top right, var(--main), var(--red), var(--yellow), var(--blue));
}
.weather--sunset .weather__gradient {
  background: linear-gradient(to bottom right, var(--blue), var(--yellow), var(--red), var(--magenta), var(--main));
}
.simple-bar--no-color-in-data .weather__gradient {
  display: none;
}
.sun-icon,
.moon-icon {
  transform-origin: 50% 50%;
  animation: sunny-and-moon-scale-and-rotate 2560ms ease infinite;
}
@keyframes sunny-and-moon-scale-and-rotate {
  50% {
    transform: rotate(14deg);
  }
}
.cloud-icon {
  transform: translateY(-1%) rotate(5deg);
  animation: cloud-levitating 2560ms ease-in-out infinite;
}
@keyframes cloud-levitating {
  50% {
    transform: translateY(10%) rotate(-3deg);
  }
}
.rain-icon > g > path:nth-child(3) {
  animation: rain-translate 2560ms ease-in-out infinite;
}
.rain-icon > g > path:nth-child(2) {
  animation: rain-translate 2560ms 320ms ease-in-out infinite;
}
.rain-icon > g > path:nth-child(1) {
  animation: rain-translate 2560ms 640ms ease-in-out infinite;
}
@keyframes rain-translate {
  0% {
    opacity: 0;
    transform: translateY(-10%);
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 0;
    transform: translateY(10%);
  }
}
.snow-icon > g > path:nth-child(6) {
  animation: phasing-snow 2560ms ease-in-out infinite;
}
.snow-icon > g > path:nth-child(5) {
  animation: phasing-snow 2560ms 320ms ease-in-out infinite;
}
.snow-icon > g > path:nth-child(4) {
  animation: phasing-snow 2560ms 640ms ease-in-out infinite;
}
.snow-icon > g > path:nth-child(3) {
  animation: phasing-snow 2560ms 960ms ease-in-out infinite;
}
.snow-icon > g > path:nth-child(2) {
  animation: phasing-snow 2560ms 1280ms ease-in-out infinite;
}
.snow-icon > g > path:nth-child(1) {
  animation: phasing-snow 2560ms 1600ms ease-in-out infinite;
}
@keyframes phasing-snow {
  50% {
    opacity: 0.1;
  }
}
.fog-icon > g > path:nth-child(8) {
  animation: fog-phasing 2560ms -640ms ease-in-out infinite;
}
.fog-icon > g > path:nth-child(7) {
  animation: fog-phasing 2560ms -320ms ease-in-out infinite;
}
.fog-icon > g > path:nth-child(6) {
  animation: fog-phasing 2560ms 0ms ease-in-out infinite;
}
.fog-icon > g > path:nth-child(5) {
  animation: fog-phasing 2560ms 320ms ease-in-out infinite;
}
.fog-icon > g > path:nth-child(4) {
  animation: fog-phasing 2560ms 640ms ease-in-out infinite;
}
.fog-icon > g > path:nth-child(3) {
  animation: fog-phasing 2560ms 960ms ease-in-out infinite;
}
.fog-icon > g > path:nth-child(2) {
  animation: fog-phasing 2560ms 1280ms ease-in-out infinite;
}
.fog-icon > g > path:nth-child(1) {
  animation: fog-phasing 2560ms 1600ms ease-in-out infinite;
}
@keyframes fog-phasing {
  50% {
    opacity: 0.2;
  }
}
.storm-icon > g > path:nth-child(3) {
  animation: flashing-storm 2560ms ease-in-out infinite;
}
.storm-icon > g > path:nth-child(2) {
  animation: flashing-storm 2560ms 320ms ease-in-out infinite;
}
.storm-icon > g > path:nth-child(1) {
  animation: flashing-storm 2560ms 640ms ease-in-out infinite;
}
@keyframes flashing-storm {
  15%,
  30%,
  34% {
    opacity: 1;
  }
  16%,
  31% {
    opacity: 0;
  }
}
`;
