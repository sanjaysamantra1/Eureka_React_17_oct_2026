import CategoryItem from "./CategoryItem";

export default function Categories() {
    const categoryArr = [
        { text: "For You", img_url: "https://static-assets-web.flixcart.com/apex-static/images/svgs/L1Nav/all.svg" },
        { text: "Fashion", img_url: "https://static-assets-web.flixcart.com/apex-static/images/svgs/L1Nav/fashion.svg" },
        { text: "Mobiles", img_url: "https://static-assets-web.flixcart.com/apex-static/images/svgs/L1Nav/mobiles.svg" },
        { text: "Electronics", img_url: "https://static-assets-web.flixcart.com/apex-static/images/svgs/L1Nav/electronics.svg" },
        { text: "Home", img_url: "https://static-assets-web.flixcart.com/apex-static/images/svgs/L1Nav/all.svg" },
        { text: "Appliances", img_url: "https://static-assets-web.flixcart.com/apex-static/images/svgs/L1Nav/fashion.svg" },
        { text: "Furniture", img_url: "https://static-assets-web.flixcart.com/apex-static/images/svgs/L1Nav/mobiles.svg" },
        { text: "Books", img_url: "https://static-assets-web.flixcart.com/apex-static/images/svgs/L1Nav/electronics.svg" },
    ];
    return <div className="container">
        <div className="row">
            {categoryArr.map((categoryObj) => {
                return <div className="col">
                    <CategoryItem categoryObj={categoryObj}>
                    </CategoryItem>
                </div>
            })}
        </div>
    </div>
}