const SimpleInput = ({type, title, action, reference}) => {
  return (
      <span className={'inlineElement'}>
        <label style={{display: 'block'}}>{title}</label>
        <input type={type} onChange={action} ref={reference} />
      </span>
  )
}

export default SimpleInput