import Aceptado from "./Aceptado";
import Rechazo from "./Rechazo";
import {
  Modal,
  ModalContent,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
interface ConfirmProps {
  isChecked: Boolean;
}

const ConfirmModal: React.FC<ConfirmProps> = ({ isChecked }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button
        aria-label="Show modal"
        className=" bg-black text-white"
        onPress={onOpen}
      >
        Comprar
      </Button>
      <Modal
        placement="auto"
        size="xl"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody>{isChecked ? <Aceptado /> : <Rechazo />}</ModalBody>
              <ModalFooter className=" flex  justify-center">
                {isChecked ? (
                  <Button
                    aria-label="Close modal"
                    className=" bg-black text-white"
                    onPress={onClose}
                  >
                    Seguir comprando
                  </Button>
                ) : (
                  <Button
                    className=" bg-black text-white"
                    aria-label="return to modal"
                    onPress={onClose}
                  >
                    Reintentar
                  </Button>
                )}
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
export default ConfirmModal;
