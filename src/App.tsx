import React from 'react';
import UserInfoDisplay from './components/UserInfoDisplay';
import Card from './interface/CardProps';

const App: React.FC = () => {
  const userData = {
    userName: 'Mike Jones',
    age: 30,
    email: 'Who@gmail.com'
  };


  return (
    <>
      <UserInfoDisplay {...userData} />

      <h1>Question 2</h1>

      <Card>
        <h2>Coding Temple</h2>
      </Card>

      <Card>
        <img src='https://codingtemple.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F833abfe9-9ed0-4d7c-9473-f1ece2104e38%2F49c2a77e-2ef8-4195-8d5d-ef3959a547f2%2Fct-logo.png?table=block&id=00f43e98-61ee-41cd-a5d6-3347acdea56f&spaceId=833abfe9-9ed0-4d7c-9473-f1ece2104e38&width=250&userId=&cache=v2'
        alt='Coding Temple' />
      </Card>


      </>
  

  );

  
}

export default App;


