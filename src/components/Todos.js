import React, { useState } from 'react'
import { addTodos } from '../redux/reducer'
import { connect } from 'react-redux'
import { GoPlus } from 'react-icons/go'
import { motion } from 'framer-motion'
import { ToastContainer, toast } from 'react-toastify';


const mapStateToProps = (state) => {
    return {
        todos : state,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: (obj) => dispatch(addTodos(obj)),
        

    }
}
const Todos = (props) => {

  const [todo, setTodo] = useState('');
  

    

    const handleChange = (e) => {
        setTodo(e.target.value);
    };

    //console.log('props from state', props.todos);

    const add = () => {
    if (todo === "") {
      toast.error('Input is Empty !', {
        position: toast.POSITION.BOTTOM_CENTER
      });
    } else {
      props.addTodo({
        id: Math.floor(Math.random() * 1000),
        item: todo,
        completed: false,
      });
      setTodo("");
    }
  };
  
  return (
      <div className='addTodos'>
          <input
              type='text'
              onChange={(e) => handleChange(e)}
              className='todo-input'
          value={todo}/>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="add-btn"
            onClick={() => add()}
          >
              <GoPlus />
      </motion.button>
      <ToastContainer />
          <br />
          
    
    </div>
  )
}


//use connect method to connect this component with redux store

export default connect(mapStateToProps, mapDispatchToProps)(Todos)