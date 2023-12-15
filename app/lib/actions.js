"use server";
import { redirect } from "next/navigation";
import { Product, User } from "./modules";
import { connectToDB } from "./utils";
import { revalidatePath } from "next/cache";
import bcrypt from "bcrypt";

export const addUser = async (formData) => {
  const { username, email, password, address, phone, isAdmin, isActive } =
    Object.fromEntries(formData);
  try {
    connectToDB();
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      address,
      phone,
      isAdmin,
      isActive,
    });
    await newUser.save();
  } catch (error) {
    throw new Error(`cant save the user: ${error.message}`);
  }
  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};

export const updateUser = async (formData) => {
  const { id, username, email, password, address, phone, isAdmin, isActive } =
    Object.fromEntries(formData);
  try {
    connectToDB();
    const updateFields = {
      username,
      email,
      password,
      address,
      phone,
      isAdmin,
      isActive,
    };

    Object.keys(updateFields).forEach(
      (key) =>
        updateFields[key] === "" || (undefined && delete updateFields[key])
    );
    await User.findByIdAndUpdate(id, updateFields);
  } catch (error) {
    throw new Error(`cant save the user: ${error.message}`);
  }
  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};

export const addProduct = async (formData) => {
  const { title, desc, price, stock, color, size } =
    Object.fromEntries(formData);
  try {
    connectToDB();

    const newProduct = new Product({
      title,
      desc,
      price,
      stock,
      color,
      size,
    });
    await newProduct.save();
  } catch (error) {
    throw new Error(`cant save the user: ${error.message}`);
  }
  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
};

export const updateProduct = async (formData) => {
  const { id, title, desc, price, stock, color, size } =
    Object.fromEntries(formData);
  try {
    connectToDB();
    const updateFields = {
      title,
      desc,
      price,
      stock,
      color,
      size,
    };

    Object.keys(updateFields).forEach(
      (key) =>
        updateFields[key] === "" || (undefined && delete updateFields[key])
    );
    await Product.findByIdAndUpdate(id, updateFields);
  } catch (error) {
    throw new Error(`cant save the Product: ${error.message}`);
  }
  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
};

export const deleteProduct = async (formData) => {
  const { id } = Object.fromEntries(formData);
  try {
    connectToDB();
    await Product.findByIdAndDelete(id);
  } catch (error) {
    throw new Error(`cant delete the product: ${error.message}`);
  }
  revalidatePath("/dashboard/products");
};

export const deleteUser = async (formData) => {
  const { id } = Object.fromEntries(formData);
  try {
    connectToDB();
    await User.findByIdAndDelete(id);
  } catch (error) {
    throw new Error(`cant delete the user: ${error.message}`);
  }
  revalidatePath("/dashboard/users");
};
