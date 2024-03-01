

const FormField = ({ labelName, type, name, handleChange, isSurpriseMe,
  handleSurpriseMe, placeholder, value, generatingImage, generateImage, showButton }) => {
  return (
    <div>
      <div className="flex flex-col md:flex-row gap-4">
        {/* <label htmlFor={name} className="block text-sm font-medium text-gray-900">
          {labelName}
        </label> */}
            <input
              type={type}
              name={name}
              placeholder={placeholder}
              value={value}
              id={name}
              onChange={handleChange}
              required
              className = "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#4649ff] focus:border-[#4649ff] outline-none block w-full p-3"
            />
        <div className="flex flex-row gap-3 whitespace-nowrap">
          {isSurpriseMe && (
          <button type="button" onClick={handleSurpriseMe} className="font-semibold bg-[#DE1B89] hover:bg-[#1B1A19] hover:border-[#DE1B89] hover:border-2 text-sm px-5 py-2.5 rounded-[5px] text-white">
            Surprise me
          </button>
        )}
          {
            showButton && (
              <div className="">
          <button type="button" onClick={generateImage} className="text-white bg-[#1B1A19] hover:bg-[#DE1B89]  font-semibold rounded-md text-sm w-full sm:w-auto px-5 py-3 text-center">
            {generatingImage ? "Generating..." : "Generate"}
          </button>
          </div>
            )
         }
        </div>
      </div>
    </div>
  )
}

export default FormField