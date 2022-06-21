import { createRef } from 'react';
import { FiCheckSquare } from 'react-icons/fi';

import { Form } from './styles';
import Modal from '../Modal';
import Input from '../Input';
import { FormHandles } from '@unform/core';



interface IModalAddFood{
  isOpen: boolean,
  setIsOpen():void,
  handleAddFood(food:any):void
}


export default function ModalAddFood(props: IModalAddFood){
  const formRef = createRef<FormHandles>();
  const { isOpen, setIsOpen } = props;
  /*
  constructor(props) {
    super(props);

    this.formRef = createRef();
  }
*/
  const handleSubmit = async (data: any) => {
    const {handleAddFood}  = props;

    handleAddFood(data);
    setIsOpen();
  };

  

    return (
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Novo Prato</h1>
          <Input name="image" placeholder="Cole o link aqui" icon={undefined} />

          <Input name="name" placeholder="Ex: Moda Italiana" icon={undefined} />
          <Input name="price" placeholder="Ex: 19.90" icon={undefined} />

          <Input name="description" placeholder="Descrição" icon={undefined} />
          <button type="submit" data-testid="add-food-button">
            <p className="text">Adicionar Prato</p>
            <div className="icon">
              <FiCheckSquare size={24} />
            </div>
          </button>
        </Form>
      </Modal>
    );
  
};


