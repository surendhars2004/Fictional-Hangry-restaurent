import Card from "./assets/pages/Card";
import Menuimg from './assets/images/Menuimg.jpg'
function Menu(){

    const foodItems = [
        {
            Name: "Margherita Pizza",
            des: "Classic pizza with tomato sauce, mozzarella, and basil.",
            price: "$12.99",
            type: "Vegetarian",
            ingredients: "Tomato Sauce / Mozzarella / Basil",
            url: "https://source.unsplash.com/1600x1000/?pizza"
        },
        {
            Name: "Chicken Biryani",
            des: "Fragrant rice dish with chicken, spices, and herbs.",
            price: "$15.49",
            type: "Non Vegetarian",
            ingredients: "Basmati Rice / Chicken / Spices",
            url: "https://source.unsplash.com/1600x1000/?biryani"
        },
        {
            Name: "Greek Salad",
            des: "Fresh salad with lettuce, tomatoes, cucumbers, and feta cheese.",
            price: "$8.99",
            type: "Vegetarian",
            ingredients: "Lettuce / Tomatoes / Cucumbers / Feta Cheese",
            url: "https://source.unsplash.com/1600x1000/?salad"
        },
        {
            Name: "Spaghetti Carbonara",
            des: "Pasta with creamy sauce, pancetta, and Parmesan cheese.",
            price: "$10.99",
            type: "Non Vegetarian",
            ingredients: "Spaghetti / Pancetta / Parmesan Cheese",
            url: "https://source.unsplash.com/1600x1000/?pasta"
        },
        {
            Name: "Vegetable Spring Rolls",
            des: "Crispy rolls with mixed vegetables, served with sweet chili sauce.",
            price: "$6.99",
            type: "Vegetarian",
            ingredients: "Spring Roll Wrappers / Mixed Vegetables",
            url: "https://source.unsplash.com/1600x1000/?spring-rolls"
        },
        {
            Name: "Cheeseburger",
            des: "Beef patty with cheese, lettuce, tomato, and onion.",
            price: "$11.49",
            type: "Non Vegetarian",
            ingredients: "Beef Patty / Cheese / Lettuce / Tomato",
            url: "https://source.unsplash.com/1600x1000/?burger"
        },
        {
            Name: "Caprese Salad",
            des: "Salad with tomatoes, mozzarella, and basil, drizzled with olive oil.",
            price: "$9.49",
            type: "Vegetarian",
            ingredients: "Tomatoes / Mozzarella / Basil / Olive Oil",
            url: "https://source.unsplash.com/1600x1000/?caprese"
        },
        {
            Name: "Fish and Chips",
            des: "Fried fish fillets with potato chips and tartar sauce.",
            price: "$12.79",
            type: "Non Vegetarian",
            ingredients: "Fish Fillets / Potatoes / Tartar Sauce",
            url: "https://source.unsplash.com/1600x1000/?fish-chips"
        },
        {
            Name: "Caesar Salad",
            des: "Romaine lettuce with croutons, Parmesan cheese, and Caesar dressing.",
            price: "$7.99",
            type: "Vegetarian",
            ingredients: "Romaine Lettuce / Croutons / Parmesan Cheese / Caesar Dressing",
            url: "https://source.unsplash.com/1600x1000/?caesar-salad"
        },
        {
            Name: "Beef Lasagna",
            des: "Layers of pasta, beef, tomato sauce, and cheese.",
            price: "$13.99",
            type: "Non Vegetarian",
            ingredients: "Pasta / Ground Beef / Tomato Sauce / Cheese",
            url: "https://source.unsplash.com/1600x1000/?lasagna"
        },
        {
            Name: "Vegetable Stir Fry",
            des: "Assorted vegetables stir-fried with soy sauce and garlic.",
            price: "$9.99",
            type: "Vegetarian",
            ingredients: "Assorted Vegetables / Soy Sauce / Garlic",
            url: "https://source.unsplash.com/1600x1000/?stir-fry"
        },
        {
            Name: "Chicken Caesar Wrap",
            des: "Grilled chicken with lettuce, Parmesan cheese, and Caesar dressing in a wrap.",
            price: "$8.99",
            type: "Non Vegetarian",
            ingredients: "Grilled Chicken / Lettuce / Parmesan Cheese / Caesar Dressing",
            url: "https://source.unsplash.com/1600x1000/?chicken-wrap"
        },
        {
            Name: "Mushroom Risotto",
            des: "Creamy rice dish with mushrooms, onions, and Parmesan cheese.",
            price: "$11.49",
            type: "Vegetarian",
            ingredients: "Arborio Rice / Mushrooms / Onions / Parmesan Cheese",
            url: "https://source.unsplash.com/1600x1000/?risotto"
        },
        {
            Name: "Chicken Tikka Masala",
            des: "Chicken cooked in creamy spiced tomato-based sauce.",
            price: "$14.99",
            type: "Non Vegetarian",
            ingredients: "Chicken / Spices / Tomato Sauce / Cream",
            url: "https://source.unsplash.com/1600x1000/?tikka-masala"
        },
        {
            Name: "Tofu Stir Fry",
            des: "Stir-fried tofu with mixed vegetables in a savory sauce.",
            price: "$10.49",
            type: "Vegetarian",
            ingredients: "Tofu / Assorted Vegetables / Soy Sauce",
            url: "https://source.unsplash.com/1600x1000/?tofu"
        },
        {
            Name: "Pulled Pork Sandwich",
            des: "Slow-cooked pulled pork in barbecue sauce served in a sandwich bun.",
            price: "$9.99",
            type: "Non Vegetarian",
            ingredients: "Pulled Pork / Barbecue Sauce / Sandwich Bun",
            url: "https://source.unsplash.com/1600x1000/?pulled-pork"
        }
    ];
    

    return(
        <>
        <div className="menu-parent mt-10">
            <img className="menu-img" src={Menuimg} alt="" />
            <div className="shade"></div>
            <div className="flex pos-text gap-4 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="28" fill="White" class="bi bi-cup-hot" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M.5 6a.5.5 0 0 0-.488.608l1.652 7.434A2.5 2.5 0 0 0 4.104 16h5.792a2.5 2.5 0 0 0 2.44-1.958l.131-.59a3 3 0 0 0 1.3-5.854l.221-.99A.5.5 0 0 0 13.5 6zM13 12.5a2 2 0 0 1-.316-.025l.867-3.898A2.001 2.001 0 0 1 13 12.5M2.64 13.825 1.123 7h11.754l-1.517 6.825A1.5 1.5 0 0 1 9.896 15H4.104a1.5 1.5 0 0 1-1.464-1.175"/>
                <path d="m4.4.8-.003.004-.014.019a4 4 0 0 0-.204.31 2 2 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.6.6 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3 3 0 0 1-.202.388 5 5 0 0 1-.253.382l-.018.025-.005.008-.002.002A.5.5 0 0 1 3.6 4.2l.003-.004.014-.019a4 4 0 0 0 .204-.31 2 2 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.6.6 0 0 0-.09-.252A4 4 0 0 0 3.6 2.8l-.01-.012a5 5 0 0 1-.37-.543A1.53 1.53 0 0 1 3 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a6 6 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 4.4.8m3 0-.003.004-.014.019a4 4 0 0 0-.204.31 2 2 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.6.6 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3 3 0 0 1-.202.388 5 5 0 0 1-.253.382l-.018.025-.005.008-.002.002A.5.5 0 0 1 6.6 4.2l.003-.004.014-.019a4 4 0 0 0 .204-.31 2 2 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.6.6 0 0 0-.09-.252A4 4 0 0 0 6.6 2.8l-.01-.012a5 5 0 0 1-.37-.543A1.53 1.53 0 0 1 6 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a6 6 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 7.4.8m3 0-.003.004-.014.019a4 4 0 0 0-.204.31 2 2 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.6.6 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3 3 0 0 1-.202.388 5 5 0 0 1-.252.382l-.019.025-.005.008-.002.002A.5.5 0 0 1 9.6 4.2l.003-.004.014-.019a4 4 0 0 0 .204-.31 2 2 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.6.6 0 0 0-.09-.252A4 4 0 0 0 9.6 2.8l-.01-.012a5 5 0 0 1-.37-.543A1.53 1.53 0 0 1 9 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a6 6 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 10.4.8"/>
                </svg>
                <div className=" text-white text-2xl">Featured Foods</div>
            </div>
            
        </div>
         <div className="menu ">
         {foodItems.map((data)=>{
          return (
            <Card datas={data}/>
          )
        })}
         </div>
        </>
    )
}
export default Menu