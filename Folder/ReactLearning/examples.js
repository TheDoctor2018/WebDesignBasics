/*Reusable blocks of code, that can take an input: */
function multiple(num1){
    console.log(num1*num1);//100
}
//calling the function
multiple(100);





/*Functional Components */
function Welcome(){
    return <h1>"Hello"</h1>
};

/*Class Components */
class Welcome extends React.Component
{
    render()
    {
        return <h1>"Hello"</h1>
    };
};

