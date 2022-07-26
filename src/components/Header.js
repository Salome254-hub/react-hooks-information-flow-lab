function Header({darkMode,onDarkModeClick}){
 
    function handleDarkModeClick() {
     onDarkModeClick()
    }
     return(
       <header>
         <h2>Shopster</h2>
         <button onClick={handleDarkModeClick}>
           {darkMode ? "Dark" : "Light"} Mode
         </button>
       </header>
     )
 }
 
 export default Header;