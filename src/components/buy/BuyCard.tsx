const items = [
  {
    id: 1,
    image:
      "https://s.alicdn.com/@sc04/kf/Ha97dbb0aac56406298064ab1d429fc2bK.jpg_300x300.jpg",
    name: "VEMO Bujía de encendido Q+, calidad de primer equipo",
    price: 250.0,
    shipping: "Sin cargo por envío",
  },
  {
    id: 2,
    image:
      "https://s.alicdn.com/@sc04/kf/Ha97dbb0aac56406298064ab1d429fc2bK.jpg_300x300.jpg",
    name: "VEMO Bujía de encendido Q+, calidad de primer equipo",
    price: 250.0,
    shipping: "Sin cargo por envío",
  },
  {
    id: 3,
    image:
      "https://s.alicdn.com/@sc04/kf/Ha97dbb0aac56406298064ab1d429fc2bK.jpg_300x300.jpg",
    name: "VEMO Bujía de encendido Q+, calidad de primer equipo",
    price: 250.0,
    shipping: "Sin cargo por envío",
  },
  {
    id: 4,
    image:
      "https://s.alicdn.com/@sc04/kf/Ha97dbb0aac56406298064ab1d429fc2bK.jpg_300x300.jpg",
    name: "VEMO Bujía de encendido Q+, calidad de primer equipo",
    price: 250.0,
    shipping: "Cargo por envío $234",
  },
];

const BuyCard = () => {
  return (
    <div>
      <div className="flex flex-col gap-6">
        {items.map((item) => (
          <div
            className="flex items-center p-4 gap-2 bg-CardBg rounded-lg"
            key={item.id}
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-16 h-16 object-contain"
            />
            <div className="flex flex-col px-4 w-1/3">
              <h2 className="font-semibold text-black break-words">
                {item.name}
              </h2>
              <button
                aria-label="delete"
                className="text-red-500 hover:underline justify-start text-left"
              >
                ELIMINAR
              </button>
            </div>
            <div className="flex flex-grow justify-evenly items-center">
              <div className="flex flex-col items-center">
                <div className="flex items-center">
                  <button
                    aria-label="menos"
                    className="text-black border-black border rounded-full p-2"
                  >
                    -
                  </button>
                  <span className="mx-2">1</span>
                  <button
                    aria-label="más"
                    className="text-black border-black border rounded-full p-2"
                  >
                    +
                  </button>
                </div>
                <span className="text-slate-400 text-xs text-center mt-2">
                  10 disponibles
                </span>
              </div>
              <div className="flex flex-col items-end">
                <p className="text-lg font-semibold">
                  ${item.price.toFixed(2)} MXN
                </p>
                <p className="text-sm text-gray-500">{item.shipping}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BuyCard;
