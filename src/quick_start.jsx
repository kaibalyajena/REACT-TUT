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