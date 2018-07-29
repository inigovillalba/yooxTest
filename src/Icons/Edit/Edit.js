import React from "react";
import PropTypes from "prop-types";

export default class Edit extends React.Component {
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
        viewBox="0 0 50 50"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <title>Elements/Icon/Edit/White/64px</title>
        <desc>Created with Sketch.</desc>
        <defs />
        <g
          id="Iconography"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
          transform="translate(-498.000000, -4350.000000)"
        >
          <g id="block" transform="translate(120.000000, 233.000000)">
            <g id="Group">
              <g id="64px-white" transform="translate(0.000000, 3934.000000)">
                <g id="icons" transform="translate(84.000000, 80.000000)">
                  <g
                    id="Elements/Icon/Edit/White/64px"
                    transform="translate(288.000000, 96.000000)"
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
                        d="M53.938,9.053 C52.609,7.724 50.841,6.992 48.961,6.992 C47.081,6.992 45.313,7.724 43.983,9.054 L14.027,39.01 L6.06,56.944 L23.983,48.964 L53.938,19.008 C55.268,17.678 56,15.911 56,14.03 C56,12.15 55.268,10.383 53.938,9.053 Z M52.524,17.594 L22.831,47.288 L10,53 L15.704,40.161 L45.397,10.468 C46.381,9.484 47.671,8.992 48.96,8.992 C50.25,8.992 51.539,9.484 52.523,10.468 C54.492,12.436 54.492,15.626 52.524,17.594 Z"
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
