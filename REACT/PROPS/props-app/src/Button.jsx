// const obj = {
//   name: 'done',
//   age:18
// }

const arr = ['done' , 'submit', 'click']

const [a,b,c] = arr;

const Button = (props) =>

{
return (
  <>
    <div className="flex  justify-center mt-5 space-y-2 md:flex-row md:space-x-2 md:space-y-0 m-auto">
      <button
        type="button"
        className="rounded-md border border-black px-3 py-2 bg-black text-white text-2xl font-semibold  shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
      >
        {props.name} {props.age}
      </button>
    </div>
  </>
);
}

export default Button;


export function Button2({name}) {
  return(
    <>
    <div className="flex  justify-center mt-5 space-y-2 md:flex-row md:space-x-2 md:space-y-0 m-auto">
     
    <App name="{}"/>

      </div>



    </>
)
}
  
