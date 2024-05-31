import { Checkbox } from "@nextui-org/react";

function CheckBox() {
  return (
    <div className=" flex flex-col gap-4 py-4">
      <Checkbox size="sm">
        Acepto los Términos y condiciones y autorizo el uso de mis datos de
        acuerdo a la Declaración de Privacidad.
      </Checkbox>

      <Checkbox size="sm">Acepto recibir información por correo</Checkbox>
    </div>
  );
}

export default CheckBox;
