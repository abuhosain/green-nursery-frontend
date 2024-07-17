import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import category from "../../../../assets/images/gallery/gallery2.jpg"
export interface ICategory {
  name: string;
  image: string;
  _id? : string;
}

const CategoryCard = ({ name, image }: ICategory) => {
  return (
    <Card
      hoverable
      cover={<img alt={name} src={category} />}
      style={{ width: 300, margin: "0 auto" }}
    >
      <Meta title={name} />
    </Card>
  );
};

export default CategoryCard;
