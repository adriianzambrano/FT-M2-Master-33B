export default function SearchBar(props) {
   return (
      <div>
         <input type='search' />
         <button onClick={()=>{props.onSearch(5)}}> Buscar </button>
      </div>
   );
}
