import React from "react";
import PropTypes from "prop-types";

export default class GiftCards extends React.Component {
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
        viewBox="0 0 56 48"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <title>Elements/Icon/GiftCards/White/64px</title>
        <desc>Created with Sketch.</desc>
        <defs />
        <g
          id="Iconography"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
          transform="translate(-592.000000, -4451.000000)"
        >
          <g id="block" transform="translate(120.000000, 233.000000)">
            <g id="Group">
              <g id="64px-white" transform="translate(0.000000, 3934.000000)">
                <g id="icons" transform="translate(84.000000, 80.000000)">
                  <g
                    id="Elements/Icon/GiftCards/White/64px"
                    transform="translate(384.000000, 192.000000)"
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
                        d="M4,12 L4,60 L60,60 L60,12 L4,12 Z M6,14 L20.727,14 L6,22.849 L6,14 Z M58,58 L42.181,58 L58,48.495 L58,58 Z M58,46.161 L38.297,58 L6,58 L6,25.182 L24.61,14 L58,14 L58,46.161 Z M20,42 L44,42 L44,40 L20,40 L20,42 Z M20,31 L44,31 L44,29 L20,29 L20,31 Z"
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
