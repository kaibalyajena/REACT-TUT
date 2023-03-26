import { useState } from 'react';


//creating components
function MyButton() {
    return (
        <button>I'm a button</button>
    );
}


//nesting components
export default function MyApp() {
    return (
      <div>
        <h1>Welcome to my app</h1>
        <MyButton />
      </div>
    );
}


//adding css
<img className="avatar" alt="avatar"/>
//inside the css file
// .avatar {
//     border-radius: 50%;
// }


//display data
const user = {
    name: 'Hedy Lamarr',
    imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize: 90,
  };
  //there can only one export default function per file
  function Profile() { //export default must be added so that that specefic function can be called in a separate file
    return (
      <>
        <h1>{user.name}</h1>
        <img
          className="avatar"
          src={user.imageUrl}
          alt={'Photo of ' + user.name}
          style={{
            width: user.imageSize,
            height: user.imageSize
          }}
        />
      </>
    );
  }


//conditional rendering
//let content;
// function login(){
//     if (isLoggedIn) {
//         content = <AdminPanel />;
//       } else {
//         content = <LoginForm />;
//       }
//       return (
//         <div>
//           {content}
//         </div>
//       );
// }
//type 2
// {isLoggedIn ? (
//     <AdminPanel />
//   ) : (
//     <LoginForm />
//   )}
//type 3
//{isLoggedIn && <AdminPanel />}


//render list
const products = [
  { title: 'Cabbage', isFruit: false, id: 1 },
  { title: 'Garlic', isFruit: false, id: 2 },
  { title: 'Apple', isFruit: true, id: 3 },
];

function ShoppingList() {
  const listItems = products.map(product =>
    <li
      key={product.id}
      style={{
        color: product.isFruit ? 'magenta' : 'darkgreen'
      }}
    >
      {product.title}
    </li>
  );

  return (
    <ul>{listItems}</ul>
  );
}



//respond to events
function MyButton2() {
  function handleClick() {
    alert('You clicked me!');
  }

  return (
    <button onClick={handleClick}>
      Click me
    </button>
  );
}


//handling state with use state
//each button updates separately
function MyApp2() {
  return (
    <div>
      <h1>Counters that update separately</h1>
      <MyButton />
      <MyButton />
    </div>
  );
}

function MyButton3() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick}>
      Clicked {count} times
    </button>
  );
}
//buttons update together

function MyApp3() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
  }
  return (
    <div>
      <h1>Counters that update together</h1>
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} />
    </div>
  );
}

function MyButton4({ count, onClick }) {
  return (
    <button onClick={onClick}>
      Clicked {count} times
    </button>
  );
}