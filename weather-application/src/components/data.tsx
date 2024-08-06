import image1 from "../images/computer-mouse.jpg"
import image2 from "../images/hp_elitebook_mobile.jpg"
import image3 from "../images/k_Photo_Lifestyle_2019-09-how-to-clean-a-tv-with-pantry-ingredients_How_To_Clean_Your_TV_Using_Pantry_Ingredients_Lead_Option_1.jpg"
import image4 from "../images/xxl-desktop-pc-98013994-5c4dcc47c9e77c0001380389.jpg"


export interface Description {
    id:number,
    title:string,
    description:string,
    imagePath:string
}

const myData:Description[] = [
    {
        id: 1,
        title: "Device One",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt mollitia corporis voluptas ullam doloremque cum sequi quas facere exercitationem. Reprehenderit possimus facilis cupiditate, totam ad distinctio et voluptate deleniti itaque.",
        imagePath: image1
    },
    {
        id: 2,
        title: "Device Two",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt mollitia corporis voluptas ullam doloremque cum sequi quas facere exercitationem. Reprehenderit possimus facilis cupiditate, totam ad distinctio et voluptate deleniti itaque.",
        imagePath: image2
    },
    {
        id: 3,
        title: "Device Three",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt mollitia corporis voluptas ullam doloremque cum sequi quas facere exercitationem. Reprehenderit possimus facilis cupiditate, totam ad distinctio et voluptate deleniti itaque.",
        imagePath: image3
    },
    {
        id: 4,
        title: "Device Four",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt mollitia corporis voluptas ullam doloremque cum sequi quas facere exercitationem. Reprehenderit possimus facilis cupiditate, totam ad distinctio et voluptate deleniti itaque.",
        imagePath: image4
    }
]

export default myData 