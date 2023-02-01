;

const ContactInfo = () => {
  return (
    <div className="bg-w-grey  basis-5/12 px-8 py-20">
      <h3 className="uppercase text-white font-roboto-con mb-5 text-3xl font-bold">
        contact us
      </h3>
      <div className="flex flex-col gap-10 items-start">
        <div className="flex items-center justify-center gap-3">
          <span className="w-12 h-12 flex justify-center items-center bg-gray-700 rounded-full flex-none">
            <i className="fa-solid fa-location-dot text-white text-lg" />
          </span>
          <p className="text-gray-200">
            <span className="font-semibold capitalize text-w-yellow">
              address:{" "}
            </span>
            Cité communel 16035 Dar El Beïda, Algeria
          </p>
        </div>

        <div className="flex items-center justify-center gap-3">
          <span className="w-12 h-12 flex justify-center items-center bg-gray-700 rounded-full">
            <i className="fa-solid fa-phone text-white text-lg" />
          </span>
          <p className="text-gray-200">
            <span className="font-semibold capitalize text-w-yellow">
              phone:{" "}
            </span>
            +213 791 74 19 47
          </p>
        </div>

        <div className="flex items-center justify-center gap-3">
          <span className="w-12 h-12 flex justify-center items-center bg-gray-700 rounded-full">
            <i className="fa-solid fa-paper-plane text-white text-lg" />
          </span>
          <p className="text-gray-200">
            <span className="font-semibold capitalize text-w-yellow">
              email:{" "}
            </span>
            contact@itexc-agency.com
          </p>
        </div>

        <div className="flex items-center justify-center gap-3">
          <span className="w-12 h-12 flex justify-center items-center bg-gray-700 rounded-full">
            <i className="text-lg fa-solid fa-globe text-white " />
          </span>
          <p className="text-gray-200">
            <span className="font-semibold capitalize text-w-yellow">
              website:{" "}
            </span>
            itexc-agency.com
          </p>
        </div>
      </div>
    </div>
  );
}

export default ContactInfo