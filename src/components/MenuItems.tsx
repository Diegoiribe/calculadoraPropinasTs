import type { MenuItem } from '../types'

type MenuItemsProps = {
  item: MenuItem
  addItem: (item: MenuItem) => void
}

const MenuItems = ({ item, addItem }: MenuItemsProps) => {
  return (
    <>
      <button
        className="border-2 border-teal-400 w-full p-3 flex justify-between hover:bg-teal-200 rounded-lg"
        onClick={() => addItem(item)}
      >
        <p>{item.name}</p>
        <p className="font-black">${item.price}</p>
      </button>
    </>
  )
}

export default MenuItems
