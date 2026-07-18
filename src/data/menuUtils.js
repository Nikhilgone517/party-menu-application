import menuData from "./menuData";

export const filterMenuItems = ({
  category = "all",
  diet = "all",
  name = "",
}) => {
  return menuData.filter((item) => {
    const categoryMatch =
      category === "all" || item.category === category;

    const dietMatch =
      diet === "all" ||
      (diet === "veg" && item.isVeg) ||
      (diet === "nonveg" && !item.isVeg);

    const nameMatch =
      item.name.toLowerCase().includes(name.toLowerCase());

    return categoryMatch && dietMatch && nameMatch;
  });
};

export const getMenuItemById = (id) => {
  return menuData.find((item) => item.id === Number(id));
};