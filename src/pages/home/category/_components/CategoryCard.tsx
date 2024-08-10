import { Card } from "antd";
import Meta from "antd/es/card/Meta";
export interface ICategory {
  name: string;
  image: string;
  _id? : string;
}

const CategoryCard = ({ name, image }: ICategory) => {
  return (
    <Card
      hoverable
      cover={<img alt={name} src={image}  style={{ height: 200, objectFit: "cover", width: "100%" }} />}
      style={{ width: 300, margin: "0 auto",    }}
    >
      <Meta title={name} />
    </Card>
  );
};

export default CategoryCard;
