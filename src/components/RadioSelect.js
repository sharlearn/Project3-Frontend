const RadioSelect = ({ options, name, labelProps, labelValue, ...props }) => {
    return options.map((size, index) => (
        <div key={index}>
          <input
            type="radio"
            className="btn-check"
            name={name}
            autocomplete="off"
            {...props}
          />
          <label
            className="btn btn-outline-dark"
            {...labelProps}
          >
            {labelValue}
          </label>
        </div>
      ))
}