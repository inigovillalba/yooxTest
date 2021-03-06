import React from "react";
import PropTypes from "prop-types";

export default class Favourites extends React.Component {
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
        viewBox="0 0 64 62"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <title>Elements/Icon/Favourites/White/64px</title>
        <desc>Created with Sketch.</desc>
        <defs />
        <g
          id="Iconography"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
          transform="translate(-204.000000, -4439.000000)"
        >
          <g id="block" transform="translate(120.000000, 233.000000)">
            <g id="Group">
              <g id="64px-white" transform="translate(0.000000, 3934.000000)">
                <g id="icons" transform="translate(84.000000, 80.000000)">
                  <g
                    id="Elements/Icon/Favourites/White/64px"
                    transform="translate(0.000000, 192.000000)"
                  >
                    <g>
                      <path
                        d="M32,6.608 L38.74,26 L58.192,26 L42.915,37.938 L48.185,57.006 L32,46.09 L15.815,57.005 L21.085,37.937 L5.808,26 L25.26,26 L32,6.608 Z M32,0.517 L23.837,24 L0,24 L18.802,38.691 L12.445,61.69 L32,48.502 L51.555,61.69 L45.199,38.691 L64,24 L40.163,24 L32,0.517 Z"
                        id="Shape"
                        fill={fillColor}
                        fillRule="nonzero"
                      />
                      <rect
                        id="Rectangle-path"
                        transform="translate(32.000000, 32.000000) rotate(90.000000) translate(-32.000000, -32.000000) "
                        x="-7.10542736e-15"
                        y="0"
                        width={width}
                        height={height}
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
