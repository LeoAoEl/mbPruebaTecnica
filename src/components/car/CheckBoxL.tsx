import { CheckboxGroup, Checkbox } from "@nextui-org/react";

export default function CheckBoxL() {
  return (
    <CheckboxGroup
      label="Marcas"
      defaultValue={["jetta"]}
      className="bg-white p-4"
    >
      <Checkbox value="jetta">Jetta</Checkbox>
      <Checkbox value="alite">Autolite</Checkbox>
      <Checkbox value="Bosch">Bosch</Checkbox>
      <Checkbox value="champion">Champion</Checkbox>
      <Checkbox value="denso">Denso</Checkbox>
      <Checkbox value="ngk">NGK</Checkbox>
    </CheckboxGroup>
  );
}
