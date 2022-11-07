const Button = ({ props }) => {
  const { icon, classN, value } = props;
  return (
    <>
      {
        <button className={classN} key={Math.random()}>
          {icon ? (<div>{icon}</div>) : (<></>)}
          {value ? (<span>{value}</span>) : ("NaN")}
        </button>
      }
    </>
  )
}
export default Button;