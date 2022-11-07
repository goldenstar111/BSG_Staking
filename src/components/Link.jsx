import svgfiles from "../constants/svg_files/svglisg";
const Link = ({ data }) => {
  const { info, url, value, classN } = data;
  return (
    <a href={info} className={classN}>
      <img src={url} alt="value" />
      {value}
    </a>
  )
}
export default Link();