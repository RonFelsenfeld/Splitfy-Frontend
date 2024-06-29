export function MainLoader() {
  return (
    <div className="main-loader flex column align-center">
      <svg>
        <g transform="translate(26,26)">
          <g strokeWidth="4" strokeLinecap="round" stroke="rgb(204, 204, 204)">
            <line x1="0" y1="13" x2="0" y2="23" transform="rotate(0, 0, 0)" opacity="1"></line>
            <line x1="0" y1="13" x2="0" y2="23" transform="rotate(30, 0, 0)" opacity="0.91"></line>
            <line
              x1="0"
              y1="13"
              x2="0"
              y2="23"
              transform="rotate(60, 0, 0)"
              opacity="0.8200000000000001"
            ></line>
            <line x1="0" y1="13" x2="0" y2="23" transform="rotate(90, 0, 0)" opacity="0.73"></line>
            <line x1="0" y1="13" x2="0" y2="23" transform="rotate(120, 0, 0)" opacity="0.64"></line>
            <line x1="0" y1="13" x2="0" y2="23" transform="rotate(150, 0, 0)" opacity="0.55"></line>
            <line
              x1="0"
              y1="13"
              x2="0"
              y2="23"
              transform="rotate(180, 0, 0)"
              opacity="0.45999999999999996"
            ></line>
            <line x1="0" y1="13" x2="0" y2="23" transform="rotate(210, 0, 0)" opacity="0.37"></line>
            <line x1="0" y1="13" x2="0" y2="23" transform="rotate(240, 0, 0)" opacity="0.28"></line>
            <line
              x1="0"
              y1="13"
              x2="0"
              y2="23"
              transform="rotate(270, 0, 0)"
              opacity="0.19000000000000006"
            ></line>
            <line
              x1="0"
              y1="13"
              x2="0"
              y2="23"
              transform="rotate(300, 0, 0)"
              opacity="0.09999999999999998"
            ></line>
            <line
              x1="0"
              y1="13"
              x2="0"
              y2="23"
              transform="rotate(330, 0, 0)"
              opacity="0.09999999999999998"
            ></line>
          </g>
        </g>
      </svg>
      <h3 className="loading-msg">Loading</h3>
    </div>
  )
}
