import React, { Fragment, useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo, updateTodo } from '../../store/actions';
import Moment from 'react-moment';

import Modal from '../ModalElement/Modal/Modal';
import './TodoItem.css';

const TodoItem = (props) => {
  const [modalState, setModalState] = useState(false);
  const [isDone, setIsDone] = useState(props.status);
  const dispatch = useDispatch();

  const openModal = () => setModalState(true);

  const closeModal = () => setModalState(false);

  const changeStatus = (event) => {
    event.preventDefault();
    dispatch(updateTodo(props.id));
    setIsDone(!isDone);
  };

  let dynamicClass = 'todo-item-main';
  if (isDone) {
    dynamicClass = 'todo-item-main done-class';
  }

  return (
    <Fragment>
      <Modal
        show={modalState}
        header={'NOTICE!'}
        close={closeModal}
        delete={() => dispatch(deleteTodo(props.id))}
      >
        <div>
          <p>Please note, this action cannot be undone therafter</p>
        </div>
      </Modal>
      <div className={dynamicClass}>
        <div className={'todo-item-content'}>
          <p>{props.title}</p>
          <small>{props.text}</small>
          <small>
            Written On: <Moment date={props.date} format='DD-MM-YYYY' />
          </small>
        </div>
        <div className={'todo-item-controller'}>
          <i onClick={changeStatus} className='fas fa-check-circle fa-2x'></i>
          <i onClick={openModal} className='fas fa-eraser fa-2x'></i>
        </div>
      </div>
    </Fragment>
  );
};

export default TodoItem;
