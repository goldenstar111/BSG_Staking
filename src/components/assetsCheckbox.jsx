
const AssetsCheckBox = ({ title, index, selectedIndex, handle, ...props }) => (
    <label className="c_container text-sm" >
        <input type="checkbox" checked={index == selectedIndex ? true : false} onClick={() => handle(index)} />
        <span className="rounded-full bg-[#eee] asset_check" ></span>
    </label>
)
export default AssetsCheckBox;