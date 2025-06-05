import Client from "../Client";
import { Category } from "#types/api/admin/category/Category";
import { MainCategory } from "#types/api/admin/category/MainCategory";
import createRestEndpoint from "../../utils/createRestEndpoint";

class CategoryClient extends Client {
  public categories = createRestEndpoint<Category>(this, "/category", "category");
  public mainCategories = createRestEndpoint<MainCategory>(this, "/main-category", "main category");
}

export default CategoryClient;
