const Events = () => {
  return (
    <div className="bg-transparent mx-4">
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
