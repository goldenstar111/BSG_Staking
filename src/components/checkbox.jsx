const CheckBox = ({ title, ...props }) => (
    <label className="_container  text-sm items-center dark:text-gray-400 flex text-left leading-6" >
        <input type="checkbox" />
        <span className="checkmark rounded-md dark:bg-[#5F6D9C] mr-3" ></span>
        {title}
    </label>
)
export default CheckBox;