function Message({num}){
return(
    <div>
        {num>0?(<p>`Число {num} положительное`</p>):num<0?(<p>Число {num} отрицательное</p>):(<p>Введите</p>)}
    </div>
);
};
export default Message;