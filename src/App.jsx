import React, { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import './App.css'
import passwordImg from "./assets/reset-password.png";

function TodoList() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [url, setUrl] = useState("");
  const [isvisiable, setIsVisiable] = useState(false);
  const [todo, setTodo] = useState([]);
 

  const [isEdit, setIsEdit] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

    useEffect(()=>{
        // const Savedata = localStorage.getItem('todo');
        // if(Savedata){
        //     setTodo(JSON.parse(Savedata))
        // }
        const Savedata = JSON.parse(localStorage.getItem("todoList"))
        if(Savedata){
            setTodo(Savedata)
        }
    },[])

    useEffect(()=>{
        if(todo.length > 0){
            localStorage.setItem("todoList", JSON.stringify(todo))
        }

    },[todo])

  const passwordVisiableBtn = () => {
    setIsVisiable(!isvisiable);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isEdit) {
      const updatedTodo = todo.map((item, index) => {
        if (index === editIndex) {
          return { name, url, password };
        }
        return item;
      });
      setTodo(updatedTodo);
      setIsEdit(false);
      setEditIndex(null);
    } else {
      setTodo([...todo, { name, url, password }]);
      setName("");
      setUrl("");
      setPassword("");
    }
    setName("");
      setUrl("");
      setPassword("");
      toast.success("🦄 Password Store Succefully")
  };

  const handleDelete = (index) => {
    const updateTodo = todo.filter((_, i) => i !== index);
    setTodo(updateTodo);

    // for  delelte
    localStorage.setItem("todoList", JSON.stringify(updateTodo));
    toast.error("password deleted")
  };



  const handleEdit = (index) => {
    setName(todo[index].name);
    setUrl(todo[index].url);
    setPassword(todo[index].password);
    setIsEdit(true);
    setEditIndex(index);
  };
  return (
    <>
      <header>
        <label htmlFor="">PassOG</label>
        <nav>
          <p className="green">
            <span className="span-cdn">
              <i class="fa-brands fa-github"></i>
            </span>{" "}
            <span className="moblie-view-sapn">Github</span>
          </p>
          <p className="green">
            <span className="span-cdn">
              <i class="fa-brands fa-linkedin-in"></i>
            </span>{" "}
            <span className="moblie-view-sapn">LinkedIn</span>
          </p>
        </nav>
      </header>

      <div className="circle"></div>
      <div className="all-item-center">
        <div className="warp">
          <div className="text-center">
            <h1 className="text-h1">PassOG</h1>
            <p>Your own password manager</p>
          </div>

          <div className="form-fillds">
            <form action="" onSubmit={handleSubmit}>
              <input
                type="text"
                name="url"
                id="url"
                required
                placeholder="Enter Your Url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              />
              <div className="pass-name">
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <div className="eye">
                  <input
                    type={isvisiable ? "text " : "password"}
                    id="password"
                    placeholder="Enter Your Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <div className="eyeicon" onClick={passwordVisiableBtn}>
                    {isvisiable ? (
                      <span>
                        <i className="fa-solid fa-eye"></i>
                      </span>
                    ) : (
                      <span>
                        <i className="fa-solid fa-eye-slash"></i>
                      </span>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="submit">
                <img src={passwordImg} alt="" id="passimg" />

                <button type="submit" >
                  {" "}
                  addPassword
                </button>
                <ToastContainer />
              </div>
            </form>
          </div>
          <p className="Details">Your Details</p>
          <div className="details-wrap">
            <div className="site">
                <p>Site :</p>
                <p>UserName :</p>
                <p>Password :</p>
            </div>
            {todo.map((item, index) => {
              return (
                <div key={index} className="felx-details">
                  <div className="laptop-view">
                  <p>{item.url}</p>
                  <p>{item.name}</p>
                  {
                    isvisiable? <p>{item.password}</p> :<p>******</p>
                  }
                  
                  <div className="wrap-detele-edit">
                  <button
                    className="delete"
                    onClick={() => handleDelete(index)}
                  >
                    <i class="fa-solid fa-trash"></i>
                  </button>
                  <button className="edit" onClick={() => handleEdit(index)}>
                    <i class="fa-solid fa-pencil"></i>
                  </button>
                  <button><div className="eyeicon-2" onClick={passwordVisiableBtn}>
                    {isvisiable ? (
                      <span>
                        <i className="fa-solid fa-eye"></i>
                      </span>
                    ) : (
                      <span>
                        <i className="fa-solid fa-eye-slash"></i>
                      </span>
                    )}
                  </div></button>
                  </div>
                  </div>
                  <div className="moblie-view-wrap">
                  <div className="moblie-view top-border ">
                    <ul>
                      <li>Site :</li>
                      <li>UserName :</li>
                      <li>Password :</li>
                    </ul>
                  </div>
                  <div className="moblie-view bottom-border">
                    <ul>
                      <li>{item.url}</li>
                      <li>{item.name}</li>
                      {
                        isvisiable? <li>{item.password}</li> :<li>******</li>
                      }
                      <div className="dl">
                      <button
                    className="delete"
                    onClick={() => handleDelete(index)}
                  >
                    <i class="fa-solid fa-trash"></i>
                  </button>
                  <button className="edit" onClick={() => handleEdit(index)}>
                    <i class="fa-solid fa-pencil"></i>
                  </button>
                  <button><div className="eyeicon-2" onClick={passwordVisiableBtn}>
                    {isvisiable ? (
                      <span>
                        <i className="fa-solid fa-eye"></i>
                      </span>
                    ) : (
                      <span>
                        <i className="fa-solid fa-eye-slash"></i>
                      </span>
                    )}
                  </div></button>
                  </div>
                    </ul>
                  </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default TodoList;
