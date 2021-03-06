import React from "react";
import PropTypes from "prop-types";

export default class Delivery extends React.Component {
  static propTypes = { width: PropTypes.number, height: PropTypes.number };
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
        viewBox="0 0 56 56"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <title>Elements/Icon/Delivery/White/64px</title>
        <desc>Created with Sketch.</desc>
        <defs />
        <g
          id="Iconography"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
          transform="translate(-784.000000, -4251.000000)"
        >
          <g id="block" transform="translate(120.000000, 233.000000)">
            <g id="Group">
              <g id="64px-white" transform="translate(0.000000, 3934.000000)">
                <g id="icons" transform="translate(84.000000, 80.000000)">
                  <g
                    id="Elements/Icon/Delivery/White/64px"
                    transform="translate(576.000000, 0.000000)"
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
                        d="M32,4 C16.536,4 4,16.536 4,32 C4,47.464 16.536,60 32,60 C47.464,60 60,47.464 60,32 C60,16.536 47.464,4 32,4 Z M57.975,31 L43.65,31 C43.411,21.458 39.776,12.766 33.904,6.077 C47.025,7.033 57.471,17.761 57.975,31 Z M22.35,33 L41.65,33 C41.405,42.235 37.799,50.647 32,57.043 C26.201,50.647 22.594,42.235 22.35,33 Z M22.35,31 C22.595,21.765 26.201,13.353 32,6.957 C37.799,13.353 41.405,21.765 41.65,31 L22.35,31 Z M30.096,6.077 C24.224,12.766 20.589,21.458 20.35,31 L6.025,31 C6.529,17.761 16.975,7.033 30.096,6.077 Z M6.025,33 L20.35,33 C20.589,42.542 24.224,51.234 30.096,57.923 C16.975,56.967 6.529,46.239 6.025,33 Z M33.904,57.923 C39.776,51.234 43.411,42.542 43.65,33 L57.974,33 C57.471,46.239 47.025,56.967 33.904,57.923 Z"
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
