const ButtonUi = ({onClick, children, className}:any) => {
    return  <button onClick={onClick} className={className}>
          {children}
      </button>
}

export default ButtonUi