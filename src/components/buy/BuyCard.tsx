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
      <div className=" bg-CardBg flex flex-col rounded-lg  overflow-scroll ">
        {items.map((item) => (
          <div
            className="flex items-center justify-between  p-4 border-b gap-4 "
            key={item.id}
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-16 h-16 object-contain"
            />
            <div className="flex flex-col px-4">
              <h2 className="font-semibold text-black">{item.name}</h2>
              <button className="text-red-500 hover:underline justify-start text-left">
                ELIMINAR
              </button>
            </div>
            <div className=" flex-col items-center">
              <div className="">
                <button className="text-black border-black border rounded-full p-2">
                  -
                </button>
                <span className="mx-2">1</span>
                <button className="text-black border-black border rounded-full p-2">
                  +
                </button>
              </div>
              <div className=" flex mt-2">
                <span className=" text-slate-400 text-xs text-center">
                  10 disponibles
                </span>
              </div>
            </div>
            <div className="text-right ">
              <p className="text-lg font-semibold">
                ${item.price.toFixed(2)} MXN
              </p>
              <p className="text-sm text-gray-500">{item.shipping}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BuyCard;
