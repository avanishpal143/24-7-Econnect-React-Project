
export default function WhatsAppFloating() {
  const phoneNumber = '918287936724';
  const message = 'Hello EConnect, I am interested in your services and would like to get more information.';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-6 left-6 z-50 flex items-center group">
      {/* Tooltip text */}
      <span className="absolute left-16 bg-slate-900 text-white text-xs font-semibold px-3 py-1.5 shadow-md pointer-events-none opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 whitespace-nowrap border border-slate-800">
        Chat with us
      </span>

      {/* Button link */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full shadow-lg transition-transform duration-300 hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2"
        aria-label="Chat on WhatsApp"
      >
        {/* Pulse effect */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-35 animate-ping -z-10 group-hover:animate-none" />

        {/* WhatsApp Official SVG Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-7 h-7"
        >
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.176L2.047 22l5.002-1.313A9.957 9.957 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2Zm.11 15.89c-1.8 0-3.46-.57-4.83-1.53l-.35-.24-2.82.74.76-2.73-.27-.39a7.842 7.842 0 0 1-1.3-4.32c0-4.36 3.56-7.91 7.92-7.91 4.36 0 7.92 3.55 7.92 7.91 0 4.37-3.56 7.92-7.92 7.92h-.11Zm3.94-5.32c-.22-.11-1.28-.63-1.48-.7-.2-.07-.34-.11-.49.11-.14.22-.56.7-.68.84-.13.14-.25.16-.47.05a6.002 6.002 0 0 1-1.74-1.07 6.645 6.645 0 0 1-1.2-1.49c-.22-.38-.02-.59.1-.7a9.297 9.297 0 0 0 .5-.67.368.368 0 0 0-.02-.37c-.05-.11-.49-1.18-.67-1.62-.18-.43-.37-.37-.5-.37h-.43c-.15 0-.39.06-.59.28a3.003 3.003 0 0 0-.94 2.24c0 1.32.96 2.6 1.1 2.78.13.19 1.89 2.89 4.58 4.05.64.28 1.14.44 1.53.57.65.2 1.23.18 1.7.1 0-.08.52-.21.6-.42.22-.63.22-1.18.15-1.29-.07-.11-.25-.17-.47-.28Z"
            clipRule="evenodd"
          />
        </svg>
      </a>
    </div>
  );
}
