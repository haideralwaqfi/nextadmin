import { Product, User } from "./modules";
import { connectToDB } from "./utils";

export const fetchUsers = async (q, page) => {
  const regex = new RegExp(q, "i");
  const ITEMS_PER_PAGE = 3;
  try {
    connectToDB();
    const count = await User.find({ username: { $regex: regex } }).count();
    const users = await User.find({ username: { $regex: regex } })
      .limit(ITEMS_PER_PAGE)
      .skip(ITEMS_PER_PAGE * (page - 1));
    return { users, count };
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch users!");
  }
};

export const fetchUser = async (id) => {
  try {
    connectToDB();
    const user = User.findById(id);
    return user;
  } catch (error) {
    console.log(error);
    throw new Error(`Failed to fetch user: ${error.message}`);
  }
};

export const fetchProducts = async (q, page) => {
  const regex = new RegExp(q, "i");
  const ITEMS_PER_PAGE = 3;
  try {
    connectToDB();
    const count = await Product.find({ title: { $regex: regex } }).count();
    const products = await Product.find({ title: { $regex: regex } })
      .limit(ITEMS_PER_PAGE)
      .skip(ITEMS_PER_PAGE * (page - 1));
    return { products, count };
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch products!");
  }
};

export const fetchProduct = async (id) => {
  try {
    connectToDB();
    const product = Product.findById(id);
    return product;
  } catch (error) {
    console.log(error);
    throw new Error(`Failed to fetch product: ${error.message}`);
  }
};
