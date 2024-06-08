import { Switch, cn } from "@nextui-org/react";

const SwitchComponent = () => {
  const Data = ["Llega mañana", "Envío gratis", "Tiendas oficiales"];

  return (
    <div className=" flex md:flex-col flex-row gap-4 ">
      {Data.map((tema, index) => (
        <Switch
          key={index}
          classNames={{
            base: cn(
              "md:inline-flex md:flex-row-reverse flex-wrap-reverse text-center w-fit md:w-full max-w-sm bg-content1 hover:bg-content2  items-center",
              "justify-between cursor-pointer rounded-lg gap-2 p-4 border-2 border-transparent",
              "data-[selected=true]:border-primary"
            ),
            wrapper: "p-0 h-4 overflow-visible",
            thumb: cn(
              "w-6 h-6 border-2 shadow-lg",
              "group-data-[hover=true]:border-primary",
              //selected
              "group-data-[selected=true]:ml-6",
              // pressed
              "group-data-[pressed=true]:w-7",
              "group-data-[selected]:group-data-[pressed]:ml-4"
            ),
          }}
        >
          <div className="flex md:flex-col flex-row gap-1">
            <p className="md:text-medium text-xs">{tema}</p>
          </div>
        </Switch>
      ))}
    </div>
  );
};

export default SwitchComponent;
