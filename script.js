function numCompare()
{
    let val_A, val_B;
        val_A= prompt("Please input a number as value A");
        val_B= prompt("Please input a number as value B");
        if(val_A>val_B){
            alert("Value A is higher");
        }else if(val_A<val_B){
            alert("Value B is higher");
        }else{
            alert("Value A and Value B are equal");
        }
}