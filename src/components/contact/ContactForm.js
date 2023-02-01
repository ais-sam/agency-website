;

const ContactForm = () => {
  return (
    <div className="basis-7/12 py-20 lg:pl-8 px-6 lg:px-0">
      <h3 className="uppercase font-roboto-con mb-3 text-3xl font-bold">
        get in touch
      </h3>
      <form>
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-3 mb-3">
          <input
            type="text"
            placeholder="Name"
            className="p-2 border-2 border-w-yellow focus:outline-none rounded-sm flex-1"
          />
          <input
            type="email"
            placeholder="Email"
            className="p-2 border-2 border-w-yellow focus:outline-none rounded-sm flex-1"
          />
        </div>
        <input
          type="text"
          placeholder="Subject"
          className="block w-full p-2 border-2 border-w-yellow focus:outline-none rounded-sm mb-3"
        />
        <textarea
          type="text"
          placeholder="Message"
          rows="8"
          className="w-full resize-none p-2 border-2 border-w-yellow focus:outline-none rounded-sm mb-3"
        />
        <button className="uppercase text-sm font-semibold text-white bg-w-yellow p-2 rounded-sm">
          send message
        </button>
      </form>
    </div>
  );
}

export default ContactForm