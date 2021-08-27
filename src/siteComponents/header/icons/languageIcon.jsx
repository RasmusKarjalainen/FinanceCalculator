const LanguageIcon = ({source, alt, action, ref}) => {
    return <img src={source} alt={alt} onClick={action} ref={ref}/>
}

export default LanguageIcon