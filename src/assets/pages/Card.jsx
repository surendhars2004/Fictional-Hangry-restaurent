export default function Card(props){

    return(
        <>
         <div className="card">
            
            <img src={props.datas.url} alt="" className="card-img" />
            <h3 className="card-title stylish-font text-orange-600">{props.datas.Name}</h3>
            <p className="card-ingrediants  text-xs my-2">{props.datas.ingredients/* ?.substring(0,100).concat("... ") */}{/* <a href="" className="read-more">Read more</a> */}</p>
            <p className="text-[10px] stylish-bold border border-gray-700 inline px-[3px] py-[1px]">{props.datas.type}</p>
            <p className=" text-[14px] mt-[4px]">{props.datas.price}</p>
            <button className="text-[11px] font-bold border border-yellow-500 mt-3 px-2 text-white p-[3px] bg-yellow-500">ADD TO CART</button>
         </div>
        </>
    )
}