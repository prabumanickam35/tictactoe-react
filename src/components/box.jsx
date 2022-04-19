const Box = ({data, handleClick, pos}) => {
    // console.log({boxes});
    let style = "cell";

    if(data === "X") style += " x-filled";
    if(data === "O") style += " o-filled";

    return  <td className={style} onClick={handleClick}>
        {data}
    </td>
    
}

export default Box;