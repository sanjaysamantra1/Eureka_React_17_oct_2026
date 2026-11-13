
export default function CategoryItem(props) {
    const { text, img_url } = props.categoryObj; // Props De-structuring
    return <>
        <img src={img_url} alt="" />
        <div>{text}</div>
    </>
}
