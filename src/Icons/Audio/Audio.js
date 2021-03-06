import React from "react";
import PropTypes from "prop-types";

export default class Audio extends React.Component {
  static propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    fillColor: PropTypes.string
  };

  static defaultProps = { width: 20, height: 20, fillColor: "#ffffff" };

  render() {
    const { width, height, fillColor } = this.props;

    return (
      <svg
        width={width}
        height={height}
        viewBox="0 0 55 48"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <title>Elements/Icon/AudioOn/White/64px</title>
        <desc>Created with Sketch.</desc>
        <defs />
        <g
          id="Iconography"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
          transform="translate(-400.000000, -4253.000000)"
        >
          <g id="block" transform="translate(120.000000, 233.000000)">
            <g id="Group">
              <g id="64px-white" transform="translate(0.000000, 3934.000000)">
                <g id="icons" transform="translate(84.000000, 80.000000)">
                  <g
                    id="Elements/Icon/AudioOn/White/64px"
                    transform="translate(192.000000, 0.000000)"
                  >
                    <g>
                      <rect
                        id="Rectangle-path"
                        transform="translate(32.000000, 32.000000) rotate(90.000000) translate(-32.000000, -32.000000) "
                        x="-7.10542736e-15"
                        y="0"
                        width={width}
                        height={height}
                      />
                      <path
                        d="M17.137,19 L4,19 L4,41 L17.137,41 L17.141,41.002 L38,53.535 L38,6.465 L17.141,18.998 L17.137,19 Z M36,10 L36,50 L17.692,39 L6,39 L6,21 L17.692,21 L36,10 Z M43.386,19.399 C46.031,22.155 47.667,25.887 47.667,30 C47.667,34.113 46.031,37.844 43.386,40.601 L45.138,41.654 C47.943,38.574 49.667,34.494 49.667,30.001 C49.667,25.508 47.943,21.427 45.138,18.348 L43.386,19.399 Z M53.251,13.471 L51.514,14.515 C54.942,18.752 57,24.139 57,30 C57,35.861 54.942,41.248 51.514,45.485 L53.251,46.529 C56.847,41.984 59,36.245 59,30 C59,23.755 56.847,18.016 53.251,13.471 Z"
                        id="Shape"
                        fill={fillColor}
                        fillRule="nonzero"
                      />
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </g>
      </svg>
    );
  }
}
