const Events = () => {
  return (
    <div className="bg-transparent mx-4">
      <h2 className="text-[40px] lg:text-[2.75rem] leading-[45px] lg:leading-normal text-center mb-4">
        Eventos
      </h2>
      <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
        Descubre el poder de tu respiración en nuestros encuentros únicos.
      </p>
      <style>
        {`
          .elfsight-app-c6f6b73b-218a-4c42-9aa6-d92b80aff66d {
            background-color: transparent !important;
          }
          /* Target any inner containers that might have white backgrounds */
          .elfsight-app-c6f6b73b-218a-4c42-9aa6-d92b80aff66d > div {
            background-color: transparent !important;
          }
        `}
      </style>
      <script
        src="https://static.elfsight.com/platform/platform.js"
        async
      ></script>
      <div
        className="elfsight-app-c6f6b73b-218a-4c42-9aa6-d92b80aff66d"
        data-elfsight-app-lazy
      ></div>
    </div>
  );
};

export default Events;
